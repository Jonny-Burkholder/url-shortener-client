package main

import (
	"log"
	"net/http"
)

func main() {

	http.HandleFunc("/", handleIndex)

	log.Println("Now serving on port 8080")

	http.ListenAndServe(":8080", nil)
}

func renderTemplate() {}

func handleIndex(w http.ResponseWriter, r *http.Request) {}
