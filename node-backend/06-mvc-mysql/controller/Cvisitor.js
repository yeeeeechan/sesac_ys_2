const Visitor = require("../model/Visitor");

exports.home = (req, res) => {
  res.render("index");
};

// Visitor에서 sql문을 실행시킨 후 render할 때 데이터(rows)를 보내기 위해 cb를 인자로 넘김
exports.visitor = (req, res) => {
  Visitor.getVisitors((rows) => {
    res.render("visitor", { data: rows });
  });
  //   const data = Visitor.getVisitors();
  //   res.render("visitor", { data: data });
};

// post 요청, /visitor => 방명록 insert
exports.postVisitor = (req, res) => {
  // insert할 데이터
  console.log("req.body", req.body);
  Visitor.insertVisitor(req.body, (id) => {
    console.log("ctrl postVisitor", id);
    res.send({
      ...req.body,
      id,
    });
  });
};

// DELETE /visitor/:id => 방명록 삭제
exports.deleteVisitor = (req, res) => {
  console.log(req.params);

  // 콜백 함수 result 인자는 flag
  Visitor.delVisitor(req.params.id, (result) => {
    res.send({ result: result });
  });
};
