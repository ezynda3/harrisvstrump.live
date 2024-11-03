package main

import (
	"context"

	"github.com/charmbracelet/log"
	"github.com/nats-io/nats-server/v2/server"
	"github.com/nats-io/nats.go"
	"github.com/pocketbase/pocketbase"

	"github.com/delaneyj/toolbelt/embeddednats"
)

func bootstrap() {
	app := pocketbase.New()

	// Setup NATS
	ns, err := embeddednats.New(
		context.Background(),
		embeddednats.WithDirectory("./data/.nats"),
		embeddednats.WithNATSServerOptions(&server.Options{
			JetStream: true,
			// DontListen: true,
		}),
	)
	if err != nil {
		log.Fatal(err)
	}
	ns.NatsServer.Start()
	ns.WaitForServer()

	clientOpts := []nats.Option{
		nats.InProcessServer(ns.NatsServer),
	}

	nc, err := nats.Connect(ns.NatsServer.ClientURL(), clientOpts...)
	if err != nil {
		log.Fatal(err)
	}
	defer nc.Drain()

	// Setup Routes
	setupRoutes(app, nc)

	// Setup Jobs
	setupJobs(app, nc)

	if err := app.Start(); err != nil {
		log.Fatal(err)
	}
}
