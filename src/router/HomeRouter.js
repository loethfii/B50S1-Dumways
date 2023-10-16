import express from "express";
import { Index } from "../controller/HomeController.js";

const router = express.Router();

router.get("/", Index);

export default router;
