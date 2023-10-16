import express from "express";
import { Testimonial } from "../controller/TestimonialController.js";

const router = express.Router();

router.get("/testimonial", Testimonial);

export default router;
