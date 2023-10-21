const { render } = require("ejs");
const express = require("express");
const multer = require("multer"); // multer 불러오기
const path = require("path");
// path는 파일 경로를 받았을 때 그 조작을 도와준다.
// ex) 확장자 추출, 파일 이름 추출 등
console.log("hi.txt의 확장자", path.extname("hi.txt"));
console.log("hi.txt의 이름", path.basename("hi.txt", path.extname("hi.txt")));

const app = express();
const PORT = 8888;

// 클라이언트가 uploads 폴더에 저장한 이미지 파일에 접근할 수 있도록 미들웨어 작성
app.use("/uploads", express.static(__dirname + "/uploads"));

// upload라는 객체 안에는 미들웨어 함수가 존재. single(), array()...
// 미들웨어 : 클라이언트의 요청과 서버 응답 사이에 존재.
// 아래와 같이 별도로 설정해 주지 않으면, multer가 임의의 문자열을 생성해 그 문자열을 파일 이름으로 지정함 + 확장자도 붙여주지 않음
const upload = multer({
  dest: "uploads/",
});

// multer 세부 설정하기
const uploadDetail = multer({
  storage: multer.diskStorage({
    destination: function (req, file, done) {
      done(null, "uploads/"); // done 콜백 함수로 경로 지정
    },
    filename: function (req, file, done) {
      console.log("uploadDetail filename", req.body);
      console.log(file); // file.originalname : cat.jpg
      const ext = path.extname(file.originalname); // .jpg
      const baseName = path.basename(file.originalname, ext); // cat
      // 설정하려는 이름 : cat_중복되지 않는 숫자(date를 이용).jpg

      const fileName = baseName + "_" + Date.now() + ext;

      done(null, fileName);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB 제한
});
// uploads/cat_1231321.jpg 의 형태로 저장될 것이다.

// multer의 기본 구조!
// storage : 파일을 저장할 정보
// -- distStorage : 파일을 디스크에 저장하기 위한 기능을 제공하는 메소드
// ----- destination : 파일이 저장될 경로
// ----- filename : 파일이 저장될 이름

// limits
// -- fileSize : 파일의 최대 크기

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function (req, res) {
  res.render("index");
});

// 요청과 응답 사이에 미들웨어 넣음
// single() : 파일 하나만 업로드할 때 사용. ()안에 들어가는 인자는 file input의 name값
// 클라이언트가 보내 온 요청 중 userfile이라는 name의 파일 데이터가 있다면,
// 파일을 multer의 설정대로 저장해 req.file or req.files 라는 객체를 생성해서 다음 함수에 넘겨줌.
app.post("/upload", upload.single("userfile"), function (req, res) {
  console.log("file : ", req.file);
  console.log("body: ", req.body);

  res.send("파일 업로드 1");
});

app.post(
  "/upload/detail",
  uploadDetail.single("userfile"),
  function (req, res) {
    console.log("file detail : ", req.file);
    console.log("body detail : ", req.body);

    // result.ejs 파일에 src, title 보내기
    res.render("result", {
      src: req.file.path,
      title: req.body.title,
    });
    // res.send("파일 업로드 2");
  }
);

// array(): 파일 여러 개 업로드 (name(input) 하나로 여러 개의 파일을 받는 방법)
// req.files 생성
app.post("/upload/array", uploadDetail.array("userfile"), function (req, res) {
  console.log("file 여러 개(ver1) : ", req.files);
  res.send("여러 파일 업로드 성공");
});

// fields() : 파일 여러 개 업로드. name이 2개 이상(=input이 2개 이상)
// req.files 생성
app.post(
  "/upload/fields",
  uploadDetail.fields([{ name: "userfile1" }, { name: "userfile2" }]),
  function (req, res) {
    console.log("file 여러 개(ver2) : ", req.files);
    console.log("body: ", req.body);

    res.send("여러 파일 업로드 성공(ver2)");
  }
);

// 동적 폼 전송
app.post(
  "/upload/dynamic",
  uploadDetail.single("userfile"),
  function (req, res) {
    res.send({
      src: req.file.path,
    });
  }
);

app.listen(PORT, function () {
  console.log(`Sever Open : ${PORT}`);
});
