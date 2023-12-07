import "./App.css";
import CustomHook from "./components/CustomHook";
import UseCallbackEx from "./components/UseCallback";
import UseCallbackEx2 from "./components/UseCalooback(2)";
import UseMemoEx from "./components/UseMemo";
import UseReducer from "./components/UseReducer";
import { useState } from "react";

function App() {
  const [postId, setPostId] = useState(1);
  return (
    <div>
      <UseMemoEx />
      <hr />
      <UseCallbackEx />
      <hr />
      <UseCallbackEx2 postId={postId} />
      <button onClick={() => setPostId(postId + 1)}>+1</button>
      <hr />
      <UseReducer />
      <hr />
      <CustomHook />
    </div>
  );
}

export default App;
