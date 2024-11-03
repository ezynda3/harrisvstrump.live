package main

import (
	"net/http"
	"os"

	"git.mark3labs.com/harrisvstrump/controllers"
	"github.com/nats-io/nats.go"
	"github.com/pocketbase/pocketbase"
	"github.com/pocketbase/pocketbase/apis"
	"github.com/pocketbase/pocketbase/core"
)

func setupRoutes(app *pocketbase.PocketBase, nc *nats.Conn) {
	app.OnServe().BindFunc(func(se *core.ServeEvent) error {
		// Index
		ic := controllers.NewIndexController(app, nc)
		se.Router.GET("/", ic.ShowIndex)

		// Static Files
		se.Router.GET(
			"/static/{path...}",
			apis.Static(os.DirFS("./static"), false),
		)
		// Get Updates
		se.Router.GET("/updates", ic.GetUpdates)

		// Health Check
		se.Router.GET("/up", func(e *core.RequestEvent) error {
			return e.String(http.StatusOK, "sup!")
		})

		return se.Next()
	})
}
