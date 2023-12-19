import io from "socket.io-client";
import { useEffect, useRef } from "react";

// 클라이언트 서버와 백엔드 서버가 다르므로, 소켓이 연결되어 있는 서버를 명시해 준다.
const socket = io.connect("http://localhost:8000", { autoConnect: false });

export default function Practice1() {
  // 원할 때 소켓을 연결하기 위해 autoConnect 옵션 false하고, 연결 함수 만들기
  const initSocketConnect = () => {
    if (!socket.connected) socket.connect();
  };

  useEffect(() => {
    initSocketConnect();

    socket.on("resHello", (res) => {
      console.log(res);
      resultMsg(res);
    });

    socket.on("resStudy", (res) => {
      console.log(res);
      resultMsg(res);
    });

    socket.on("resBye", (res) => {
      console.log(res);
      resultMsg(res);
    });
  }, []);

  const resultMsg = (res) => {
    result.current.innerText = res.msg;
  };

  const hello = () => {
    socket.emit("hello", { msg: "hello" });
  };
  const study = () => {
    socket.emit("study", { msg: "study" });
  };
  const bye = () => {
    socket.emit("bye", { msg: "bye" });
  };

  const result = useRef(null);

  return (
    <>
      <h3> 소켓 실습1 </h3>
      <button onClick={hello}>hello</button>
      <button onClick={study}>study</button>
      <button onClick={bye}>bye</button>
      <p ref={result}></p>
    </>
  );
}
