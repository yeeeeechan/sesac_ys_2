import "../styles/chat.css";
import { useEffect, useState } from "react";
import Chat from "./Chat";
import Notice from "./Notice";
import io from "socket.io-client";

const socket = io.connect("http://localhost:8000", { autoConnect: false });

export default function Chattiong1() {
  const [msgInput, setMsgInput] = useState("");
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
      content: "~~~ 님이 입장하셨습니다.",
    },
  ]);

  const initSocketConnect = () => {
    console.log("conneted", socket.conneted);
    if (!socket.conneted) socket.connect();
  };

  useEffect(() => {
    initSocketConnect();
  }, []);

  useEffect(() => {
    const notice = (res) => {
      // 기존 chatList 스프레드 연산자로 불러오고, 마지막에 추가
      // console.log("notice 얼마나 찍히는지 확인해 봐라")
      const newChatList = [...chatList, { type: "notice", content: res.msg }];
      setChatList(newChatList);
    };

    socket.on("notice", notice);
    return () => socket.off("notice", notice);
    // 이벤트가 쌓여서 중복 선언되는 것을 막기 위해
    // return을 이용해서 notice 이벤트를 제거 후, 다시 생성할 수 있도록 함
  }, [chatList]);

  const sendMsg = () => {};
  return (
    <>
      <h3>실습 2, 3번</h3>
      <ul>
        <li>채팅창 UI</li>
        <li>socket id 이용해 누가 입장했는지 공지 띄우기</li>
      </ul>
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
  );
}
