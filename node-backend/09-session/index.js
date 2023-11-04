const express = require("express");
const app = express();
const PORT = 8000;
const session = require("express-session");

// 브라우저가 종료되기 전까지 저장되어 있음(단, cookie로 시간 옵션 설정 가능)
// 세션은 서버에 저장되기 때문에, 서버를 재시작하면 날아감
app.use(
  session({
    secret: "secret key",
    resave: false, // 모든 요청마다 session을 다시 저장할 것인지
    saveUninitialized: true, // 클라이언트가 처음 접속했을 때 기본적으로 session을 초기화할 것인지
    cookie: {
      httpOnly: true, // document.cookie로는 접속 X
      maxAge: 30 * 1000,
    },
    // secure: true // https에서만 동작하도록 함
  })
);

app.get("/", (req, res) => {
  res.render("index", { user: req.session.user });
});

// 클라이언트별로 저장 공간이 다름(req)
app.get("/set", (req, res) => {
  console.log("1 : ", req.session);
  // 로그인 성공한 시점에 req.session.user에 user를 식별할 수 있는 고유한 값을 저장
  req.session.user = "lily"; // 세션 생성. 세션에 저장할 정보 기입, 객체 형태로도 저장 가능
  console.log("2 : ", req.session);
  res.send("set session");
});

// 세션 삭제하기
app.get("/", (req, res) => {
  req.session.destroy(() => {
    if (err) throw err;

    res.send("로그아웃 성공");
  });
});

// value 값이 undefined면 해당 키가 아예 뜨지 않음
// if문으로 로그인 여부를 검사
app.get("/get", (req, res) => {
  if (req.session.user) {
    res.render("profile", {});
  } else {
    res.redirect("/login");
  }
  console.log("req.session.user", req.session.user);
  res.send({ user: req.session.user });
});

app.listen(PORT, () => {
  console.log("Server Port : ", PORT);
});
