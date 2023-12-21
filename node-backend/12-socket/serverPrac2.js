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
// { "socket.id" : "userIdA", "socket.id" : "userIdB", "socket.id" : "userIdC"} 이러한 형식이 될 것
const userIdArr = {};

const updateUserList = () => {
  io.emit("userList", userIdArr);
};

io.on("connection", (socket) => {
  console.log("socket id", socket.id);

  // 실습 3-1. 입장 시에 받은 userId로 입장을 공지
  socket.on("enter", (res) => {
    // (!과제) 실습 3-2. 상황(닉네임이 중복되는지)에 따라 정상적으로 notice를 하든지,
    // 중복된다는 오류 메시지를 보내 주든지 해야 함

    // .value: value만 뽑은 배열을 만드는 메소드
    // Object.values(userIdArr) => ["userIdA", "userIdB", "userIdC"]
    // includes: 문자열이나 배열에서 인자로 넘겨준 값이 존재하는지 여부를 찾을 수 있는 메소드(있으면 true 반환)
    // indexOf: 배열에서 인자로 넘겨준 값의 인덱스를 추출, 없다면 -1을 반환하는 함수
    if (Object.values(userIdArr).includes(res.userId)) {
      // 닉네임이 중복될 경우
      socket.emit("error", {
        msg: `중복된 아이디가 존재하여 입장이 불가합니다.`,
      });
    } else {
      // 중복되지 않을 경우
      socket.emit("success", { userId: res.userId });
      io.emit("notice", {
        result: true,
        msg: `${res.userId} 님이 입장하셨습니다.`,
      });
      userIdArr[socket.id] = res.userId;
      updateUserList();
    }
    console.log("userIdArr", userIdArr);

    // 실습 3-3. 퇴장에서 활용한 부분 > 누가 입장하고 있는지 알아야 하고, 해당 정보를 전체적으로 저장할 필요가 있었음
    // userIdArr[socket.id] = res.userId; // socket.id(==key)에 유저가 입력한 userId값(==value)이 담긴다.

    // 딕셔너리 키 명이 문자로 되어 있는 경우, obj["cd-e"]와 같이 접근 가능

    console.log("userIdArr", userIdArr);

    // for문, if문으로 userIdArr안에 중복되는 값이 있는지 검사
  });

  // 실습 3-3. 퇴장
  socket.on("disconnect", () => {
    io.emit("notice", { msg: `${userIdArr[socket.id]}님이 퇴장하셨습니다.` });
    delete userIdArr[socket.id];
    updateUserList();
  });

  socket.on("sendMsg", (res) => {
    if (res.dm === "all") io.emit("chat", { userId: res.userId, msg: res.msg });
    else {
      // io.to(소켓 아이디).emit(): 특정 상대에게 데이터를 보낼 수 있음
      // socket.emit() : 클라이언트 본인에게 보내기
      io.to(res.dm).emit("chat", {
        userId: res.userId,
        msg: res.msg,
        dm: true,
      });
      socket.emit("chat", {
        userId: res.userId,
        msg: res.msg,
        dm: true,
      });
    }
  });
});

server.listen(PORT, function () {
  console.log(`Sever Open: ${PORT}`);
});
