// 1. 매개변수로 props를 받음 (객체 형태)
// function FuncPropsEx(props) {
//   return (
//     <>
//       <div>함수형 컴포넌트를 이용 ( Props )</div>
//       <div>
//         제목은 {props.title}, 내용은 {props.content}
//       </div>
//     </>
//   );
// }

// 2. 받아온 뒤 컴포넌트 내에서 구조 분해해서 사용 가능
// function FuncPropsEx(props) {
//   const { title, content } = props;

//   return (
//     <>
//       <div>함수형 컴포넌트를 이용 ( Props )</div>
//       <div>
//         제목은 {title}, 내용은 {content}
//       </div>
//     </>
//   );
// }

// 3. 매개변수로 props를 받아올 때부터 구조 분해 가능
// function FuncPropsEx({ title, content }) {
//   return (
//     <>
//       <div>함수형 컴포넌트를 이용 ( Props )</div>
//       <div>
//         제목은 {title}, 내용은 {content}
//       </div>
//     </>
//   );
// }

// 4. proptype을 이용해 어떤 props가 넘어올지 명시하는 방법
// 유연한 js의 특징으로 인해 예기치 못한 오류가 발생하는 경우를 방지
import PropTypes from "prop-types";

function FuncPropsEx({ title, content, number }) {
  return (
    <>
      <div>함수형 컴포넌트를 이용 ( Props )</div>
      <div>
        제목은 {title}, 내용은 {content}, 숫자는 {number}
      </div>
    </>
  );
}

// props 값이 넘어오지 않으면 설정한 default 값이 출력된다.
FuncPropsEx.defaultProps = {
  title: "새싹새싹",
};

FuncPropsEx.propTypes = {
  title: PropTypes.string, // props는 문자열로 넘어온다.
  content: PropTypes.string.isRequired, // 필수값으로 지정(필수로 받아와야 한다!)
  number: PropTypes.number,
};

export default FuncPropsEx;
