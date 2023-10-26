const User = require("../model/user");
// User = { getUser: () => {} }

exports.main = (req, res) => {
  res.render("index");
};

exports.login = (req, res) => {
  // const id = "lily";
  // const pw = "12345";
  const userData = User.getUser();
  console.log(req.body); //body에 값이 제대로 들어오는지 확인!!!
  //userData = {id: "lily", pw: "12345"}
  let data;
  if (req.body.userid == userData.id && req.body.password == userData.pw) {
    data = {
      isSuccess: true,
      msg: "로그인 성공!",
    };
  } else {
    data = {
      isSuccess: false,
      msg: "로그인 실패!",
    };
  }
  // console.log(req.body);
  res.send(data);
};

exports.join = (req, res) => {
  console.log(req.query);
  res.send(req.query);
};
