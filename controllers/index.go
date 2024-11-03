package controllers

import (
	"context"
	"encoding/json"
	"os"
	"path/filepath"
	"sync"

	"git.mark3labs.com/harrisvstrump/types"
	"git.mark3labs.com/harrisvstrump/views"
	"github.com/charmbracelet/log"
	"github.com/delaneyj/datastar"
	"github.com/nats-io/nats.go"
	"github.com/nats-io/nats.go/jetstream"
	"github.com/pocketbase/pocketbase"
	"github.com/pocketbase/pocketbase/core"
	"github.com/thanhpk/randstr"
)

type IndexController struct {
	app          *pocketbase.PocketBase
	nc           *nats.Conn
	results      map[string]types.Result
	resultsMutex sync.RWMutex
	kv           jetstream.KeyValue
}

func NewIndexController(
	app *pocketbase.PocketBase,
	nc *nats.Conn,
) *IndexController {
	// Initialize the results map
	results := make(map[string]types.Result)

	// Read existing data from the file
	filePath := filepath.Join("pb_data", "results.json")
	existingData, err := os.ReadFile(filePath)
	if err == nil {
		// If the file exists and can be read, unmarshal its contents
		err = json.Unmarshal(existingData, &results)
		if err != nil {
			log.Fatal(err)
		}
	}

	js, err := jetstream.New(nc)
	if err != nil {
		log.Fatal(err)
	}

	kv, err := js.KeyValue(context.Background(), "updates")
	if err != nil {
		log.Fatal(err)
	}

	return &IndexController{
		app:     app,
		nc:      nc,
		results: results,
		kv:      kv,
	}
}

func (c *IndexController) ShowIndex(e *core.RequestEvent) error {
	c.resultsMutex.RLock()
	defer c.resultsMutex.RUnlock()
	return views.Layout(c.results).Render(e.Request.Context(), e.Response)
}

func (c *IndexController) GetUpdates(e *core.RequestEvent) error {
	w, err := c.kv.Watch(e.Request.Context(), "result.*")
	if err != nil {
		return err
	}
	defer w.Stop()

	sse := datastar.NewSSE(e.Response, e.Request)

	for {
		select {
		case <-e.Request.Context().Done():
			log.Info("Client closed connection")
			return nil
		case r := <-w.Updates():
			if r == nil {
				continue
			}
			// Unmarshal result
			var result types.Result
			if err := json.Unmarshal(r.Value(), &result); err != nil {
				log.Error("Event error", "err", err)
				continue
			}
			datastar.Console(
				sse,
				datastar.ConsoleLogModeInfo,
				string(r.Value()),
			)

			c.resultsMutex.Lock()
			if c.results[result.StateName].Democrat != result.Democrat ||
				c.results[result.StateName].Republican != result.Republican {
				tID := randstr.Hex(4)
				_ = datastar.RenderFragmentTempl(
					sse,
					views.Toast(
						tID,
						result.StateName,
						result.Democrat,
						result.Republican,
					),
					datastar.WithQuerySelectorID("toast-container"),
					datastar.WithMergeAppend(),
				)
			}
			c.results[result.StateName] = result
			c.resultsMutex.Unlock()
			if result.StateName == "national" {
				_ = datastar.RenderFragmentTempl(
					sse,
					views.Score(result.Democrat, "harris-score"),
				)
				_ = datastar.RenderFragmentTempl(
					sse,
					views.Score(result.Republican, "trump-score"),
				)
			} else {
				c.resultsMutex.RLock()
				_ = datastar.RenderFragmentTempl(sse, views.Map(c.results), datastar.WithoutViewTransitions())
				c.resultsMutex.RUnlock()
			}
		}
	}
}
