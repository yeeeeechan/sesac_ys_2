import { useState } from "react";

function StateFunc() {
  // useState는 배열을 반환함 차례로 [state 변수, state를 변경시키는 함수] (변수 이름은 자유)
  // useState(state 초기값)
  // -> 아래는 그 배열을 구조분해하여 number와 setNumber을 선언한 것. (여러 개 선언 가능)
  const [number, setNumber] = useState(0);
  const [text, setText] = useState("hello");

  return (
    <>
      <h3>함수형 컴포넌트 state 공부</h3>
      <div>number state value {number} </div>
      <button
        onClick={() => {
          // number가 사용되는 부분은 리랜더링됨
          // setNumber(number + 1);

          setNumber((prevNumber) => prevNumber + 1);
          setNumber((prevNumber) => prevNumber + 1);
        }}
      >
        +1
      </button>
      <div>{text}</div>
    </>
  );
}

export default StateFunc;
