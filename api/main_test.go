package main

import (
	"bytes"
	"encoding/json"
	"io"
	"net/http"
	"net/http/httptest"
	"strings"
	"testing"
)

func TestLeadHandlerForwardsLead(t *testing.T) {
	var forwarded map[string]map[string]any
	client := &http.Client{Transport: roundTripFunc(func(r *http.Request) (*http.Response, error) {
		if err := json.NewDecoder(r.Body).Decode(&forwarded); err != nil {
			t.Fatal(err)
		}
		return &http.Response{StatusCode: http.StatusOK, Body: io.NopCloser(bytes.NewReader(nil))}, nil
	})}

	request := httptest.NewRequest(http.MethodPost, "/api/leads", strings.NewReader(`{"name":"Иван","phone":"+375291234567","email":"i@example.com","serviceName":"Сайт"}`))
	response := httptest.NewRecorder()
	leadHandler("https://example.test/crm.lead.add.json", client)(response, request)

	if response.Code != http.StatusCreated || forwarded["fields"]["NAME"] != "Иван" || forwarded["fields"]["SOURCE_ID"] != "19" {
		t.Fatalf("status=%d payload=%v", response.Code, forwarded)
	}
}

type roundTripFunc func(*http.Request) (*http.Response, error)

func (f roundTripFunc) RoundTrip(r *http.Request) (*http.Response, error) { return f(r) }
