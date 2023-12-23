const http = require("http");
const express = require("express");
const app = express();
const server = http.createServer(app);
const PORT = 8000;

// const roomA = io.of('/roomA') //namespace

const cors = require("cors");
app.use(cors());

const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
  },
});

const userIdArr = {};
const userRoomArr = {}

const updateUserList = () => {
  io.emit("userList", userIdArr);
};

io.on("connection", (socket) => {
  console.log("socket id", socket.id);

  socket.on("enter", (res) => {
    console.log("enter res", res)
    
    if (Object.values(userIdArr).includes(res.userId)) {
    socket.emit("error", {
      msg: `채팅방에 같은 아이디를 사용하는 유저가 있습니다.`
    })
    } else {
      socket.join(res.roomId);
      socket.emit("success", { userId: res.userId, roomId: res.roomId });

      io.sockets.in(res.roomId).emit("notice", { msg: `${res.userId} 님이 참여했습니다.` });
      userIdArr[socket.id] = res.userId;
      userRoomArr[res.userId] = res.roomId;
      updateUserList();
          
      console.log("userIdArr", userIdArr)
      console.log("userRoomArr", userRoomArr)
    }
  })

  // socket.on("disconnect", () => {
  //   io.emit("notice", { msg: `${userIdArr[socket.id]} 님이 퇴장하셨습니다.` });
  //   delete userIdArr[socket.id].userId;
  //   updateUserList();
  // });

  socket.on("sendMsg", (res) => {
    if (res.dm === "all") io.sockets.in(res.roomId).emit("chat", { userId: res.userId, msg: res.msg });
    else {
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
