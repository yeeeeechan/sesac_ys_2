const express = require("express");
const path = require("path");
const app = express();
const PORT = 8000;
const dotenv = require("dotenv");
// cross-env -> 배포하는 환경(프로젝트를 실행시키는 환경)에 따라서 다른 env 파일을 사용할 수 있음
// 배포 버전인지 개발 버전인지에 따라 다른 env 파일을 로드할 수 있도록 도와줌

// console.log(process.env);

// dotenv.config();
// index.js와 같은 위치에 있는 .env 파일을 불러와서 환경 변수로 사용할 수 있도록 함.

dotenv.config({ path: path.join(__dirname, "./config/envs/.env") });
// index.js와 다른 위치에 있는 경우 .env 파일 불러오기

dotenv.config({
  path: path.join(__dirname, `./config/envs/${process.env.NODE_ENV}.env`),
});

console.log("password", process.env.PASSWORD);

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(process.env.PORT, () => {
  console.log("Server Port : ", process.env.PORT);
});

// 비밀번호 등 중요한 정보가 노출되지 않도록 환경변수에 담아서 관리하고 변수처럼 불러와 사용함(객체)
