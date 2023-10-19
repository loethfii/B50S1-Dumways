const config = require("../database_config/config/config.json");
const { Sequelize, QueryTypes } = require("sequelize");
const sequelize = new Sequelize(config.development);
const bcrypt = require("bcrypt");

const FormLogin = (req, res) => {
  let sessionTest = {
    isLogin: req.session.isLogin,
    user: req.session.user,
  };

  if (sessionTest.isLogin) {
    res.redirect("/");
  } else {
    res.render("login");
  }
};

const Logout = (req, res) => {
  req.session.destroy();
  res.redirect("/");
};

const LoginUser = async (req, res) => {
  try {
    let { email, password } = req.body;
    let query = `select * from users where email = '${email}'`;
    let dataLogin = await sequelize.query(query, { type: QueryTypes.SELECT });
    if (!dataLogin.length) {
      req.flash("danger", "user are not regestered");
      return;
    }
    await bcrypt.compare(password, dataLogin[0].password, (err, result) => {
      switch (result) {
        case true:
          (req.session.isLogin = true), (req.session.user = dataLogin[0].name);
          req.flash("success", " login success");
          req.flash("danger", "password wrong");
          return res.redirect("/");
        case false:
          req.flash("danger", "password wrong");
          return res.redirect("/login");
      }
    });
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  FormLogin,
  LoginUser,
  Logout,
};
