const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// router, controller, model, view
// 1. router 분리 (요청을 정의) -> 완료
// 2. controller 분리 (요청에 대해 데이터 처리, view render, client에 응답하는 부분)
// 3. model 분리 (DB에 접근하여 데이터를 select, insert, update, delete)

const router = require("./routes/user");
app.use("/user", router);
// localhost:8000/user/~~~

// app.get("/", function (req, res) {
//   res.render("index");
// });

app.use("/join", router);

app.listen(PORT, function () {
  console.log(`Sever Open: ${PORT}`);
});
