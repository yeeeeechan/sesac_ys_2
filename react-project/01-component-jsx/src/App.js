// 페이지 전체를 담당하는 컴포넌트
import "./App.css";
import ClassComponent from "./components/ClassComponent";
import FuntionComponent from "./components/FuncComponent";
import FuncPropsEx from "./components/FuncPropsEx";
import Section from "./components/Section";
import ClassPropsEx from "./components/ClassPropsEx";

function App() {
  return (
    <div>
      {/* <FuntionComponent /> */}
      {/* <FuntionComponent> */}
      {/* 컴포넌트를 불러올 땐 시작 태그와 종료 태그를 반드시 명시해야 함, 자식 태그가 없는 경우엔 태그 안에 ' /'로 명시 */}
      {/* </FuntionComponent> */}
      {/* <ClassComponent /> */}

      <FuncPropsEx title="SeSac" content="hello world" number={2} />
      <FuncPropsEx content="hello world" number={22} />
      {/* props는 하위 컴포넌트에 객체 형태로 넘어간다. 문자열을 넘겨주거나, 숫자 또는 함수는 중괄호 안에 작성 */}

      {/* 특정 컴포넌트의 모든 자식 요소는 'children'이라는 이름으로 props 넘겨준다. */}
      <Section title="SeSAC">
        <div>SeSAC 영역의 content임</div>
      </Section>
      <Section title="새싹">
        <h3>새싹새싹새싹</h3>
      </Section>

      <ClassPropsEx title="SeSAC" content="새싹임" number="100" />
    </div>
  );
}

export default App;
