// const { dataProject } = require("../mocks/project.js");
const config = require("../database_config/config/config.json");
const { Sequelize, QueryTypes } = require("sequelize");
const sequelize = new Sequelize(config.development);

const Index = async (req, res) => {
  try {
    const query = `SELECT id, img, "projectName", "startDate", "endDate", duration, description, technologies, "createdAt", "updatedAt" from "Projects"
    order by id desc`;
    let obj = await sequelize.query(query, { type: QueryTypes.SELECT });
    res.render("index", {
      data: obj,
      isLogin: req.session.isLogin,
      user: req.session.user,
    });
  } catch (error) {
    console.error(error, ">>>>> Error pada select");
  }
};

module.exports = { Index };
