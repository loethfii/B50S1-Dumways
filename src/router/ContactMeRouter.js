const { ContactMe } = require("../controller/ContactMeController.js");
const express = require("express");

const router = express.Router();

router.get("/contact-me", ContactMe);

module.exports = router;
