import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import HomeRouter from "./router/HomeRouter.js";
import ProjectRouter from "./router/ProjectRouter.js";
import ContactMeRouter from "./router/ContactMeRouter.js";
import TestimonialRouter from "./router/TestimonialRouter.js";
const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.urlencoded({ extended: false }));

app.use(express.static("src/assets"));

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "/views"));

app.use(HomeRouter);
app.use(ProjectRouter);
app.use(ContactMeRouter);
app.use(TestimonialRouter);

app.listen(port, () => {
  console.log(`Terhubung ke : http://localhost:${port}`);
});
