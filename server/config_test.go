package server

import (
	"flag"
	"github.com/stretchr/testify/assert"
	"os"
	"testing"
)

func TestConfig_ReadConfigDefaults(t *testing.T) {
	originalArgs := os.Args
	defer func() { os.Args = originalArgs }()

	assert.Equal(t, &DefaultConfig, ReadConfig())
}

func TestConfig_ReadConfig(t *testing.T) {
	input := []string{
		"--host=host",
		"--port=port",
		"--log-level=loglevel",
		"--text-logging=true",
		"--jwt-secret=jwtsecret",
		"--jwt-cookie-name=cookiename",
	}

	expected := &Config{
		Host:          "host",
		Port:          "port",
		LogLevel:      "loglevel",
		TextLogging:   true,
		JwtSecret:     "jwtsecret",
		JwtCookieName: "cookiename",
	}

	cfg, err := readConfig(flag.NewFlagSet("", flag.ContinueOnError), input)
	assert.NoError(t, err)
	assert.Equal(t, expected, cfg)
}

func TestConfig_ReadConfigFromEnv(t *testing.T) {
	assert.NoError(t, os.Setenv("HCMS_HOST", "host"))
	assert.NoError(t, os.Setenv("HCMS_PORT", "port"))
	assert.NoError(t, os.Setenv("HCMS_LOG_LEVEL", "loglevel"))
	assert.NoError(t, os.Setenv("HCMS_TEXT_LOGGING", "true"))
	assert.NoError(t, os.Setenv("HCMS_JWT_SECRET", "jwtsecret"))
	assert.NoError(t, os.Setenv("HCMS_JWT_COOKIE_NAME", "cookiename"))

	expected := &Config{
		Host:          "host",
		Port:          "port",
		LogLevel:      "loglevel",
		TextLogging:   true,
		JwtSecret:     "jwtsecret",
		JwtCookieName: "cookiename",
	}

	cfg, err := readConfig(flag.NewFlagSet("", flag.ContinueOnError), []string{})
	assert.NoError(t, err)
	assert.Equal(t, expected, cfg)
}
