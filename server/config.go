package server

import (
	"flag"
	"github.com/caarlos0/env"
	"math/rand"
	"os"
	"time"
)

var DefaultConfig Config

func init() {
	rand.Seed(time.Now().UTC().UnixNano())
	DefaultConfig = Config{
		Host:          "localhost",
		Port:          "4242",
		LogLevel:      "info",
		JwtSecret:     randStringBytes(32),
		JwtCookieName: "jwt_token",
	}
}

type Config struct {
	Host          string `env:"HCMS_HOST"`
	Port          string `env:"HCMS_PORT"`
	LogLevel      string `env:"HCMS_LOG_LEVEL"`
	TextLogging   bool   `env:"HCMS_TEXT_LOGGING"`
	JwtSecret     string `env:"HCMS_JWT_SECRET"`
	JwtCookieName string `env:"HCMS_JWT_COOKIE_NAME"`
}

func ReadConfig() *Config {
	c, err := readConfig(flag.CommandLine, os.Args[1:])
	if err != nil {
		// should never happen, because of flag default policy ExitOnError
		panic(err)
	}
	return c
}
func readConfig(f *flag.FlagSet, args []string) (*Config, error) {
	config := DefaultConfig

	err := env.Parse(&config)
	if err != nil {
		return nil, err
	}

	f.StringVar(&config.Host, "host", config.Host, "The host to listen on")
	f.StringVar(&config.Port, "port", config.Port, "The port to listen on")
	f.StringVar(&config.LogLevel, "log-level", config.LogLevel, "The log level")
	f.BoolVar(&config.TextLogging, "text-logging", config.TextLogging, "Log in text format instead of json")
	f.StringVar(&config.JwtSecret, "jwt-secret", "random key", "The secret to sign the jwt token")
	f.StringVar(&config.JwtCookieName, "jwt-cookie-name", config.JwtCookieName, "The name of the jwt cookie")

	err = f.Parse(args)
	if err != nil {
		return nil, err
	}

	if config.JwtSecret == "random key" {
		if s, set := os.LookupEnv("HCMS_JWT_SECRET"); set {
			config.JwtSecret = s

		} else {
			config.JwtSecret = DefaultConfig.JwtSecret
		}
	}

	return &config, err
}

const letterBytes = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

func randStringBytes(n int) string {
	b := make([]byte, n)
	for i := range b {
		b[i] = letterBytes[rand.Intn(len(letterBytes))]
	}
	return string(b)
}
