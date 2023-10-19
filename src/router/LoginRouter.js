const express = require("express");
const {
  FormLogin,
  LoginUser,
  Logout,
} = require("../controller/LoginController.js");

const router = express.Router();

router.get("/login", FormLogin);
router.get("/logout", Logout);
router.post("/login", LoginUser);

module.exports = router;
