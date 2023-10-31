const Sequelize = require("sequelize");

// config에 데이터 관련 정보를 따로 모아두고 관리
// ["development"] -> 개발의 경우 "development" 키에 해당하는 객체 정보를 사용하겠다는 의미(불러올 때 객체 형태로 불러와짐)
// 대괄호([])는 키에 접근하는 방법 중 하나
const config = require("../config/config.json")["development"];

const db = {};

// Sequelize 객체를 만든다. (model을 정의할 때 필요하기 때문)
// Sequelize 안에 인자 넣는 법은 정해져 있음(공식 문서 참고)
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;
// 할당 후 -> db = {sequelize : sequelize, Sequelize : Sequelize}

// require("./Visitor")은 곧 Visitor.js에서 exports한 Visitor() 함수를 의미
// db.Visitor에는 sequelize로 visitor table을 정의한 객체가 담긴다.
db.Visitor = require("./Visitor")(sequelize, Sequelize);

module.exports = db;
