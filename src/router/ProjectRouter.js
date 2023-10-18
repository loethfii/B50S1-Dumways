const express = require("express");
const {
  AddProject,
  AddNewProject,
  UpdateProject,
  UpdateNewData,
  DeleteProject,
  DetailProject,
} = require("../controller/ProjectController.js");

const router = express.Router();

router.get("/add-project", AddProject);
router.post("/add-project", AddNewProject);
router.get("/update/:id", UpdateProject);
router.post("/update/:id", UpdateNewData);
router.get("/delete-project/:id", DeleteProject);
router.get("/detail-project/:id", DetailProject);

module.exports = router;
