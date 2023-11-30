import { Component } from "react";

class EventClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "hello",
    };

    // 함수 선언문을 사용하여 메소드를 만들 때
    // 메소드 내부에서 class의 this를 사용하고 싶을 경우, 생성자 내에서 이 this를 사용하라고 지정해 줘야 한다.(bind의 역할)

    // 함수 선언문을 이용하여 선언된 메소드는 this 객체를 직접 바인딩해 줘야 함수 내부에서 클래스를 가리키고 있는 this를 사용할 수 있다.
    // bind(this)에서 넘겨준 this를 사용하도록 함수를 재선언
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  // 함수 선언문을 사용하여 메소드를 정의함
  // 함수 내부에서 자체적인 this를 만들 수 있고, 때문에 메소드 안에서 사용된 this는 클래스의 this가 아니게 됨. (동적 바인딩> 함수가 사용/호출될 때 this가 결정된다.)
  // 해결법1. 생성자 내부에서 this를 원하는 것으로 직접 바인딩한다.
  // 해결법2. 함수 표현식을 사용한다.
  handleOnClick() {
    this.setState({ msg: "bye" });
  }

  handleOnClickHello = (e) => {
    console.log(e.target);
    this.setState({ msg: "hello" });
  };

  // 단, 함수 표현식에서는 자체적인 this를 갖지 않고, 함수가 선언되었을 때 부모 요소를 가리킨다.(함수가 선언될 때==읽힐 때 this를 결정지음==정적 바인딩)
  handleOnClick = () => {
    this.setState({ msg: "bye" });
  };

  render() {
    return (
      <>
        <h3>클래스형 컴포넌트 event handling 공부</h3>
        {this.state.msg}
        <button onClick={this.handleOnClick}>잘가</button>
        <button onClick={this.handleOnClickHello}>안녕</button>

        {/* 매개변수로 react의 합성 이벤트 객체(여기선 e)를 받는다. (필요없으면 안 받아도 됨) */}
        {/* 합성 이벤트에 대한 모든 정보를 담고 있다. 그중 target이라는 것에 접근하면 이벤트가 걸린 태그를 확인할 수 있다. */}
        <button
          onClick={(e) => {
            console.log(e.target);
            console.log(e.type);
          }}
        >
          테스트
        </button>
      </>
    );
  }
}

export default EventClass;
