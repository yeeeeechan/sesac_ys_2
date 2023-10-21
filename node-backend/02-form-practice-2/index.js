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

app.get("/join", function (req, res) {
  res.send(req.query);
});

// 실습 2번 참고 (1019)
app.post("/joinPost", function (req, res) {
  const id = "sesac";
  const pw = "123123";
  // req.body와 id, pw를 비교하는 코드 작성하고,
  // 일치했을 때와 일치하지 않았을 때 출력되는 멘트 작성

  // function joinresult() {
  //   if (req.body.id == id && req.body.pw == pw) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  function joinresult() {
    req.body.id == id && req.body.pw == pw ? true : false;
  }

  const result = joinresult();
  res.send(result);
});

app.listen(PORT, function () {});
