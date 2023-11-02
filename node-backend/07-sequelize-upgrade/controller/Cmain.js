const { Customer, Orders, Sequelize } = require("../model");
const Op = Sequelize.Op; // operator 사용

exports.main = async (req, res) => {
  // user의 주문 목록을 "custname"과 함께 확인
  const cust1 = await Customer.findAll({
    attributes: ["custid", "custname", "birth"],
    where: { birth: { [Op.gte]: "2000-01-01" } }, //2000-01-01 이상
    include: [
      {
        model: Orders,
        // orders에선 "custid"를 제외하고 조회
        attributes: { exclude: ["custid"] },
      },
    ], // join하고 싶은 table, table이 여러 개인 경우엔 배열로
    raw: true, // 조회하는 옵션
  });

  res.send(cust1);
};
