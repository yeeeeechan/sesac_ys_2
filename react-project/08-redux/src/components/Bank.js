import { useState } from "react";

export default function Bank(props) {
  const { cash, onMoneyIn, onMoneyOut } = props;
  const [input, setInput] = useState('');

  const plus = () => {
    onMoneyIn(Number(input))
    setInput('')
  }

  const minus = () => {
    onMoneyOut(Number(input))
    setInput('')
  }

  return (
    <>
      <h2>코딩온 은행</h2>
      <h3>잔액: {cash}원</h3>
      <input
        type="number"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button onClick={plus}>입금</button>
      <button onClick={minus}>출금</button>
    </>
  );
}
