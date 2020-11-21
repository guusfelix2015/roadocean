const express = require("express");
const nunjucks = require("nunjucks");

const server = express();

server.set("view engine", "html");

nunjucks.configure("views", {
  express: server,
  autoescape: false,
  noCache: true,
});

server.use(express.static("public"));

server.get("/", (req, res) => {
  return res.render("index");
});

server.listen(5000, () => {
  console.log("server is running");
});
