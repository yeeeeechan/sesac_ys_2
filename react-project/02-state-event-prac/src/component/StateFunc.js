import { useState } from "react";

function StateFunc() {
  const [number1, increase] = useState(0);
  const [number2, decrease] = useState(0);

  return (
    <>
      <div>{number1}</div>
      <div>{number2}</div>
      <button
        onClick={() => {
          increase((prevNumber) => prevNumber + 1);
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          decrease((prevNumber) => prevNumber - 2);
        }}
      >
        -2
      </button>
    </>
  );
}

export default StateFunc;
