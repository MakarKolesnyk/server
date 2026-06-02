const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.end("hi from express");
});

app.get("/about", (req, res) => {
  res.end("page about");
});

app.get('/contact', (req,res)=>[
    res.end('contact page')
])

app.use((req, res) => {
  res.end("page 404");
});

module.exports = app;
