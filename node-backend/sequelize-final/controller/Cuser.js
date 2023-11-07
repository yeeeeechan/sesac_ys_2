const { User } = require("../model");

exports.main = (req, res) => {
  res.render("main");
};

exports.join = (req, res) => {
  res.render("join");
};

exports.joinUser = (req, res) => {
  const data = {
    userid: req.body.id,
    name: req.body.name,
    pw: req.body.pw,
  };

  User.create(data)
    .then((result) => {
      console.log("create result: ", result);
      res.send(result);
    })
    .catch((err) => {
      console.log("err 발생:", err);
      res.status(400).send("오류 발생");
    });
};

exports.login = (req, res) => {
  User.findOne({
    where: {
      userid: req.body.userid,
      pw: req.body.pw,
    },
  }).then((result) => {
    console.log("findOne result: ", result);
    res.send(result);
  });
};

exports.user_page = (req, res) => {
  console.log("user 페이지로 넘어오며 요청된 req.body 값", req.body);

  User.findOne({
    where: { id: req.body },
  }).then((result) => {
    console.log("id 값", result);
    if (result) res.render("user", { data: result });
    else res.redirect("main");
  });
  //  왜 if else문에 대괄호를 빼야 서버가 정상 작동하는지?
};

exports.edit = (req, res) => {
  console.log("req data 확인!", req.body);
  const id = req.params.id;

  const data = {
    userid: req.body.userid,
    name: req.body.name,
    pw: req.body.pw,
  };
  User.update(data, {
    where: { id: id },
  }).then((result) => {
    console.log("업데이트 결과", result);
    res.send({ result: true });
  });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  User.destroy(data, {
    where: { id: id },
  }).then((result) => {
    console.log("삭제 결과", result);
    res.send({ result: true });
  });
};
