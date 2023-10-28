const User = require("../model/users");

exports.home = (req, res) => {
  res.render("index");
};

exports.join = (req, res) => {
  console.log("req.body 확인1", req.body);
  User.joinUser(req.body, () => {
    res.send({
      ...req.body,
    });
  });
};

exports.login = (req, res) => {
  console.log("req.body 확인2", req.body);
  User.loginUser(req.body, () => {
    res.send({
      id,
      pw,
    });
  });
};
