import { useState } from "react";

function ColorSelect({ mode, onChangeHandler }) {
  return (
    <>
      <label>{mode}색</label>
      <select onChange={onChangeHandler}>
        <option value="black">검정</option>
        <option value="white">하양</option>
        <option value="red">빨강</option>
        <option value="blue">파랑</option>
        <option value="green">초록</option>
      </select>
    </>
  );
}

export default ColorSelect;
