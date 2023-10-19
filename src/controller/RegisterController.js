const config = require("../database_config/config/config.json");
const { Sequelize, QueryTypes } = require("sequelize");
const sequelize = new Sequelize(config.development);
const bcrypt = require("bcrypt");
const saltRounds = 10;

const RegisterForm = (req, res) => {
  let sessionTest = {
    isLogin: req.session.isLogin,
    user: req.session.user,
  };

  if (sessionTest.isLogin) {
    res.redirect("/");
  } else {
    res.render("register");
  }
};

const RegisterNewUser = async (req, res) => {
  try {
    let { name, email, password } = req.body;
    await bcrypt.hash(password, saltRounds, (err, resultHash) => {
      let query = `insert into users(name, email, password) values('${name}', '${email}', '${resultHash}')`;
      sequelize.query(query, { type: QueryTypes.SELECT });
    });

    res.redirect("/login");
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  RegisterForm,
  RegisterNewUser,
};
