const INCREMENT = "counter/INCREMENT"; // 다른 reducer 액션과 겹치지 않도록 combine 할 때 붙여준 key값(counter)을 앞에 붙여준 것
const DECREMENT = "counter/DECREMENT";

// 발생할 수 있는 action을 return하는 함수
// action.type의 바뀌는 상황이 발생하면 액션을 발생시키는 모든 곳(==dispatch를 사용한 모든 곳)에서 action.type을 모두 변경해 줘야 함.
// 이를 해결하기 위해 함수로 선언.
export const increase = () => ({ type: INCREMENT });
export const decrease = () => ({ type: DECREMENT });

const initialValue = { number: 100 };

const counterReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "INCREMENT": //INCREMENT 상수 선언 전 ver.3
    case INCREMENT: //INCREMENT 상수 선언 후 ver.3-1
      return { number: state.number + 1 };
    case "DECREMENT":
    case DECREMENT:
      return { number: state.number - 1 };
    default:
      return state;
  }
};

export default counterReducer;
