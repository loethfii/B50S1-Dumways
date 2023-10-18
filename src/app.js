const express = require("express");
const path = require("path");
const HomeRouter = require("./router/HomeRouter.js");
const ProjectRouter = require("./router/ProjectRouter.js");
const ContactMeRouter = require("./router/ContactMeRouter.js");
const TestimonialRouter = require("./router/TestimonialRouter.js");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: false }));

app.use(express.static("src/assets"));

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "/views"));

app.use(HomeRouter);
app.use(ProjectRouter);
app.use(ContactMeRouter);
app.use(TestimonialRouter);

app.listen(port, () => {
  console.info(`Terhubung ke : http://localhost:${port}`);
});
