const express = require("express");
const app = express();
const PORT = 8000;
const cookieParser = require("cookie-parser");

app.set("view engine", "ejs");
app.use(cookieParser());

const cookieConfig = {
  //   expires: "2023-11-04T23:59",
  maxAge: 24 * 60 * 60 * 1000,
  path: "/",
};

app.get("/", (req, res) => {
  const noPopup = req.cookies.stopPopup;
  res.render("index", { noPopup });
});

app.post("/close", (req, res) => {
  res.cookie("stopPopup", "yes", cookieConfig);
  console.log("req.cookies", req.cookies);
  res.send(req.cookies);
});

app.listen(PORT, () => {
  console.log("Server Port : ", PORT);
});
