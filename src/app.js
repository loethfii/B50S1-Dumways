import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import {
  Index,
  AddProject,
  ContactMe,
  Testimonials,
  addNewProject,
  detailProject,
  deleteProject,
  updateProject,
} from "./route/route-web.js";

const app = express();
const port = 8080;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.urlencoded({ extended: false }));

app.use(express.static("src/assets"));

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", Index);
app.get("/add-project", AddProject);
app.post("/add-project", addNewProject);
app.get("/contact-me", ContactMe);
app.get("/testimonial", Testimonials);
app.get("/detail-project/:id", detailProject);
app.get("/delete-project/:id", deleteProject);
app.get("/update/:id", updateProject);

app.listen(port, () => {
  console.log(`Terhubung ke : http://localhost:${port}`);
});
