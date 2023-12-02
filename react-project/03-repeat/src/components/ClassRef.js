import { Component, createRef } from "react";

class ClassRef extends Component {
  // 2. react의 createRef로 ref 지정하는 법
  input2 = createRef();

  // 콜백 함수를 이용하여 ref를 지정했을 때, ref 변수를 사용하는 방법
  focusInput = () => {
    this.input1.focus();
  };

  // 2의 방법으로 했을 땐 .current에 담긴다.
  focusInput2 = () => {
    this.input2.current.focus();
  };

  render() {
    return (
      <>
        {/* 1. 콜백 함수 이용하여 ref 지정하는 법 */}
        <input
          type="text"
          ref={(ref) => {
            // 선택하길 원하는 태그에 들어가서 ref 속성을 지정하고, ref 속성의 값으로 콜백 함수를 넘긴다.
            // ref에 콜백 함수를 넘길 때, 첫 번째 매개변수는 ref가 걸려 있는 요소를 담고 있다.
            // 따라서 이 ref를 사용하기 위해 아래에서는 ref를 담는 변수를 선언(this.input)
            this.input1 = ref;
          }}
        />
        <button type="button" onClick={this.focusInput}>
          버튼
        </button>

        <input type="text" ref={this.input2} />
        <button type="button" onClick={this.focusInput2}>
          버튼
        </button>
      </>
    );
  }
}

export default ClassRef;
