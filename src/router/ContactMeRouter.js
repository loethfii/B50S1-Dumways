import { ContactMe } from "../controller/ContactMeController.js";
import express from "express";

const router = express.Router();

router.get("/contact-me", ContactMe);

export default router;
