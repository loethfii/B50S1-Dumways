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
} from "./route/route-web.js";

const app = express();

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

app.listen(4000, () => {
  console.log("Berhasil terhubung");
});
