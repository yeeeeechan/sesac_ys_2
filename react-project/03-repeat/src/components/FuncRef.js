import { useRef } from "react";

function FuncRef() {
  const inputFocus = useRef(); // 요소를 담을 변수(ref) 선언

  // 로컬 변수로 담아두고 싶을 때(state 변수가 아니기 때문에 ref가 바뀌더라도 컴포넌트가 리랜더링되지 않는다.)
  // const localVar = 0;과 같음
  const localVar = useRef(0);

  const focusInput = () => {
    // inputFocus.current에 ref가 걸린 input 태그가 담김
    inputFocus.current.focus();
  };

  const plusLocalVar = () => {
    localVar.current++;
    console.log(localVar.current);
  };

  return (
    <>
      <input type="text" ref={inputFocus} />
      <button type="button" onClick={focusInput}>
        버튼
      </button>

      {/* 버튼을 클릭할 때마다 로컬 변수에 ++된 결과가 콘솔에 찍히는 걸 확인할 수 있음, 그러나 리랜더링되지 않음 */}
      <div>{localVar.current}</div>
      <button type="button" onClick={plusLocalVar}>
        버튼
      </button>
    </>
  );
}

export default FuncRef;
