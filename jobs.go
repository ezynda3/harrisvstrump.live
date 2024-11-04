package main

import (
	"context"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"os"
	"path/filepath"
	"strconv"
	"strings"
	"time"

	"git.mark3labs.com/harrisvstrump/constants"
	"git.mark3labs.com/harrisvstrump/types"
	"github.com/charmbracelet/log"
	"github.com/nats-io/nats.go"
	"github.com/nats-io/nats.go/jetstream"
	"github.com/pocketbase/pocketbase"
)

func setupJobs(app *pocketbase.PocketBase, nc *nats.Conn) {
	_ = app

	// Load all state markets jobs
	js, err := jetstream.New(nc)
	if err != nil {
		log.Fatal(err)
	}

	kv, err := js.CreateOrUpdateKeyValue(
		context.Background(),
		jetstream.KeyValueConfig{
			Bucket:      "updates",
			Description: "Updates",
			Compression: true,
			TTL:         1 * time.Minute,
		},
	)
	if err != nil {
		log.Error("Error", "job", "test", "err", err)
	}

	// Start all state results jobs
	for id := range constants.StatesIDToTicker {
		// Function to fetch events
		go func() {
			for {
				func() {
					url := fmt.Sprintf(
						"https://gamma-api.polymarket.com/events/%d",
						id,
					)

					resp, err := http.Get(url)
					if err != nil {
						log.Error("HTTP Error", "err", err)
						time.Sleep(30 * time.Second) // Backoff for 10 sec
						return
					}
					defer resp.Body.Close()

					body, err := io.ReadAll(resp.Body)
					if err != nil {
						log.Error("HTTP Error", "err", err)
						time.Sleep(30 * time.Second) // Backoff for 10 sec
						return
					}
					var event types.Event
					err = json.Unmarshal(body, &event)
					if err != nil {
						log.Error("Decode Error", "err", err)
						time.Sleep(30 * time.Second) // Backoff for 10 sec
						return
					}

					var result types.Result
					result.StateName =
						strings.TrimSuffix(
							strings.TrimSuffix(
								event.Ticker,
								"-2024",
							),
							"-presidential-election-winner",
						)
					for _, m := range event.Markets {
						price := strings.Trim(m.OutcomePrices, "[]")
						yesNo := strings.Split(price, ", ")
						yes := strings.Trim(yesNo[0], `"`)
						yesPct, err := strconv.ParseFloat(yes, 64)
						yesPct *= 100
						if err != nil {
							log.Error("Error parsing result", "err", err)
						}
						switch m.GroupItemTitle {
						case "Democrat":
							result.Democrat = yesPct
						case "Kamala Harris":
							result.Democrat = yesPct
						case "Republican":
							result.Republican = yesPct
						case "Donald Trump":
							result.Republican = yesPct
						case "Other":
							result.Other = yesPct
						}
					}

					result.Winner = highestValueKey(result)
					resultJson, err := json.Marshal(result)
					if err != nil {
						log.Error("Encode error", "err", err)
					}
					_, err = kv.Put(
						context.Background(),
						"result."+strconv.Itoa(int(id)),
						resultJson,
					)
					if err != nil {
						log.Error("KV error", "err", err)
					}
					log.Info(
						"Update",
						"region",
						result.StateName,
						"d",
						result.Democrat,
						"r",
						result.Republican,
					)
					time.Sleep(5 * time.Second)
				}()
			}
		}()
	}

	go func() {
		for {
			func() {
				url := "https://gamma-api.polymarket.com/events/903193"

				resp, err := http.Get(url)
				if err != nil {
					log.Error("HTTP Error", "err", err)
					time.Sleep(30 * time.Second) // Backoff for 10 sec
					return
				}
				defer resp.Body.Close()

				body, err := io.ReadAll(resp.Body)
				if err != nil {
					log.Error("HTTP Error", "err", err)
					time.Sleep(30 * time.Second) // Backoff for 10 sec
					return
				}
				var event types.Event
				err = json.Unmarshal(body, &event)
				if err != nil {
					log.Error("Decode Error", "err", err)
					time.Sleep(30 * time.Second) // Backoff for 10 sec
					return
				}

				var result types.Result
				result.StateName = "national"
				for _, m := range event.Markets {
					price := strings.Trim(m.OutcomePrices, "[]")
					yesNo := strings.Split(price, ", ")
					yes := strings.Trim(yesNo[0], `"`)
					yesPct, err := strconv.ParseFloat(yes, 64)
					yesPct *= 100
					if err != nil {
						log.Error("Error parsing result", "err", err)
					}
					switch m.GroupItemTitle {
					case "Kamala Harris":
						result.Democrat = yesPct
					case "Donald Trump":
						result.Republican = yesPct
					}
				}
				result.Other = 0

				result.Winner = highestValueKey(result)
				resultJson, err := json.Marshal(result)
				if err != nil {
					log.Error("Encode error", "err", err)
				}
				_, err = kv.Put(
					context.Background(),
					"result.903193",
					resultJson,
				)
				log.Info(
					"Update",
					"region",
					result.StateName,
					"d",
					result.Democrat,
					"r",
					result.Republican,
				)
				if err != nil {
					log.Error("KV error", "err", err)
				}
				time.Sleep(5 * time.Second)
			}()
		}
	}()

	// Start file save job
	go func() {
		// Initialize the results map
		results := make(map[string]types.Result)

		// Read existing data from the file
		filePath := filepath.Join("pb_data", "results.json")
		existingData, err := os.ReadFile(filePath)
		if err == nil {
			// If the file exists and can be read, unmarshal its contents
			err = json.Unmarshal(existingData, &results)
			if err != nil {
				log.Error("Decode error", "err", err)
				return
			}
		}

		w, err := kv.Watch(context.Background(), "result.*")
		if err != nil {
			log.Error("Watch error", "err", err)
			return
		}
		defer w.Stop()

		// Save timer
		ticker := time.NewTicker(30 * time.Second)
		defer ticker.Stop()

		for {
			select {
			case r := <-w.Updates():
				if r == nil {
					continue
				}
				// Unmarshal the new data into a types.Result
				var result types.Result
				err = json.Unmarshal(r.Value(), &result)
				if err != nil {
					log.Error("Decode error", "err", err)
					continue
				}

				// Add the new result to the map
				results[result.StateName] = result

			case <-ticker.C:
				log.Info("Saving snapshot...")
				// Marshal the entire map to JSON without indentation
				jsonData, err := json.Marshal(results)
				if err != nil {
					log.Error("Encode error", "err", err)
					continue
				}

				// Write the JSON data to the file
				err = os.WriteFile(filePath, jsonData, 0644)
				if err != nil {
					log.Error("File error", "err", err)
					continue
				}
				log.Info("Saved")
			}
		}
	}()

}

func highestValueKey(r types.Result) string {
	var minVal, maxVal float64
	var maxKey string

	if r.Democrat > r.Republican {
		minVal = r.Republican
		maxVal = r.Democrat
		maxKey = "democrat-winner"
	} else {
		minVal = r.Democrat
		maxVal = r.Republican
		maxKey = "republican-winner"
	}

	delta := maxVal - minVal
	switch {
	case delta < 10:
		maxKey += " lvl-50"
	case delta < 20:
		maxKey += " lvl-60"
	case delta < 30:
		maxKey += " lvl-70"
	case delta < 40:
		maxKey += " lvl-80"
	case delta < 50:
		maxKey += " lvl-90"
	}

	return maxKey
}
