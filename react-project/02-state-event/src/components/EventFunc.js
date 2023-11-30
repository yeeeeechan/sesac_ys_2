import { useState } from "react";

function EventFunc() {
  const [msg, setMsg] = useState("hello");
  const [name, setName] = useState("");

  const handleEnter = (e) => {
    if (e.key == "Enter") {
      console.log("엔터가 눌렸습니다.");
    }
  };

  const handleOnClick = (e) => {
    console.log(e.target);
    setMsg("bye");
  };

  function handleOnClickHello(e) {
    console.log(e.target);
    setMsg("hello");
  }

  // 메시지를 매개변수로 받아서 출력하고 싶다! -> 먼저 익명 함수 선언 후 인자 넘겨서 실행
  const handleOnClickTest = (message) => {
    setMsg(message);
  };

  return (
    <>
      <h3>함수형 컴포넌트 event handling 공부</h3>
      <div>
        {msg}
        <button onClick={handleOnClick}> 잘가</button>
        <button onClick={handleOnClickHello}> 안녕</button>

        {/* 함수에서 매개변수를 받고 싶다면 -> 1. 먼저 익명 함수 선언 후, 그 내부에서 함수 실행 */}
        {/* <button
          onClick={() => {
            handleOnClickTest("테스트입니다.");
          }}
        >
          테스트
        </button> */}

        {/* 2. .bind를 이용한다. */}
        {/* 단, 함수.bind()의 첫 번째 매개변수는 앞에 있는 함수의 this를 결정한다. 넘겨줄 값이 없다면 null로 넘기고, 두 번째 자리부터 원하는 인자를 넣는다.*/}
        <button onClick={handleOnClickTest.bind(null, "안녕안녕")}>
          테스트
        </button>

        <br />

        {/* input 태그에서 엔터를 누르면 "엔터를 눌렀습니다."라는 문구가 콘솔에 찍히도록 한다. */}
        {/* onChange를 활성화해 input 태그에 입력된 값으로 value를 변경한다. */}
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          onKeyDown={handleEnter}
        />

        {/* <button
          onClick={(e) => {
            console.log(e);
            setMsg("bye");
          }}
        >
          잘가
        </button> */}
      </div>
    </>
  );
}

export default EventFunc;
