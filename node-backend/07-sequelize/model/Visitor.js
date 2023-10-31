// table의 구조를 정의하는 파일
// orm은 객체와 db의 table을(db를) 매핑하는 기술을 의미
// sequelize를 이용해서 table의 구조를 정의할 필요가 있음

function Visitor(Sequelize, DataTypes) {
  // Sequelize 객체의 define 메소드를 이용해서 모델(table)을 정의
  return Sequelize.define(
    "visitor", // 첫 번째 인자로는 테이블 이름
    {
      id: {
        // int NOT NULL AUTO_INCREMENT PRIMARY KEY
        // 각각의 키값에 들어가는 내용은 model/index.js에서 가져온 Sequelize에 들어있는 값들임
        type: DataTypes.INTEGER,
        allowNull: false, // true가 기본값
        primaryKey: true, // false가 기본값
        autoIncrement: true, // false가 기본값
      }, // key값은 실제 컬럼 이름
      username: {
        type: DataTypes.STRING(10),
      },
      comment: {
        type: DataTypes.TEXT("medium"),
      },
    }, // 컬럼 정의(이 table에 어떤 컬럼이 들어가는지)
    {
      tableName: "visitor",
      freezeTableName: true,
      // sequelize에서 간혹 sql문을 날릴 때 table 이름을 복수형(visitors)로 변경하는 경우가 있음
      // 이후로는 직접 insert을 쓰지 않고 create()를 사용할 것인데, 이때 복수형으로 바꾸는 경우가 있어서 이를 방지하기 위함
      timestamps: false,
      // insert, update 시 그 시간을 자동으로 저장하는 옵션(기본값이 true)
      // creatAt, updateAt이라는 (사전에 만들어두지 않은) 컬럼에 자동으로 저장하려고 하기 때문에 오류가 발생함
    } // 추가적인 옵션 설정
  );
}

module.exports = Visitor;
