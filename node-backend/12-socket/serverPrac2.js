const http = require("http");
const express = require("express");
const app = express();
const server = http.createServer(app);
const PORT = 8000;

const cors = require("cors");
app.use(cors());

const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
  },
});

// 입장한 사람의 아이디를 담을 딕셔너리
// { "socket.id" : "userId", "socket.id" : "userId", "socket.id" : "userId"} 이러한 형식이 될 것
const userIdArr = {};

io.on("connection", (socket) => {
  console.log("socket id", socket.id);

  // 실습 3-1. 입장 시에 받은 userId로 입장을 공지
  socket.on("enter", (res) => {
    // (!과제) 실습 3-2. 상황(닉네임이 중복되는지)에 따라 정상적으로 notice를 하든지,
    // 중복된다는 오류 메시지를 보내 주든지 해야 함(아래는 정상적으로 입장되었을 때)
    io.emit("notice", {
      result: true,
      msg: `${res.userId} 님이 입장하셨습니다.`,
    });
    userIdArr[socket.id] = res.userId; // socket.id(==key)에 유저가 입력한 userId값(==value)이 담긴다.
    console.log("userIdArr", userIdArr);

    // for문, if문으로 userIdArr안에 중복되는 값이 있는지 검사
    for (let i = 0; i < userIdArr.length; i++) {
      console.log(userIdArr[i]);
      if (userIdArr[i] === res.userId) {
        io.emit("noticeErr", { result: false });
      }
    }
  });

  // 실습 3-3. 퇴장
  socket.on("disconnect", () => {
    io.emit("notice", { msg: `${userIdArr[socket.id]}님이 퇴장하셨습니다.` });
    delete userIdArr[socket.id];
  });
});

server.listen(PORT, function () {
  console.log(`Sever Open: ${PORT}`);
});
