const express = require("express");
const nunjucks = require("nunjucks");

const server = express();
const sponsors = require("./data");

server.set("view engine", "njk");

nunjucks.configure("views", {
  express: server,
  autoescape: false,
  noCache: true,
});

server.use(express.static("public"));

server.get("/", (req, res) => {
  return res.render("index", { items: sponsors });
});

server.listen(5000, () => {
  console.log("server is running");
});
