const express = require("express"); // express 모듈 import
const app = express(); // server 객체
const PORT = 8000; // 포트
// 1 ~ 65536 존재. 1 ~ 1023까지는 정해진 기능이 있음.
// 3000대, 8000대를 주로 사용함. (cf. 3306: mysql에서 사용함)

// 서버 객체를 설정하는 메소드 > app 객체의 view engine 설정을 ejs로 변경
app.set("view engine", "ejs");
// app 객체의 view 폴더를 설정. 기본값 : ./views
// 만약 ./view 폴더로 바꾸고 싶다면 아래처럼 작성
// app.set("views", "./view")

app.use("/static", express.static(__dirname + "/static"));
// __dirname : c: ~~~~/01-express/static 에 클라이언트가 /static 이름으로 들어올 수 있다. (미들웨어 등록)
// set 메소드 다음에 작성함. get으로 요청받은 후, 실행되기 전 그사이에 일어남.

// app.use("/public", express.static(__dirname + "/static"));
// __dirname : c: ~~~~/01-express/static 에 클라이언트가 /public 이름으로 들어올 수 있다.

// get 메소드(http 메소드) : 클라이언트가 요청할 수 있는 방법을 정의함(=서버에서 받을 수 있는 요청을 설정) (그중 하나가 get 요청)
// localhost:8000
app.get("/", function (req, res) {
  res.send("hello express");
  // 응답 객체 내의 send 메소드 실행. ('hello express'라는 문자열을 응답으로 전송)
  // send는 값을 보냄
});
// http 메소드의 두 번째 인자로 넘겨주는 콜백 함수의 매개변수 2개
// 첫 번째 매개변수 : request 객체 (요청) 클라이언트의 요청에 대한 정보가 담겨 있음
// 두 번째 매개변수 : response 객체 (응답) 서버가 클라이언트에게 응답할 정보가 담겨 있음

// localhost:8000/test
app.get("/test", function (req, res) {
  console.log(__dirname); // 이 파일이 위치한 절대 경로가 찍힘, 노드에서는 상대 경로로 파일을 이용할 수 있는 경로는 거의 없다. (보안 등등의 이유로 express에서 권한을 막기 때문. 상대 경로로 볼 수 있으면 해당 컴퓨터의 모든 라이브러리를 열람할 수 있게 된다.)
  res.sendFile(__dirname + "/index.html"); // 절대 경로로 파일을 여는 방법. 보통은 잘 안 씀
});

app.get("/ejs", function (req, res) {
  // render 메소드의 기본 디렉토리는 "./views/"
  // res.render("index"); // views 폴더 바로 하위에 있는 index.ejs 파일
  res.render("test/index"); // 확장자명은 생략 가능, 서버가 클라이언트에게 test 폴더 하위에 있는 index 파일을 렌더링하여 보내겠다는 의미
});

app.get("/practice", function (req, res) {
  res.render("practice", {
    name: "practice",
    product: ["운동화", "스웨터", "후드집업"],
  }); //여기에서 보낸 key 값이 ejs에서 사용할 수 있는 변수가 된다. (ejs에서 사용할 때 별도로 경로 타고 들어갈 필요 없이 바로 쓰면 됨)
});

// 서버를 연다. listen(어떤 포트를 열 것인지, 이 서버를 열어서 어떤 동작을 할 것인지)
// localhost:8000
// 127.0.0.1:8000
app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}! http://localhost:${PORT}`);
});
