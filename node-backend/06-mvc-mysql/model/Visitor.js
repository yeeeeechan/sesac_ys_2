const mysql = require("mysql");

// createConnection: mysql 연결 정보를 받아서 mysql과 연결
// db 연결하기 위해서는 > host(mysql이 설치되어 있는 ip), user, password, database 이름
const conn = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "12345dpcks!",
  database: "db_test",
}); // 이 객체로 query를 날릴 수 있다.

// exports.getVisitors = () => {
//   return [
//     {
//       id: 1,
//       username: "홍길동",
//       comment: "내가 왔다.",
//     },
//     {
//       id: 2,
//       username: "이찬혁",
//       comment: "으라차차",
//     },
//   ];
// };

// sql문이 render되고 난 뒤에 페이지를 로드하려면 콜백 함수(sql 모듈은 프로미스 기반이 아니기 때문)
// query라는 함수는 sql문을 날리고, 다음에 도는 콜백 함수로 에러 처리 가능
// rows(매개변수)에는 앞선 sql문을 실행한 결과가 담김
exports.getVisitors = (cb) => {
  conn.query(`SELECT * FROM visitor`, (err, rows) => {
    // err 변수가 빈 값이 아니라면(if문이 True가 되면), err가 발생했다는 것
    if (err) {
      throw err;
    }
    console.log("visitor", rows);
    cb(rows);
  });
};

// 콜백 함수 전에 req.body 데이터를 받는다. (data 매개변수)
exports.insertVisitor = (data, cb) => {
  // insert into visitor (username, comment) values (???, ???)
  const sql = `insert into visitor (username, comment) values ('${data.username}', '${data.comment}')`;

  conn.query(sql, (err, result) => {
    if (err) {
      throw err;
    }

    console.log("visitor insert", result);
    cb(result.insertId);
  });
};

// 삭제할 id를 받아온다.
exports.delVisitor = (id, cb) => {
  const sql = `delete from visitor where id = ${id}`;
  conn.query(sql, (err, result) => {
    if (err) {
      throw err;
    }

    // (선택) 삭제 성공 여부를 판별
    let flag = false;
    console.log("result.affectedRows", result.affectedRows);
    if (result.affectedRows) {
      flag = true;
    }
  });
  console.log("visitor delete", result);
  cb(result);
};
