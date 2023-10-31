const mysql = require("mysql");

const conn = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "12345dpcks!",
  database: "prac_db",
});

exports.joinUser = (data, cb) => {
  const sql = `insert into user (userid, name, pw) values ('${data.id}', '${data.name}', '${data.pw}')`;

  conn.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    cb(result);
  });
};

exports.loginUser = (data, cb) => {
  const sql = `select userid, pw from user where userid like '${data.id}' and pw like '${data.pw}'`;
  conn.query(sql, (err, result) => {
    if (err) {
      throw err;
    }

    //conn.query 함수는 쿼리의 결과를 배열로 반환하므로, if문의 조건을 길이로 설정함
    let selectResult = false;
    if (result.length > 0) {
      selectResult = true;
    }
    cb(selectResult);
  });
};
