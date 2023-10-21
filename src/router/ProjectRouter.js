const express = require("express");
const upload = require("../middlewares/UploadFIles");

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
router.post("/add-project", upload.single("upload-image"), AddNewProject);
router.get("/update/:id", UpdateProject);
router.post("/update/:id", upload.single("upload-image"), UpdateNewData);
router.get("/delete-project/:id", DeleteProject);
router.get("/detail-project/:id", DetailProject);

module.exports = router;
