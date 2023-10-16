import express from "express";
import {
  AddProject,
  AddNewProject,
  UpdateProject,
  UpdateNewData,
  DeleteProject,
  DetailProject,
} from "../controller/ProjectController.js";

const router = express.Router();

router.get("/add-project", AddProject);
router.post("/add-project", AddNewProject);
router.get("/update/:id", UpdateProject);
router.post("/update/:id", UpdateNewData);
router.get("/delete-project/:id", DeleteProject);
router.get("/detail-project/:id", DetailProject);

export default router;
