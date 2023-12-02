import "./App.css";
import ClassRef from "./components/ClassRef";
import FuncRef from "./components/FuncRef";
import ListMap from "./components/ListMap";
import ScrollBox from "./components/ScrollBox";

function App() {
  return (
    <div>
      <ListMap></ListMap>
      함수형 <FuncRef />
      <br />
      <br />
      클래스형 <ClassRef />
      <br />
      <br />
      <ScrollBox />
    </div>
  );
}

export default App;
