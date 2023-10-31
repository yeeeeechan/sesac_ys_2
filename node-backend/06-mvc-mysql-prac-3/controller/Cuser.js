const User = require("../model/User");

exports.index = (req, res) => {
  res.render("index");
};

exports.signup = (req, res) => {
  res.render("signup");
};
exports.post_signup = (req, res) => {
  User.post_signup(req.body, function () {
    res.send({ result: true });
  });
};

exports.signin = (req, res) => {
  res.render("signin");
};
exports.post_signin = (req, res) => {
  User.post_signin(req.body, function (rows) {
    console.log(rows[0]);
    if (rows.length > 0) res.send({ result: true, id: rows[0].id });
    else res.send({ result: false });
  });
};

exports.profile = (req, res) => {
  // req.body {id (number)}
  // id에 해당하는 user를 select
  User.get_user(req.body.id, function (result) {
    console.log("profile", result);
    if (result.length > 0) res.render("profile", { data: result[0] });
    else res.redirect("/user/signin");
  });
};

exports.profile_edit = (req, res) => {
  // model에 연결해서 데이터를 update
  const data = {
    ...req.body,
    id: req.params.id,
  };
  User.update_profile(data, function () {
    // 회원 정보 수정 성공하면 boolean 값으로 응답 보내기
    res.send({ result: true });
  });
};

exports.profile_delete = (req, res) => {
  User.delete_user(req.params.id, function () {
    // 회원 정보 삭제 성공하면 boolean 값으로 응답 보내기
    res.send({ result: true });
  });
};
