import { useReducer, useState, useCallback } from "react";

const initialValue = { value: 0 };
const reducer = (prevState, action) => {
  switch (action.type) {
    case "PLUS":
      return { value: prevState.value + 1 };
    case "MINUS":
      return { value: prevState.value - 1 };
    case "MULTYFLY":
      return { value: prevState.value * action.number };
    case "RESET":
      return initialValue;
    default:
      return { value: prevState.value };
  }
};

// state: 상태
// dispatch: action을 발생시키는 함수
// reducer: 실질적으로 상태를 업데이트하는 함수. 결국 dispatch가 reducer를 실행시킴

export default function UseReducer() {
  const [state, dispatch] = useReducer(reducer, initialValue);
  const [number, setNumber] = useState(0);

  const handleChangeNumber = useCallback((e) => setNumber(e.target.value), []);

  const plus = () => dispatch({ type: "PLUS" });
  const minus = () => dispatch({ type: "MINUS" });
  const reset = () => dispatch({ type: "RESET" });
  const multifly = () => dispatch({ type: "MULTYFLY", number: number });

  // 같은 기능을 useState로 구현했을 때
  // 지금은 +, -, 초기화만 하고 있지만, 만약 곱하기, 나누기 등 더 많은 연산을 이용한다면?
  // 또 컴포넌트 자체가 복잡해져서 코드가 길어짐
  // state의 변화를 추적하고 싶을 때, setSate을 일일이 찾아가야 함. (reducer는 reducer 함수 하나만 보면 파악 가능!)
  // const [state, setState] = useState(initialValue);
  // const plus = () => setState({ value: state.value + 1 });
  // const minus = () => setState({ value: state.value - 1 });
  // const reset = () => setState(initialValue);

  return (
    <>
      <h3>useReducer 공부</h3>
      <div>
        {state.value}
        <button onClick={plus}> +1 </button>
        <button onClick={minus}> -1 </button>
        <button onClick={reset}> reset </button>
        <br />
        <input type="number" value={number} onChange={handleChangeNumber} />
        <button onClick={multifly}> 곱하기 </button>
      </div>
    </>
  );
}
