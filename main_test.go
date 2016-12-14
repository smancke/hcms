package main

import (
	"github.com/stretchr/testify/assert"
	"net/http"
	"os"
	"testing"
	"time"
)

func Test_BasicEndToEnd(t *testing.T) {
	originalArgs := os.Args

	os.Args = []string{"loginsrv", "-host=localhost", "-port=3000"}
	defer func() { os.Args = originalArgs }()

	go main()

	time.Sleep(time.Second)

	// success
	req, err := http.Get("http://localhost:3000/")
	assert.NoError(t, err)
	assert.Equal(t, 404, req.StatusCode)
}
