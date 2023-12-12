export const moneyIn = () => ({ type: "MONEYIN" });
export const moneyOut = () => ({ type: "MONEYOUT" });

const moneyReducer = (state = { cash }, action) => {
  switch (action.type) {
    case "MONEYIN":
      return { cash: state + action.data };
    case "MONEYOUT":
      return { cash: state - action.data };
    default:
      return state;
  }
};

export default moneyReducer;
