import "../styles/chat.css";
import { useCallback, useEffect, useState, useMemo } from "react";
import Chat from "./Chat";
import Notice from "./Notice";
import io from "socket.io-client";

const socket = io.connect("http://localhost:8000", { autoConnect: false });

export default function ChattingPrac() {
  const [msgInput, setMsgInput] = useState("");
  const [userIdInput, setuserIdInput] = useState("");
  const [chatList, setChatList] = useState([]);
  const [userId, setUserId] = useState(null);
  const [userList, setUserList] = useState({});
  const [dmTo, setDmTo] = useState("all");

  const [userIdInput2, setuserIdInput2] = useState("");
  const [roomId, setRoomId]= useState("")

  const initSocketConnect = () => {
    console.log("conneted", socket.conneted);
    if (!socket.conneted) socket.connect();
  };

  useEffect(() => {
    socket.on("error", (res) => {
      alert(res.msg);
    });

    socket.on("success", (res) => {
      setUserId(res.userId);
    });

    socket.on("userList", (res) => {
      setUserList(res);
    });
  }, []);

  const userListOptions = useMemo(() => {
    const options = [];
    for (const key in userList) {
      if (userList[key].userId === userId) continue;
      options.push(
        <option key={key} value={key}>
          {userList[key].userId}
        </option>
      );
    }
    return options;
  }, [userList]);

  useEffect(() => {
    const notice = (res) => {
    const newChatList = [...chatList, { type: "notice", content: res.msg }];
      setChatList(newChatList);
    };

    socket.on("notice", notice);
    return () => socket.off("notice", notice);
  }, [chatList]);

  const sendMsg = () => {
    if (msgInput !== "")
      socket.emit("sendMsg", { userId: userId, msg: msgInput, dm: dmTo, roomId: roomId });
    setMsgInput("");
  };

  const entryChat = () => {
    initSocketConnect();
    socket.emit("enter", {userId: userIdInput2, roomId: roomId });
  };

  // useCallback: 함수를 메모라이징한다.
  // 뒤에 있는 의존성 배열에 있는 값이 update될 때만 함수를 다시 선언함
  const addChatList = useCallback(
    (res) => {
      const type = res.userId === userId ? "my" : "other";
      const content = `${res.dm ? "(속닥속닥) " : ""} ${res.userId}: ${
        res.msg
      }`;
      const newChatList = [...chatList, { type: type, content: content }];
      setChatList(newChatList);
    },
    [userId, chatList]
  );

  useEffect(() => {
    socket.on("chat", addChatList);
    return () => socket.off("chat", addChatList);
  }, [addChatList]);

  const enterkey = (e) => {
    if (e.key === "Enter") {
      sendMsg()
    }
  }

  const selected = (e) => {
    setRoomId(e.target.value)
  }

  return (
    <>
      {userId ? (
        <>
          <div>{roomId}에 입장하셨습니다.</div>
          <div>{userId} 님 환영합니다.</div>
          <div className="chat-container">
            {chatList.map((chat, i) => {
              if (chat.type === "notice") return <Notice key={i} chat={chat} />;
              else return <Chat key={i} chat={chat} />;
            })}
          </div>
          <div className="input-container">
            <select value={dmTo} onChange={(e) => setDmTo(e.target.value)}>
              <option value="all">전체</option>
              {userListOptions}
            </select>
            <input
              type="text"
              value={msgInput}
              onChange={(e) => setMsgInput(e.target.value)}
              onKeyDown={(e) => enterkey(e)}
            />
            <button onClick={sendMsg}>전송</button>
          </div>
        </>
      ) : (
          <>
           {/* <div className="input-container">
              <button onClick={entryChat}>입장</button>
              <input type="text" value={userIdInput} onChange={(e) => setuserIdInput(e.target.value)} />
          </div> */}
            <div className="input-container">
            <input
              type="text"
              value={userIdInput2}
              onChange={(e) => setuserIdInput2(e.target.value)} placeholder="닉네임"
              />
              <select value={roomId} onChange={selected}>
                <option value="ch1">채널1</option>
                <option value="ch2">채널2</option>
                <option value="ch3">채널3</option>
              </select>
              <button onClick={entryChat}>입장</button>
            </div>
            {/* roomId도 함께 보낸다. */}

        </>
      )}
    </>
  );
}
