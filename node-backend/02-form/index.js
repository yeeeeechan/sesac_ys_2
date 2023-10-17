const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");

// req.body를 해석하기 위한 코드
app.use(express.urlencoded({ extended: true }));
// x-www-form-urlencoded 형태의 데이터 해석
// extended : true일 경우, qs 모듈(외부 모듈)을 이용한다. false일 경우, (노드)내장 모듈인 queryString을 사용한다.
app.use(express.json());
// application/json 형태의 데이터를 해석

// localhost:8000 url 접속에 대한 응답을 위해 만든 코드
app.get("/", function (req, res) {
  res.render("index");
});

// localhost:8000/get > get 요청은 url로 접속 가능하다.
// 데이터 전송 시 form 태그를 이용할 경우, method를 get으로 해 놓으면 get 요청
// get 요청으로 데이터를 보낼 때, url에 직접 query를 만들어서 전송이 가능하다.
// url에 전송되는 데이터가 노출된다. 따라서 개인 정보가 담긴 데이터 전송은 get으로 하지 않는 것이 기본
// 주로 정보를 조회하는 요청에 사용함. (Read)
// get 요청을 받는 api, get 요청은 req.query에 담겨서 온다.
app.get("/get", function (req, res) {
  console.log(req.query); // { id: 'rrrr', pw: '123456' }
  // req.query : get 요청에 대해 클라이언트가 보낸 데이터를 담고 있음
  // query는 url에서 기본 주소 뒤에 오는 ?id=hhhhhh&pw=123123123 와 같은 주소를 의미
  // 기본 주소?name=value& (여러 개를 보낼 때는 &로 이어진다.)

  console.log(req.query.id); //'rrrr'
  res.send("get 요청 성공!");
});

app.get("/join", function (req, res) {
  console.log(req.query);
  res.send("get 요청 성공22222");
});

// localhost:8000/post로 post 요청을 받기 위한 준비
// post 요청은 url로 직접 요청하는 것은 불가, url에 정보 노출되지 않음
// 데이터를 새로 생성하는 요청에 주로 사용 (Create)
// post 요청에 대한 데이터는 req.body에 담아서 온다.
// get과 마찬가지로 데이터가 객체 형태이므로, .id와 같이 원하는 데이터에 접근 가능
app.post("/post", function (req, res) {
  console.log(req.id);
  res.send("post 요청 성공");
});

app.post("/post/ver2", function (req, res) {
  console.log(req.body);
  res.render("result", {
    name: req.body.name,
    email: req.body.email,
  });
});

// 데이터 조회, 데이터 저장(db에 데이터 삽입), 데이터 수정, 데이터 삭제
// CRUD(Create, Read, Update, Delete)

app.listen(PORT, function () {
  console.log(`Sever Open: ${PORT}`);
});
