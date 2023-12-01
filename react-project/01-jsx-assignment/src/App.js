import "./App.css";
import Animal from "./components/FunctionalComponent";
import FavoritFood from "./components/PropsPrac";
import Book from "./components/Book";
import ClassComponent from "./components/ClassComp";

function App() {
  return (
    <>
      {/* <div className="App">
        <Animal />
      </div> */}

      <div food="아몬드">
        <FavoritFood />
      </div>

      <br />
      <br />

      <Book
        title="나의 하루는 4시 40분에 시작된다"
        author="김유진"
        price="13,500"
        type="자기계발서"
      ></Book>

      <ClassComponent text="" valid=""></ClassComponent>
    </>
  );
}

export default App;
