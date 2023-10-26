const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 이전에는 가장 최상단에 있는 index.js 파일에 이렇게 모두 작성했음
// app.get("/", function (req, res) {
//   res.render("index");
// });

const router = require("./routes"); //routes 폴더 안에 있는 index.js에 접근해 router 불러옴(파일명이 index가 아닌 경우엔 파일 경로 전부 작성)
app.use("/", router); //router 객체를 미들웨어로 걸어둠
// localhost:8000/~~~~~~ 에 대한 모든 요청은 router에 들어감

// 존재하지 않는 get 요청에 대해서 접근할 경우에 처리하기 (위에서부터 읽어내려오므로 listen 바로 직전 부분에 작성)
// * -> 어떤 router든 상관없다.
app.get("*", function (req, res) {
  res.send("페이지를 찾을 수 없습니다.");
});

app.listen(PORT, function () {
  console.log(`Sever Open: ${PORT}`);
});
