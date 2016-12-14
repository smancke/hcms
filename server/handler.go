package server

import (
	"fmt"
	"github.com/smancke/hcms/cms"
	"net/http"
)

type Handler struct {
	store  cms.Repository
	config *Config
}

// NewHandler creates a new top level api handler
func NewHandler(config *Config, store cms.Repository) *Handler {
	return &Handler{
		store:  store,
		config: config,
	}
}
func (h *Handler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	w.WriteHeader(404)
	fmt.Fprintf(w, "404 Ressource not found")
}
