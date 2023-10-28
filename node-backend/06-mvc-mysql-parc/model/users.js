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
  const sql = `select (userid, pw) from user where userid like '${data.id}' and pw like '${data.pw}'`;
  conn.query(sql, (err, result) => {
    if (err) {
      throw err;
    }

    let selectResult = false;
    if (result) {
      selectResult = true;
    }
    //boolean 값을 반환
  });
  cb(result);
};
