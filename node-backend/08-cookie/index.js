const express = require("express");
const app = express();
const PORT = 8000;
const cookieParser = require("cookie-parser");

app.set("view engine", "ejs");
// 쿠키를 해석하고 사용할 수 있게 해 줌
app.use(cookieParser());

// 정해져 있는 형식
const cookieConfig = {
  //   httpOnly: true, // document.cookie로 접근 불가. 서버에서만 쿠키에 접근할 수 있다.
  maxAge: 30000, // ms 단위로 보존하고자 하는 기간을 설정
  // expires: "2023-11-04T18:00" -> 일괄적으로 동일한 만료일 설정할 때
  //   path: "/", // "/test" -> localhost:8000에선 X, localhost:8000/test에선 O
  //   secure: true, // http 보안 서버에서만 쿠키를 동작하게 한다.
  //   signed: true, // 쿠키를 암호화한다.
};

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/set", (req, res) => {
  // 서버가 쿠키를 만들어서 응답으로 보냄(쿠키만 보내기 때문에 일반적인 응답은 따로 또 보내야)
  // key: key1 / value: value1
  res.cookie("key1", "value1", cookieConfig);
  res.send("set cookie");
});

app.get("/get", (req, res) => {
  console.log("cookie :", req.cookies);
  res.send(req.cookies);
});

// app.get("/get", (req, res) => {
//   // 아래에서 쿠키를 조회하여 받아올 수 있다.
//   // 단, signed가 true일 경우, req.signedCookies
//   req.cookies;
// });

app.listen(PORT, () => {
  console.log("Server Port : ", PORT);
});
