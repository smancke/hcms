package main

import (
	"github.com/smancke/hcms/db"
	"github.com/smancke/hcms/server"
	"github.com/tarent/lib-compose/logging"
	"net/http"
	"os"
	"os/signal"
	"syscall"
)

const applicationName = "hcms"

func main() {
	config := server.ReadConfig()
	if err := logging.Set(config.LogLevel, config.TextLogging); err != nil {
		exit(nil, err)
	}

	logShutdownEvent()

	configToLog := *config
	configToLog.JwtSecret = "..."
	logging.LifecycleStart(applicationName, configToLog)

	repo, err := db.NewRepository()
	if err != nil {
		exit(nil, err)
	}

	h := server.NewHandler(config, repo)
	handlerChain := logging.NewLogMiddleware(h)

	exit(nil, http.ListenAndServe(config.Host+":"+config.Port, handlerChain))
}

func logShutdownEvent() {
	go func() {
		c := make(chan os.Signal)
		signal.Notify(c, syscall.SIGINT, syscall.SIGTERM)
		exit(<-c, nil)
	}()
}

var exit = func(signal os.Signal, err error) {
	logging.LifecycleStop(applicationName, signal, err)
	if err == nil {
		os.Exit(0)
	} else {
		os.Exit(1)
	}
}
