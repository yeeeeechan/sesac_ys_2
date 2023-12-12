// ver1. props drilling 예시
// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   // <React.StrictMode>
//   <App />
//   // </React.StrictMode>
// );

// ver2. redux 적용
// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import AppRedux1 from "./AppRedux1";

// import { Provider } from "react-redux";
// import { configureStore } from "@reduxjs/toolkit";
// import { composeWithDevTools } from "redux-devtools-extension";

// const initialValue = { number: 100 };

// const reducer = (state = initialValue, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return { number: state.number + 1 };
//     case "DECREMENT":
//       return { number: state.number - 1 };
//     default:
//       return state;
//   }
// };

// const store = configureStore({ reducer: reducer }, composeWithDevTools());

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <Provider store={store}>
//     <AppRedux1 />
//   </Provider>
// );

// ver3. redux 구조화
// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import AppRedux2 from "./AppRedux2";

// import { Provider } from "react-redux";
// import { configureStore } from "@reduxjs/toolkit";
// import { composeWithDevTools } from "redux-devtools-extension";

// import rootReducer from "./store";

// const store = configureStore({ reducer: rootReducer }, composeWithDevTools());

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <Provider store={store}>
//     <AppRedux2 />
//   </Provider>
// );

// ver4. redux 구조화 + containers 컴포넌트 폴더(리덕스에 직접 접근할 수 있는 컴포넌트들) / presentational 컴포넌트 폴더(리덕스에 직접 접근하진 않는 요소들) 분리
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import AppRedux3 from "./AppRedux3";
import AppPrac from "./AppPrac";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./store";

const store = configureStore({ reducer: rootReducer }, composeWithDevTools());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <AppPrac />
  </Provider>
);
