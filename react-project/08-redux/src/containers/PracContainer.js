import { moneyIn, moneyOut } from "../store/moneyReducer";
import { useSelector, useDispatch } from "react-redux";
import Bank from "../components/Bank"

export function BankContainer() {
  const cash = useSelector((state) => state.money);
  const dispatch = useDispatch();

  return (<>
    <Bank
      cash={cash}
      onMoneyIn={(data) => dispatch(moneyIn(data))}
      onMoneyOut={(data) => dispatch(moneyOut(data))} />
  </>)
}