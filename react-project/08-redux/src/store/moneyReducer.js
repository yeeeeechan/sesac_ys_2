export const moneyIn = (data) => ({ type: "MONEYIN", data: data });
export const moneyOut = (data) => ({ type: "MONEYOUT", data: data });


const initialState = 0

const moneyReducer = (state = initialState, action) => {
  const {data, type} = action

  switch (type) {
    case "MONEYIN":
      return state + data
    case "MONEYOUT":
      return state - data
    default:
      return state;
  }
};

export default moneyReducer;
