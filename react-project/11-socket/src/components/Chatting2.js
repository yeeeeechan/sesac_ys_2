import "../styles/chat.css";
import { useEffect, useState } from "react";
import Chat from "./Chat";
import Notice from "./Notice";
import io from "socket.io-client";

const socket = io.connect("http://localhost:8000", { autoConnect: false });

export default function Chatting2() {
  const [msgInput, setMsgInput] = useState("");
  const [userIdInput, setuserIdInput] = useState("");
  const [chatList, setChatList] = useState([
    {
      type: "my",
      content: "안녕?",
    },
    {
      type: "other",
      content: "응 안녕?",
    },
    {
      type: "notice",
      content: "",
    },
  ]);
  const [userId, setUserId] = useState(null);

  const initSocketConnect = () => {
    console.log("conneted", socket.conneted);
    if (!socket.conneted) socket.connect();
  };

  useEffect(() => {
    // initSocketConnect();
  }, []);

  useEffect(() => {
    const notice = (res) => {
      const newChatList = [...chatList, { type: "notice", content: res.msg }];
      setChatList(newChatList);
    };

    socket.on("notice", notice);
    return () => socket.off("notice", notice);
  }, [chatList]);

  const sendMsg = () => {};

  const entryChat = () => {
    initSocketConnect();
    socket.emit("enter", { userId: userIdInput });

    // (!과제) 실습 3-2. 바로 userId에 값을 할당하지 않고, 서버로부터 success를 받으면 할당하고
    // error를 받으면 중복된다는 알림창 띄우기

    setUserId(userIdInput);
  };

  return (
    <>
      <h3>실습 3-1, 3-2, 3-3번</h3>
      <ul>
        <li>닉네임 입력받고 입장시키기</li>
        <li>닉네임 중복 방지</li>
        <li>퇴장시키기</li>
      </ul>

      {userId ? (
        <>
          <div>{userId} 님 환영합니다.</div>
          <div className="chat-container">
            {chatList.map((chat, i) => {
              if (chat.type === "notice") return <Notice key={i} chat={chat} />;
              else return <Chat key={i} chat={chat} />;
            })}
          </div>
          <div className="input-container">
            <input
              type="text"
              value={msgInput}
              onChange={(e) => setMsgInput(e.target.value)}
            />
            <button onClick={sendMsg}>전송</button>
          </div>
        </>
      ) : (
        <>
          <div className="input-container">
            <input
              type="text"
              value={userIdInput}
              onChange={(e) => setuserIdInput(e.target.value)}
            />
            <button onClick={entryChat}>입장</button>
          </div>
        </>
      )}
    </>
  );
}
