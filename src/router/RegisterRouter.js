const express = require("express");
const {
  RegisterForm,
  RegisterNewUser,
} = require("../controller/RegisterController.js");

const router = express.Router();
router.get("/register", RegisterForm);
router.post("/register", RegisterNewUser);

module.exports = router;
