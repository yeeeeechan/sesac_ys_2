import { useState } from "react";
import {
  Box2Container,
  Box4Container,
  Bank,
} from "../containers/BoxesContainer";

export function Box1({ number }) {
  return (
    <div className="box">
      <h3>number: {number}</h3>
      <Box2Container />
    </div>
  );
}

export function Box2({ number }) {
  return (
    <div className="box">
      <h3>number: {number}</h3>
      <Box3 />
    </div>
  );
}

function Box3() {
  return (
    <div className="box">
      <Box4Container />
    </div>
  );
}

export function Box4(props) {
  const { number, isData, counterIncrease, counterDecrease, isDataChange } =
    props;
  return (
    <div className="box">
      <h3>number: {number}</h3>

      <button onClick={counterIncrease}>plus</button>
      <button onClick={counterDecrease}>minus</button>

      <div>isData {`${isData}`}</div>
      <button onClick={isDataChange}>변경</button>
    </div>
  );
}

export function Bank(props) {
  const { moneyIn, moneyOut } = props;
  const [cash, setCash] = useState(0);

  return (
    <>
      <h2>코딩온 은행</h2>
      <h3>잔액: {cash}</h3>
      <input
        type="number"
        value={cash}
        onChange={(e) => {
          setCash(e.target.value);
        }}
      />
      <button onClick={moneyIn}>입금</button>
      <button onClick={moneyOut}>출금</button>
    </>
  );
}
