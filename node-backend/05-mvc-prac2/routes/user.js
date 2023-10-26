const express = require("express");
const router = express.Router();
const controller = require("../controller/Cuser");

// localhost:8000/user
// index.ejs render한다.
router.get("/", controller.main);

router.get("/", controller.join);

// localhost:8000/user/login (post 요청)
router.post("/login", controller.login);

module.exports = router;
