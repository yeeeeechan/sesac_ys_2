const express = require("express");
const router = express.Router();
const controller = require("../controller/Cvisitor");

// 임시 라우터
// 같은 경로로 연결할 경우, 라우터 작성 순서에 따라 다르게 접속될 수 있음
router.get("/visitor/test/:id", controller.getTest);

// ~~~~~:8000 -> index.ejs render
router.get("/", controller.home);

// ~~~~~:8000/visitor -> visitor.ejs render
router.get("/visitors", controller.visitor);

// 방명록 등록
router.post("/visitor", controller.postVisitor);

// 방명록 수정
router.patch("/visitor", controller.patchVisitor);

// 방명록 하나 조회(수정에 앞서 방명록에 있는 정보를 데이터베이스에서 조회)
router.get("/visitor/:id", controller.getVisitorById);

// 방명록 삭제
router.delete("/visitor/:id", controller.deleteVisitor);

module.exports = router;
