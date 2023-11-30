import { useState } from "react";

const EventFunc = () => {
  const [textColor, setColor] = useState("black");
  const [word, setWord] = useState("검정색");
  const [btnText, setText] = useState("사라져라");
  const [divText, setDText] = useState("");
  const [selectText, setSelText] = useState("");
  const [fruitImg, setImg] = useState("");
  const [content, setContent] = useState("");
  const [backColor, setBackColor] = useState("");

  const changeToR = () => {
    setColor("red");
    setWord("빨간색");
  };

  const changeToB = () => {
    setColor("blue");
    setWord("파란색");
  };

  const changeText = () => {
    if (divText == "") {
      setText("보여라");
      setDText("안녕하세요");
    } else {
      setText("사라져라");
      setDText("");
    }
  };

  return (
    <>
      <h3 style={{ color: textColor }}>{word}</h3>
      <button onClick={changeToR}>
        <div>빨간색</div>
      </button>
      <button onClick={changeToB}>
        <div>파란색</div>
      </button>
      <br /> <br />
      <button onClick={changeText}>{btnText}</button>
      <h3>{divText}</h3>
      <br /> <br />
      과일:{" "}
      <select
        onSelect={(e) => {
          setSelText(e.target.value); //텍스트를 선택된 옵션 값으로 변경
        }}
      >
        {" "}
        <option value="apple">사과</option>
        <option value="banana">바나나</option>
        <option value="peach">복숭아</option>
        <option value="orange">오렌지</option>
      </select>
      배경색:{" "}
      <select
        onSelect={(e) => {
          setBackColor(e.target.value);
        }}
      >
        <option value="black">검정</option>
        <option value="white">하양</option>
        <option value="red">빨강</option>
        <option value="blue">파랑</option>
        <option value="green">초록</option>
      </select>{" "}
      글자색:{" "}
      <select
        onSelect={(e) => {
          setColor(e.target.value);
        }}
      >
        <option value="black">검정</option>
        <option value="white">하양</option>
        <option value="red">빨강</option>
        <option value="blue">파랑</option>
        <option value="green">초록</option>
      </select>{" "}
      <br />
      내용:{" "}
      <input
        type="text"
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
        }}
      />
      <img src={fruitImg} className="Section__fruits" /> <br />
      <div
        style={{ color: textColor, backgroundColor: backColor }}
        className="Section__text"
      >
        {content}
      </div>
    </>
  );
};

export default EventFunc;