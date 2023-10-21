const { render } = require("ejs");
const express = require("express");
const multer = require("multer");
const path = require("path");

console.log(path.extname("hello.txt"));

const app = express();
const PORT = 8000;

app.use("/uploads", express.static(__dirname + "/uploads"));

const upload = multer({
  dest: "uploads/",
});

const uploadDetail = multer({
  storage: multer.diskStorage({
    destination: function (req, file, done) {
      done(null, "uploads/");
    },
    filename: function (req, file, done) {
      const ext = path.extname(file.originalname);
      const baseName = path.basename(file.originalname, ext);

      const fileName = baseName + "_" + Date.now() + ext;

      done(null, fileName);
    },
  }),
});

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function (req, res) {
  res.render("index");
});

app.post("/upload", uploadDetail.single("userfile"), function (req, res) {
  console.log(req.body);
  res.render("profile", {
    src: req.file.path,
    user: req.body,
  });
});

app.post(
  "/upload/dynamic",
  uploadDetail.single("userfile"),
  function (req, res) {
    res.send(data);
  }
);

app.listen(PORT, function () {
  console.log(`Sever Open : ${PORT}`);
});
