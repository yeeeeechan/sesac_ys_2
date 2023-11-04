const express = require("express");
const app = express();
const PORT = 8888;
const session = require("express-session");

app.set("view engine", "ejs");

app.use(
  session({
    secret: "secret key",
    resave: false,
    saveUninitialized: true,
  })
);

// 프론트에선 랜더하며 보낸 객체 값을 사용(user)
app.get("/", (req, res) => {
  res.render("index", { user: req.session.user });
});

app.get("/login", (req, res) => {
  req.session.user = "유저";
  console.log("req.session", req.session);
  res.send("성공");
});

// 따로 보내는 게 아님..!! + 서버에선 항상 응답을 보내야 함
// app.get("/get", (req, res) => {
//   console.log("req.session.user", req.session.user);
//   if (req.session.user) {
//     res.render("/", { user: req.session.user });
//   } else {
//     res.redirect("/");
//   }
// });

app.listen(PORT, () => {
  console.log("Server Port : ", PORT);
});
