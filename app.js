const express = require("express");
const app = express();

app.get("/products/:id", (req, res) => {
  const request = `
  method: ${req.method},
  path ${req.path},
  query ${JSON.stringify(req.query)},
  url: ${req.url}, 
  hostmname: ${req.hostname},
  params: ${JSON.stringify(req.params)},
  key: ${req.params.id},
  ip: ${req.ip}`;
  res.end(request);
});

app.get("/users/:id", (req, res) => {
  const request = `
  url: ${req.url}, 
  key: ${req.params.id}`;
  res.end(request);
});

module.exports = app;
