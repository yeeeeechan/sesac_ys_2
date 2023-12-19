const http = require("http");
const express = require("express");
const app = express();
const server = http.createServer(app);
const PORT = 8000;

// cors 이슈: 다른 서버에서 보내는 요청을 제한함
const cors = require("cors");
app.use(cors()); // cors를 미들웨어로 등록

const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000", // 이 주소로 들어오는 요청은 허용한다.
    // methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("socket id", socket.id);

  socket.on("hello", (res) => {
    console.log(res);
    socket.emit("resHello", { msg: "안녕하세요!" });
  });

  socket.on("study", (res) => {
    console.log(res);
    socket.emit("resStudy", { msg: "공부합시다!" });
  });

  socket.on("bye", (res) => {
    console.log(res);
    socket.emit("resBye", { msg: "안녕히 가세요!" });
  });
});

server.listen(PORT, function () {
  console.log(`Sever Open: ${PORT}`);
});
