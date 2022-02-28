package main

import (
	"log"
	"net/http"
	"text/template"

	"github.com/Jonny-Burkholder/url-shortener-client/tools"
)

func main() {

	defer myRecoverFunc()

	static := http.StripPrefix("/static/", http.FileServer(http.Dir("../../web/static/")))

	http.Handle("/static/", static)
	http.HandleFunc("/", handleIndex)

	log.Println("Now serving on port 8080")

	http.ListenAndServe(":8080", nil)
}

func myRecoverFunc() {
	if err := recover(); err != nil {
		log.Printf("Recovered from panic: [%t], %v\n", err, err)
	}
}

const templatePath = "../../web/template"

var funcMap = template.FuncMap{}

var templates = template.Must(template.New("*").Funcs(funcMap).ParseGlob(templatePath))

func renderTemplate(w http.ResponseWriter, tmpl string, page tools.WebPage) {
	buffer := tools.GetBuf()
	err := templates.ExecuteTemplate(buffer, tmpl+".html", page)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	buffer.WriteTo(w)
	tools.PutBuf(buffer)
	return
}

func handleIndex(w http.ResponseWriter, r *http.Request) {
	defer myRecoverFunc()
	renderTemplate(w, "index", &tools.Page{})
}
