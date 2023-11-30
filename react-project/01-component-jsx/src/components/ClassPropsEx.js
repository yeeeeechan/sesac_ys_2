import { Component } from "react";
import PropTypes from "prop-types";

class ClassPropsEx extends Component {
  render() {
    return (
      <>
        <div>클래스형 컴포넌트를 이용 ( Props )</div>
        <div>
          제목은 {this.props.title}, 내용은 {this.props.content}, 숫자는{" "}
          {this.props.number}
        </div>
      </>
    );
  }

  // static으로 함수 내에서 설정할 수도 있음
  // static은 정적 변수 -> 객체 내의 일반 속성은 객체별로 다른 메모리 공간을 차지하고 있는데,
  // 정적 속성(변수==필드, 메소드)는 모든 객체가 하나의 메모리를 바라봄. 따라서 굳이 각자 다른 객체 메모리를 할당할 필요가 없는 유틸리티적인 요소를 할당
  static defaultProps = {
    title: "제목제목",
  };

  static propTypes = {
    title: PropTypes.string,
    content: PropTypes.string.isRequired,
    number: PropTypes.number,
  };
}

// ClassPropsEx.defaultProps = {
//   title: "제목제목",
// };

// ClassPropsEx.propTypes = {
//   title: PropTypes.string,
//   content: PropTypes.string.isRequired,
//   number: PropTypes.number,
// };

export default ClassPropsEx;
