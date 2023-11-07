const express = require("express");
const app = express();
const port = 8888;
const cookieParser = require("cookie-parser");
const session = require("express-session");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use(
  session({
    secret: "userid",
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    },
  })
);

const router = require("./routes");
app.use("/", router);

// const cookieConfig = {
//   maxAge: 24 * 60 * 60 * 1000,
//   secure: true,
// };

app.get("*", (req, res) => {
  res.send("접근할 수 없는 주소입니다.");
});

app.listen(port, () => {
  console.log("Server Port : ", port);
});
