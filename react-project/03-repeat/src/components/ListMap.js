import { useState, useRef } from "react";

function ListMap() {
  const inputFocus = useRef();

  const productList = [
    { id: 1, product: "가방" },
    { id: 2, product: "패딩" },
    { id: 3, product: "신발" },
    { id: 4, product: "하의" },
  ];
  const [list, setList] = useState(productList);
  const [newProduct, setNewProduct] = useState("");

  // map은 앞에 있는 배열에 대해 반복을 하면서, map의 인자로 넘어가는 콜백 함수의 return값을 이용해 새로운 배열을 만든다.
  // [<li>a</li>, <li>b</li>, <li>c</li>]

  const addProduct = () => {
    // 입력된 값이 없는 경우, focus
    if (inputFocus.current.value == "") {
      inputFocus.current.focus();
    } else {
      // list와 추가할 객체를 합쳐줘야 함
      // 원래라면, 새로운 상품을 back에서 inset하고 생긴 primary 값을 id로 잡아 주는 게 좋음
      const newObj = {
        id: list[list.length - 1].id + 1,
        product: newProduct,
      };

      // 배열을 합치는 방법 두 가지
      // const newList = [...list, newObj];
      const newList = list.concat(newObj);

      setList(newList);
      // setList 함수를 사용

      setNewProduct(""); //추가하고 입력란 비우기
    }
  };

  const deleteProduct = (id) => {
    // 더블클릭한 상품에 대해서 삭제를 해야 함

    // filter 메소드는 앞에 있는 배열에 대해서 반복
    // filter 메소드의 return 값은 조건이 되어야 함. 조건이 true일 경우, 해당 원소는 새로운 배열에 포함
    // 조건이 false일 경우, 해당 원소는 새로운 배열에 포함하지 않음
    const newList = list.filter((value) => value.id != id); // 화살표 함수에서 중괄호와 return 없이 바로 값이 오면 함수가 실행되었을 때 해당 값이 반환된다라는 의미

    // rendering할 때 list 배열을 이용함 -> list 배열에서 원하는 원소를 삭제해야 함
    // setList를 이용하여 list의 상태를 삭제된 버전의 배열로 변경
    setList(newList);
  };

  return (
    <>
      <label>추가할 상품: </label>
      <input
        type="text"
        value={newProduct}
        onChange={(e) => {
          setNewProduct(e.target.value);
        }}
        ref={inputFocus}
      ></input>
      <button onClick={addProduct}>추가</button>
      <ul>
        {list.map((value) => {
          // 더블클릭한 상품을 알아야 하므로, 함수의 인자로 해당 상품의 고유 id 값을 받음
          return (
            <li
              style={{ cursor: "pointer" }}
              key={value.id}
              onDoubleClick={() => {
                deleteProduct(value.id);
              }}
            >
              {value.product}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ListMap;
