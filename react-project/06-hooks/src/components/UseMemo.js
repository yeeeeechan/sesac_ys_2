import { useMemo, useState } from "react";

// useMemo : rendering 할 때, 불필요한 연산을 방지

export default function UseMemoEx() {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);
  const [list, setList] = useState([]);

  // [before]
  // count state가 변경되지 않아도, text state가 변경되어 렌더링될 때마다 calc 함수가 계속해서 실행됨! => 비효율적
  // count가 변경될 때만 연산하도록 하고 싶음!
  // const calc = () => {
  //   console.log("calc!");
  //   return count * 2;
  // };

  // [after]
  // useMemo (콜백함수, 의존성 배열)
  // useMemo는 값을 기억하고 있다가, count state의 변경이 있을 때만 다시 연산하여 calc에 담는다.
  const calc = useMemo(() => {
    console.log("calc!");
    return count * 2;
  }, [count]);

  return (
    <>
      <h3>useMemo 공부</h3>
      <div>
        count : {count}
        <button onClick={() => setCount(count + 1)}> +1 </button>
      </div>

      <div> calc {calc} </div>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></input>
    </>
  );
}
