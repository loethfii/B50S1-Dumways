const express = require("express");
const path = require("path");
const HomeRouter = require("./router/HomeRouter.js");
const ProjectRouter = require("./router/ProjectRouter.js");
const ContactMeRouter = require("./router/ContactMeRouter.js");
const TestimonialRouter = require("./router/TestimonialRouter.js");
const RegisterRouter = require("./router/RegisterRouter.js");
const Login = require("./router/LoginRouter.js");
const app = express();
const port = 3000;
const session = require("express-session");
const flash = require("express-flash");
// setup flash
app.use(flash());

// setup session express
app.use(
  session({
    cookie: {
      httpOnly: true,
      secure: false,
      maxAge: 1000 * 60 * 60 * 2,
    },
    store: new session.MemoryStore(),
    saveUninitialized: true,
    resave: false,
    secret: "Rahasia",
  })
);

app.use(express.urlencoded({ extended: false }));

app.use(express.static("src/assets"));
app.use(express.static("src/uploads"));

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "/views"));

app.use(HomeRouter);
app.use(ProjectRouter);
app.use(ContactMeRouter);
app.use(TestimonialRouter);
app.use(Login);
app.use(RegisterRouter);

app.listen(port, () => {
  console.info(`Terhubung ke : http://localhost:${port}`);
});
