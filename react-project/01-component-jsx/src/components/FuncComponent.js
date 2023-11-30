// const FuntionComponent = () => {
//   return;
//   <div>Functional Component 입니다.</div>;
// };

import image from "./logo512.png";

function FuntionComponent() {
  const text = "hello";
  const name = "lily";

  const ifRenderTest = () => {
    if (name == "lily") {
      return <div>안녕하세요!!</div>;
    } else if (name == "richard") {
      return "안녕하세요...";
    } else {
      return "누구세요?";
    }
  };

  const style = { fontSize: "25px", color: "red" };

  //if (조건1 && 조건2)
  // 조건1이 참인 경우, 뒤에 오는 조건을 읽는다. 조건1이 거짓인 경우, 뒤에 오는 조건을 읽지 않는다.

  return (
    <>
      {/* 1. return은 무조건 하나의 태그로 감싸야 한다. (여러 태그를 쓸 땐 더 큰 하나의 태그로 감싸야 함) */}
      <div> 함수형 컴포넌트입니다. 1 </div>
      <div> 함수형 컴포넌트입니다. 2 </div>

      {/* 2. js 문법을 사용할 수 있다. : 변수 (중괄호 안에 작성) 단, if문과 for문은 사용 불가능. 삼항연산자는 사용 가능 */}
      <h3> 새싹 {text}</h3>

      {/* 2. js 문법을 사용할 수 있다. : 삼항연산자를 사용해 간단한 조건에 따른 렌더링은 가능, if문, for문은 사용 불가 */}
      <div>
        <h4>{name === "lily" ? "안녕하세요!" : "누구세요?"}</h4>

        {/* 2-1. 복잡한 조건을 이용하고 싶다면? -> 위에서 함수로 만들어 사용! */}
        <h4>{ifRenderTest()}</h4>
      </div>

      {/* 2-2. 조건에 따른 렌더링 ( && ) */}
      <h5>{name === "lily" && "안녕하세요!!!"}</h5>

      {/* 3. inline style 적용 방법 -> style 속성값으로 객체 전달, css 속성은 camelCase로 작성한다. */}
      <div style={{ fontSize: "25px", color: "green" }}>hello</div>
      <div style={style}>Hi</div>

      {/* 4. class와 onclick을 jsx에서 사용하기 */}
      {/* App.css가 App.js에 연결되어 있으므로, App.js에서 호출하고 있는 (하위 컴포넌트) FuncComponent.js에서도 css 속성이 적용된다. */}
      <div className="test-css">jsx에서 css 사용하기 (className)</div>

      {/* html에서는 이미 선언되어 있는 함수를 '호출' 했음. jsx에서는 함수를 '선언' */}
      <button
        onClick={() => {
          console.log("hello");
        }}
      >
        버튼
      </button>

      {/* 5. 종료 태그 필수!! */}
      {/* "/" 경로가 public 폴더 안이다. */}
      <img src="/logo192.png" />

      {/* src 내부의 이미지를 사용할 경우, -> 위에서 이미지를 import 해 오기 */}
      <img src={image} />
    </>
  );
}

export default FuntionComponent;
