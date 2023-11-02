const express = require("express");
const router = express.Router();
const controller = require("../controller/Cvisitor");

router.get("/", controller.home);

router.get("/welcome", controller.main);

router.post("/join", controller.join);

router.post("/login", controller.login);

router.get("/search", controller.search);

router.patch("/search", controller.edit);

router.delete("/delete/:userid", controller.delete);

module.exports = router;
