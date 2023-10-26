const express = require("express");
const router = express.Router(); //router들을(어떤 요청을 어떻게 처리할지) 모아두는 객체
const controller = require("../controller/Cmain");

// "/" 부분은 localhost:8000/와 같음.(app.use에서 "/"로 걸어줬으므로)
// get 요청에 대한 정보를 모아둠(모두 router에 담는다)
router.get("/", controller.main);

// localhost:8000/comments
// /comments에 들어갔을 때 응답할 내용(controller의 comments 함수)
router.get("/comments", controller.comments);

module.exports = router;
