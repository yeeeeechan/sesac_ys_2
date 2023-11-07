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

    // 로그인 성공한 시점에 세션에 id값 저장
    req.session.id = result.id;
    console.log(result.id);
    res.send({ result: true, id: result.id });
  });
};

exports.user_page = (req, res) => {
  // console.log("user 페이지로 넘어오며 요청된 req.body 값", req.body.id_hidden);
  // const pk = req.body.id_hidden;
  const pk = req.session.id;
  User.findOne({
    where: {
      id: pk,
    },
  }).then((result) => {
    res.render("user", { data: result });
    console.log("user_page result: ", result);
  });
};

exports.edit = (req, res) => {
  console.log("req data 확인!", req.params);
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

  User.destroy({
    where: { id: id },
  }).then((result) => {
    console.log("삭제 결과", result);
    res.send({ result: true });
  });
};
