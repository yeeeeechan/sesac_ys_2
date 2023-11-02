const Sequelize = require("sequelize");

const config = require("../config/config.json")["development"];

const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Customer = require("./customer")(sequelize, Sequelize);
db.Orders = require("./orders")(sequelize, Sequelize);

// 두 테이블 간의 관계는 index.js에서 맺는다.
// 참조하고 있는 테이블의 컬럼명이 다른 경우엔 targetKey: "id"까지 써 주어야 함.
db.Customer.hasMany(db.Orders, {
  foreignKey: "custid",
  // onDelete: "cascade",
  // sourceKey: "custid"
});
db.Orders.belongsTo(db.Customer, {
  foreignKey: "custid",
  // onDelete: "cascade",
  // targetKey: "custid"
});

module.exports = db;

// 다 대 다 관계에서는 중계 테이블이 생김(모델이 총 세 개) / hasMany-belongsTo로 걸어도 상관없음
