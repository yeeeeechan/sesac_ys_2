import { useSelector, useDispatch } from "react-redux";
import { Box1, Box2, Box4, Bank } from "../components/Boxes";
import { increase, decrease } from "../store/counterReducer";
import { MONEYIN, MONEYOUT } from "../store/moneyReducer";

export function Box1Container() {
  const number = useSelector((state) => state.counter.number);
  return <Box1 number={number} />;
}

export function Box2Container() {
  const number = useSelector((state) => state.counter.number);
  return <Box2 number={number} />;
}

export function Box4Container() {
  const number = useSelector((state) => state.counter.number);
  const isData = useSelector((state) => state.isData);
  const dispatch = useDispatch();
  const counterIncrease = () => dispatch(increase());
  const counterDecrease = () => dispatch(decrease());
  const isDataChange = () => dispatch({ type: "CHANGE" });

  return (
    <Box4
      number={number}
      isData={isData}
      counterIncrease={counterIncrease}
      counterDecrease={counterDecrease}
      isDataChange={isDataChange}
    />
  );
}

export function BankContainer() {
  const cash = useSelector((state) => state.money);
  const dispatch = useDispatch();
  const moneyIn = () => dispatch(MONEYIN, { data: cash });
  const moneyOut = () => dispatch(MONEYOUT, { data: cash }); // hint. dispatch로 action을 보낼 때 데이터도 함께 보낼 수 있음!

  return <Bank cash={cash} moneyIn={moneyIn} moneyOut={moneyOut} />;
}
