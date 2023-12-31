const { dataProject } = require("../mocks/project.js");
const { countMounth } = require("../helper/count-mount.js");
const config = require("../database_config/config/config.json");
const { Sequelize, QueryTypes } = require("sequelize");
const sequelize = new Sequelize(config.development);

const AddProject = (req, res) => {
  let sessionTest = {
    isLogin: req.session.isLogin,
    user: req.session.user,
  };

  if (!sessionTest.isLogin) {
    res.render("unauthorized");
  } else {
    res.render("add-project", {
      isLogin: req.session.isLogin,
      user: req.session.user,
    });
  }
};

const AddNewProject = async (req, res) => {
  try {
    let {
      project_name,
      start_date,
      end_date,
      description,
      node_js,
      next_js,
      react_js,
      typeScript,
    } = req.body;
    let duration = countMounth(start_date, end_date);

    node_js ? (node_js = `fab fa-node fa-xl`) : (node_js = null);
    next_js ? (next_js = `fab fa-vuejs fa-xl`) : (next_js = null);
    react_js ? (react_js = `fab fa-react fa-xl`) : (react_js = null);
    typeScript ? (typeScript = `fab fa-js-square fa-xl`) : (typeScript = null);

    let arrCheckbox = [node_js, next_js, react_js, typeScript];
    let dataFiltered = arrCheckbox.filter((element) => {
      return element != null;
    });

    let data = {
      project_name,
      start_date,
      end_date,
      duration,
      description,
      logo_tech: dataFiltered,
    };

    const userId = req.session.userId;
    const image = req.file.filename;

    let query = `INSERT INTO projects(img, "projectName", "startDate", "endDate", duration, description, technologies, user_id)
    VALUES ('${image}', '${data.project_name}', '${data.start_date}', '${data.end_date}' , '${data.duration}', '${data.description}', '{${dataFiltered}}', ${userId})`;
    let inserted = await sequelize.query(query);

    res.redirect("/");
  } catch (error) {
    console.error(error);
  }
};

const UpdateProject = async (req, res) => {
  try {
    let sessionTest = {
      isLogin: req.session.isLogin,
      user: req.session.user,
    };

    if (!sessionTest.isLogin) {
      res.render("notFound");
    } else {
      const { id } = req.params;

      let qCheckIdUser = `SELECT p.id, p.user_id from projects as p
      left join users as u on p.user_id = u.id 
      where p.user_id = ${req.session.userId} and p.id = ${id}
      order by p.id desc`;

      let dataCheck = await sequelize.query(qCheckIdUser, {
        type: QueryTypes.SELECT,
      });
      if (!dataCheck[0]) {
        return res.render("notFound");
      }

      let query = `SELECT * FROM public.projects WHERE id = ${id}`;
      let dataID = await sequelize.query(query, { type: QueryTypes.SELECT });
      let dateStart = dataID[0].startDate;
      let dateEnd = dataID[0].endDate;
      const newDataId = dataID.map((res) => ({
        ...res,
        newDateStart: new Date(dateStart).toISOString().split("T")[0],
        newDateENd: new Date(dateEnd).toISOString().split("T")[0],
      }));

      res.render("edit-project", {
        data: newDataId[0],
        id,
        isLogin: req.session.isLogin,
        user: req.session.user,
      });
    }
  } catch (error) {
    console.error(error);
  }
};

const UpdateNewData = async (req, res) => {
  try {
    const { id } = req.params;

    let {
      project_name,
      start_date,
      end_date,
      description,
      node_js,
      next_js,
      react_js,
      typeScript,
    } = req.body;
    let duration = countMounth(start_date, end_date);

    node_js ? (node_js = `fab fa-node fa-xl`) : (node_js = null);
    next_js ? (next_js = `fab fa-vuejs fa-xl`) : (next_js = null);
    react_js ? (react_js = `fab fa-react fa-xl`) : (react_js = null);
    typeScript ? (typeScript = `fab fa-js-square fa-xl`) : (typeScript = null);

    let arrCheckbox = [node_js, next_js, react_js, typeScript];
    let dataFiltered = arrCheckbox.filter((element) => {
      return element != null;
    });

    let newData = {
      project_name,
      start_date,
      end_date,
      duration,
      description,
      logo_tech: dataFiltered,
    };

    let updateImage = "";
    let imgQuery = `select img from projects where id = ${id}`;
    let oldImage = await sequelize.query(imgQuery, {
      type: QueryTypes.SELECT,
    });

    const newImage = req.file?.filename;

    newImage ? (updateImage = newImage) : (updateImage = oldImage[0].img);

    let query = `UPDATE public.projects SET img = '${updateImage}', "projectName" = '${newData.project_name}', "startDate" = '${newData.start_date}', "endDate" = '${newData.end_date}', duration = '${newData.duration}', description = '${newData.description}', technologies = '{${dataFiltered}}', "updatedAt" = now() where id = ${id}`;
    await sequelize.query(query, { type: QueryTypes.UPDATE });

    res.redirect("/");
  } catch (error) {
    console.error(error);
  }
};

const DeleteProject = async (req, res) => {
  try {
    let sessionTest = {
      isLogin: req.session.isLogin,
      user: req.session.user,
    };

    if (!sessionTest.isLogin) {
      res.redirect("/");
    } else {
      const { id } = req.params;

      // const query = `DELETE FROM projects WHERE id = ${id} and `;
      const query = `DELETE FROM projects WHERE id = ${id} and user_id = ${req.session.userId};`;
      await sequelize.query(query, { type: QueryTypes.DELETE });

      res.redirect("/");
    }
  } catch (error) {
    console.error(error, "<<<<<<< error Delete");
  }
};

const DetailProject = async (req, res) => {
  try {
    let { id } = req.params;
    const query = `SELECT * FROM projects WHERE id = ${id}`;
    let dataByID = await sequelize.query(query, { type: QueryTypes.SELECT });

    dataByID.forEach((dataObj) => {
      res.render("detail-project", {
        data: dataObj,
        isLogin: req.session.isLogin,
        user: req.session.user,
      });
    });
  } catch (error) {
    console.error(error, ">>>>>>>> Detail Project");
  }
};

module.exports = {
  AddProject,
  AddNewProject,
  UpdateProject,
  UpdateNewData,
  DeleteProject,
  DetailProject,
};
