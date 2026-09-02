package main

import (
	"bytes"
	"encoding/json"
	"log"
	"net/http"
	"os"
	"strings"
	"time"
)

type lead struct {
	Name        string `json:"name"`
	Phone       string `json:"phone"`
	Email       string `json:"email"`
	Comment     string `json:"comment"`
	ServiceName string `json:"serviceName"`
}

func main() {
	webhook := os.Getenv("BITRIX24_WEBHOOK_URL")
	client := &http.Client{Timeout: 10 * time.Second}

	http.HandleFunc("GET /healthz", func(w http.ResponseWriter, _ *http.Request) { w.WriteHeader(http.StatusNoContent) })
	http.HandleFunc("POST /api/leads", leadHandler(webhook, client))

	log.Println("lead API listening on :8080")
	log.Fatal(http.ListenAndServe(":8080", nil))
}

func leadHandler(webhook string, client *http.Client) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		if webhook == "" {
			http.Error(w, "Bitrix24 webhook is not configured", http.StatusServiceUnavailable)
			return
		}

		var input lead
		decoder := json.NewDecoder(http.MaxBytesReader(w, r.Body, 64<<10))
		decoder.DisallowUnknownFields()
		if err := decoder.Decode(&input); err != nil {
			http.Error(w, "invalid JSON", http.StatusBadRequest)
			return
		}
		if strings.TrimSpace(input.Name) == "" || strings.TrimSpace(input.Phone) == "" || strings.TrimSpace(input.Email) == "" {
			http.Error(w, "name, phone and email are required", http.StatusBadRequest)
			return
		}

		payload := map[string]any{"fields": map[string]any{
			"TITLE":     "Заявка с сайта",
			"NAME":      input.Name,
			"SOURCE_ID": "19",
			"PHONE":     []map[string]string{{"VALUE": input.Phone, "VALUE_TYPE": "WORK"}},
			"EMAIL":     []map[string]string{{"VALUE": input.Email, "VALUE_TYPE": "WORK"}},
		}}
		body, _ := json.Marshal(payload)
		request, err := http.NewRequestWithContext(r.Context(), http.MethodPost, webhook, bytes.NewReader(body))
		if err != nil {
			http.Error(w, "invalid webhook configuration", http.StatusInternalServerError)
			return
		}
		request.Header.Set("Content-Type", "application/json")

		response, err := client.Do(request)
		if err != nil {
			http.Error(w, "Bitrix24 is unavailable", http.StatusBadGateway)
			return
		}
		defer response.Body.Close()
		if response.StatusCode < 200 || response.StatusCode >= 300 {
			http.Error(w, "Bitrix24 rejected the lead", http.StatusBadGateway)
			return
		}

		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusCreated)
		_, _ = w.Write([]byte(`{"ok":true}`))
	}
}
