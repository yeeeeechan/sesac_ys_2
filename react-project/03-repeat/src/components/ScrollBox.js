import { useRef } from "react";

function ScrollBox() {
  const box = useRef();
  const scrollTop = () => {
    box.current.scrollTop = 0; // 요소를 선택해서 div 속성으로 조작
  };

  return (
    <>
      <div className="scroll-box" ref={box}>
        <h1>hello</h1>
        <h1>world</h1>
        <h1>hello</h1>
        <h1>world</h1>
        <h1>hello</h1>
        <h1>world</h1>
        <h1>hello</h1>
        <h1>world</h1>
        <h1>hello</h1>
        <h1>world</h1>
        <h1>hello</h1>
        <h1>world</h1>
      </div>

      <button onClick={scrollTop}>Top</button>
    </>
  );
}

export default ScrollBox;
