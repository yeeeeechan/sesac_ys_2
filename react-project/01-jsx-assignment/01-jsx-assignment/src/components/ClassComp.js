import { Component } from "react";
import PropTypes from "prop-types";

class ClassComp extends Component {
  render() {
    return (
      <>
        <div> 클래스형 컴포넌트입니다. </div>;
        <button
          onClick={() => {
            console.log("콘솔 띄우기 성공!");
          }}
        >
          버튼
        </button>
      </>
    );
  }
}

ClassComp.defaultProps = {
  text: "이건 기본 text props입니다.",
};

ClassComp.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ClassComp;
