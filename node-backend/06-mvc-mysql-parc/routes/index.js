const express = require("express");
const router = express.Router();
const controller = require("../controller/Cjoin");

router.get("/", controller.home);

// 회원가입
router.post("/welcome", controller.join);

router.post("/login", controller.login);

module.exports = router;
