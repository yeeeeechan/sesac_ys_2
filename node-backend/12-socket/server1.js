const http = require("http");
const express = require("express");
const app = express();
// 소켓은 http모듈로 생성된 서버에서만 동작하므로
const server = http.createServer(app); // http와 app 객체를 연결하여 서버를 만들었음
const PORT = 8000;

const io = require("socket.io")(server);
// 아래 코드를 줄여서 위와 같이 씀
// const Socket = require("socket.io")
// const io = Socket(server)

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("client1");
});

// 콜백 함수의 매개변수에는 접속한 클라이언트의 소켓 객체가 들어온다.
io.on("connection", (socket) => {
  console.log("socket.id", socket.id);

  // on을 이용해 클라이언트에서 소켓을 이용해 보내준 데이터를 받을 이벤트를 등록함
  // 이 이벤트는 클라이언트에서 emit으로 "helloEvent"를 서버에 보낼 때 실행됨(==콜백함수 실행)
  socket.on("helloEvent", (res) => {
    // res: 클라이언트에서 소켓을 이용해 보내준 데이터
    console.log(res);
    socket.emit("helloEvent", { msg: "안녕!" });
  });

  socket.on("byeEvent", (res) => {
    console.log(res);
    socket.emit("byeEvent", { msg: "잘가~" });
  });

  socket.on("studyEvent", (res) => {
    console.log(res);
    socket.emit("study", { msg: "공부합시다!" });
  });

  socket.on("enter", (res) => {
    // 전체 클라이언트를 대상으로 데이터를 보냄
    // 서버에서 io 객체를 사용하면 전체를 대상으로 하는 것
    io.emit("notice", { msg: `${socket.id}님이 입장하였습니다.` });
  });
});

server.listen(PORT, () => {
  console.log("Server Port : ", PORT);
});
