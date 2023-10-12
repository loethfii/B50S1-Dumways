const Index = (req, res) => {
  res.render("index");
};

function addNewProject(req, res) {
  const { project_name, start_date, end_date, description } = req.body;
  console.log("Nama project : ", project_name);
  console.log("Start Date : ", start_date);
  console.log("End Date : ", end_date);
  console.log("Description : ", description);
}

const AddProject = (req, res) => {
  res.render("add-project");
};

const ContactMe = (req, res) => {
  res.render("contact-me");
};

const Testimonials = (req, res) => {
  res.render("add-project");
};

export { Index, AddProject, ContactMe, Testimonials, addNewProject };
