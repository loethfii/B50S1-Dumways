const ContactMe = (req, res) => {
  res.render("contact-me", {
    isLogin: req.session.isLogin,
    user: req.session.user,
  });
};

module.exports = { ContactMe };
