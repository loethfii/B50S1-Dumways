const Testimonial = (req, res) => {
  res.render("testimonials", {
    isLogin: req.session.isLogin,
    user: req.session.user,
  });
};

module.exports = { Testimonial };
