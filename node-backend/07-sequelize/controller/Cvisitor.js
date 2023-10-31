// model 폴더의 index.js를 불러온다.
// Visitor 객체를 구조 분해 할당해서 가져온다.
const { Visitor } = require("../model");

exports.home = (req, res) => {
  res.render("index");
};

// GET /visitors => 기존 방명록 전체 조회 후 "visitor.ejs"를 render
exports.visitor = (req, res) => {
  // findAll의 결과는 배열
  // select * from visitor 쿼리문과 같음
  Visitor.findAll().then((result) => {
    console.log("findAll result: ", result);
    console.log("0 index의 username: ", result[0].dataValues.username);
    // dataValues는 생략해도 됨
    res.render("visitor", { data: result });
  });

  //   // 일부를 조회할 땐 조회할 기준이 되는 정보를 인자로 넘긴다.
  //   Visitor.findAll({
  //     where: {username: "lily"},
  //   });
};

// POST /visitor => 방명록 insert
exports.postVisitor = async (req, res) => {
  const data = {
    username: req.body.username,
    comment: req.body.comment,
  };
  //   // create로 넘겨주는 data의 key값은 데이터베이스의 컬럼 정보
  //   Visitor.create(data).then((result) => {
  //     console.log("create의 result: ", result);
  //     res.send(result);
  //   })
  //   .catch((err)=>{
  //     console.log(err)
  //     res.status(500).send("오류 발생!")
  //   });

  // 위의 then에 들어오는 값이 createVisitor에 할당됨
  const createVisitor = await Visitor.create(data).catch((err) => {
    console.log(err);
    res.status(500).send("오류");
  });
  res.send(createVisitor);
};

// DELETE /visitor/:id => 방명록 삭제
exports.deleteVisitor = (req, res) => {
  Visitor.destroy({
    // destroy 안에 where 객체가 들어감
    where: {
      id: req.params.id,
    },
  }).then((result) => {
    console.log("destroy의 결과: ", result);
    res.send({ result: true });
  });
};

// GET /visitor/:id => 방명록 하나 조회
exports.getVisitorById = (req, res) => {
  //   select * from visitor where id = ?? limit 1;
  Visitor.findOne({
    where: {
      id: req.params.id,
    },
  }).then((result) => {
    console.log("findOne의 결과: ", result);
    res.send(result);
  });
};

// PATCH /visitor/:id => 방명록 수정
exports.patchVisitor = (req, res) => {
  const data = {
    username: req.body.username,
    comment: req.body.comment,
  };
  // update 메소드의 인자 -> 어떻게 업데이트 할지, 조건
  Visitor.update(data, {
    where: {
      id: req.body.id,
    },
  }).then((result) => {
    console.log("update의 결과: ", result);
    res.send({ result: true });
  });
};

// (추가 참고 사항)
// 데이터를 조회할 때 sequelize 안에 sql문에 해당하는 옵션이 있으므로 사용하면 됨
// (단, sequelize가 완벽하게 sql문으로 변경되지 않는 경우도 있음)
exports.getTest = (req, res) => {
  // select * from visitor where id = 3 order by username ASC
  Visitor.findAll({
    attributes: ["username"], //select하고 싶은
    // where: {
    //   id: req.params.id,
    // },
    order: [["username", "ASC"]],
  }).then((result) => {
    console.log("findOne의 결과: ", result);
    res.send(result);
  });
};
