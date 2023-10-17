const { render } = require("ejs");
const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function (req, res) {
  res.render("index");
});

app.post("/join", function (req, res) {
  console.log("aaa", req.body);
  res.render("result", {
    name: req.body.name,
  });
});

app.listen(PORT, function () {});
