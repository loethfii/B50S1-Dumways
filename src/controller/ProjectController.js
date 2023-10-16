import { dataProject } from "../mocks/project.js";
import { countMounth } from "../helper/count-mount.js";

export const AddProject = (req, res) => {
  res.render("add-project");
};

export const AddNewProject = (req, res) => {
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
    img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    project_name,
    start_date,
    end_date,
    duration,
    description,
    logo_tech: dataFiltered,
  };
  dataProject.unshift(data);
  res.redirect("/");
};

export const UpdateProject = (req, res) => {
  const { id } = req.params;
  let updateById = dataProject[id];

  if (updateById == undefined) {
    res.send(`<h1>404 Not Found <a href="/">GO HOME</a></h1>`);
    return;
  }

  res.render("edit-project", { data: updateById, id });
};

export const UpdateNewData = (req, res) => {
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
    img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    project_name,
    start_date,
    end_date,
    duration,
    description,
    logo_tech: dataFiltered,
  };

  dataProject[id] = {
    img: newData.img,
    project_name: newData.project_name,
    start_date: newData.start_date,
    end_date: newData.end_date,
    duration: newData.duration,
    description: newData.description,
    logo_tech: newData.logo_tech,
  };

  res.redirect("/");
};

export const DeleteProject = (req, res) => {
  const { id } = req.params;
  dataProject.splice(id, 1);
  res.redirect("/");
};

export const DetailProject = (req, res) => {
  let { id } = req.params;
  let detailData = dataProject[id];

  if (detailData == undefined) {
    res.send(`<h1>404 Not Found <a href="/">GO HOME</a></h1>`);
    return;
  }

  res.render("detail-project", { data: detailData });
};
