const { loginInfo } = require("../model/loginInfo");

exports.main = (req, res) => {
  res.render("index");
};

exports.loginresult = (req, res) => {
  const infoId = loginInfo([0]);
  const infoPw = loginInfo([1]);

  console.log("infoId", infoId);
  console.log("infoPw", infoPw);

  function judge() {
    return req.body.id == infoId && req.body.pw == infoPw ? true : false;
  }

  const result = judge();
  res.send(result);
  console.log(result);
};
