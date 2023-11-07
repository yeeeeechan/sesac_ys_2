const express = require("express");
const controller = require("../controller/Cuser");
const router = express.Router();

router.get("/", controller.main);
router.get("/join", controller.join);
router.post("/join", controller.joinUser);

router.post("/user", controller.user_page);
router.post("/login", controller.login);

router.patch("/user/edit/:id", controller.edit);
router.delete("/user/delete/:id", controller.delete);

module.exports = router;
