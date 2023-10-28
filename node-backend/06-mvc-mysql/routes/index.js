const express = require("express");
const router = express.Router();
const controller = require("../controller/Cvisitor");

// ~~~~~:8000 -> index.ejs render 하기
router.get("/", controller.home);

// ~~~~~:8000/visitor -> visitor.ejs render 하기
router.get("/visitors", controller.visitor);

// 방명록 등록
router.post("/visitor", controller.postVisitor);

// 방명록 수정
router.patch("/visitor/:id", (req, res) => {
  res.send("");
});

// 방명록 삭제
router.delete("/visitor/:id", controller.deleteVisitor);

// router 모듈로 내보내기
module.exports = router;
