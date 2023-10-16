import { dataProject } from "../mocks/project.js";

export const Index = (req, res) => {
  res.render("index", { data: dataProject });
};
