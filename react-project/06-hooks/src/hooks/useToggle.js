import { useState } from "react";

// 토글 기능(true일 경우, false로 변화시키고 / false일 경우 true로 변화시켜 이에 따라 처리를 달리함)이 자주 쓰이므로,
// 이 기능을 hook으로 만들 것
export default function useToggle(initialValue) {
  const [value, setvalue] = useState(initialValue);
  const toggle = () => {
    setvalue(!value);
  };

  return [value, toggle];
}

// 커스텀 훅을 만드는 공식이 따로 정해져 있는 것은 아님.
// retrun을 객체로 해도 됨
