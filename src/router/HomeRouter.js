const express = require("express");
const { Index } = require("../controller/HomeController.js");

const router = express.Router();

router.get("/", Index);

module.exports = router;
