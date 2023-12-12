import "./App.css";
import { Box1Container } from "./containers/BoxesContainer";

// containers 폴더
// redux store에 직접적으로 접근하는 컴포넌트를 모아 두기 위해 만든 폴더

// components 폴더
// 보통 presentational 컴포넌트만 저장
// redux store에 직접적으로 접근하지 않는 컴포넌트를 모아 두기 위해 만든 폴더

function AppRedux3() {
  return (
    <div>
      <Box1Container />
    </div>
  );
}

export default AppRedux3;
