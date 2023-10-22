// const { dataProject } = require("../mocks/project.js");
const config = require("../database_config/config/config.json");
const { Sequelize, QueryTypes } = require("sequelize");
const sequelize = new Sequelize(config.development);

const Index = async (req, res) => {
  try {
    if (!req.session.isLogin) {
      const query = `SELECT p.id, p.img, p."projectName", p."startDate", p."endDate", p.duration,
      p.description, p.technologies, p."createdAt", p."updatedAt", u.name from projects as p
      left join users as u on p.user_id = u.id
      order by p.id desc`;
      let obj = await sequelize.query(query, { type: QueryTypes.SELECT });
      res.render("index", {
        data: obj,
        isLogin: req.session.isLogin,
        user: req.session.user,
      });
    } else {
      const query = `SELECT p.id, p.img, p."projectName", p."startDate", p."endDate", p.duration,
      p.description, p.technologies, p."createdAt", p."updatedAt", u.name from projects as p
      left join users as u on p.user_id = u.id where p.user_id = ${req.session.userId}
      order by p.id desc`;
      let obj = await sequelize.query(query, { type: QueryTypes.SELECT });
      let parseData = obj.map((res) => ({
        ...res,
        userName: req.session.user,
        isLogin: req.session.isLogin,
      }));
      res.render("index", {
        data: parseData,
        isLogin: req.session.isLogin,
        user: req.session.user,
      });
    }
  } catch (error) {
    console.error(error, ">>>>> Error pada select");
  }
};

module.exports = { Index };
