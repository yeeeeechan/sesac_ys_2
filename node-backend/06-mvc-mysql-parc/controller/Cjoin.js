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

// 모델과 연결해서 실제로 회원이 존재하는지 검색
exports.login = (req, res) => {
  console.log("req.body 확인2", req.body);
  User.loginUser(req.body, (result) => {
    res.send({
      success: result,
    });
  });
};
