const express = require("express");
const router = express.Router();
const controller = require("../controller/Cmain");

router.get("/", controller.main);
router.post("/", controller.loginresult);

module.exports = router;
