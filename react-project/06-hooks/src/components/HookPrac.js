import { useMemo, useState } from "react";

function HookPrac() {
  const [text, setText] = useState("");
  const [targetText, setTargetText] = useState("");
  // const [count, setCount] = useState(0);

  // count를 굳이 state로 관리할 필요가 없음...
  const searchCount = useMemo(() => {
    let number = 0;
    const sentence = text.split(" ");
    for (let i = 1; i < sentence.length; i++) {
      if (sentence[i] === targetText) number += 1;
    }
    return number;
  }, [text]);

  return (
    <>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <br />
      <input
        type="text"
        value={targetText}
        onChange={(e) => setTargetText(e.target.value)}
      />

      <h3>
        "{targetText}" 단어의 빈도 수: {searchCount}
      </h3>
    </>
  );
}

export default HookPrac;
