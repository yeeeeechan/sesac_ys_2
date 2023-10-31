const mysql = require("mysql");
const cnn = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "12345dpcks!",
  database: "prac_db",
});

exports.post_signup = (data, cb) => {
  const sql = `INSERT INTO user(userid, name, pw) VALUES('${data.userid}','${data.name}','${data.pw}');`;
  cnn.query(sql, function (err) {
    if (err) throw err;
    cb();
  });
};

exports.post_signin = (data, cb) => {
  const sql = `SELECT * FROM user WHERE userid='${data.userid}' and pw='${data.pw}' limit 1;`;
  cnn.query(sql, function (err, rows) {
    if (err) throw err;
    cb(rows);
  });
};

// controller에서 받아온 id(pk)를 통해 user를 조회
exports.get_user = (id, cb) => {
  const sql = `SELECT * FROM user WHERE id='${id}' limit 1;`;
  cnn.query(sql, function (err, rows) {
    if (err) throw err;
    cb(rows);
  });
};

exports.update_profile = (data, cb) => {
  const sql = `UPDATE user SET name='${data.name}', userid = '${data.userid}', pw='${data.pw}' WHERE id='${data.id}'`;
  cnn.query(sql, (err, result) => {
    if (err) throw err;
    cb();
  });
};

exports.delete_user = (id, cb) => {
  cnn.query(`DELETE FROM user WHERE id='${id}'`, (err) => {
    if (err) throw err;
    cb();
  });
};
