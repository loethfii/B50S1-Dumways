const express = require("express");
const { Testimonial } = require("../controller/TestimonialController.js");

const router = express.Router();

router.get("/testimonial", Testimonial);

module.exports = router;
