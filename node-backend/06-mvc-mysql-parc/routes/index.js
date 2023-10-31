const express = require("express");
const router = express.Router();
const controller = require("../controller/Cjoin");

// index 페이지 render
router.get("/", controller.home);

// 회원가입
// 회원가입 -> user table에 insert를 실행시키는 api(회원가입 버튼을 눌렀을 때)
router.post("/welcome", controller.join);

// 로그인
// 로그인 -> user table에서 회원 존재 여부를 판단하는 api(로그인 버튼을 눌렀을 때)
router.post("/login", controller.login);

// 회원 정보 페이지

module.exports = router;
