// function call(name, cb) {
//   setTimeout(function () {
//     console.log(name);
//     cb(name);
//   }, 1000);
// }

// function back(cb) {
//   setTimeout(function () {
//     console.log("back");
//     cb("back");
//   }, 1000);
// }

// function hell(cb) {
//   setTimeout(function () {
//     cb("callback hell");
//   }, 1000);
// }

// call("kim", function (name) {
//   console.log(name + "반가워");
//   back(function (txt) {
//     console.log(txt + "을 실행했구나");
//     hell(function (message) {
//       console.log("여기는" + message);
//     });
//   });
// });

// -------------------promise--------------------

function call(name) {
  return new Promise(function (resolve) {
    //resolve를 쓰지 않으면 promise문은 영원히 pending
    setTimeout(function () {
      console.log(name);
      resolve(name); //then((res) => {})과 같음
    });
  }, 1000);
}

function back() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log("back");
      resolve("back");
    });
  }, 1000);
}

function hell() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve("callback hell"); // promise의 자체 함수, 이 코드가 다 실행되고 나서 "callback hell"을 보내면서 함수가 다 실행됐다는 것을 알림
    });
  }, 1000);
}

call("kim")
  .then(function (res) {
    console.log(res, "반가워");
    return back(); // then 안에서 promise 객체를 반환
  })
  .then(function (res) {
    console.log(res, "을 실행했구나");
    return hell();
  })
  .then(function (res) {
    console.log("여기는", res);
  });

// -------------------async / await--------------------
async function exec() {
  // call의 resolve 인자로 넘겨준 값이 res1에 담기게 된다. // res1 = "kim"
  const res1 = await call("kim");
  console.log(res1, "반가워");
  // res2 = "back"
  const res2 = await back();
  console.log(res2, "를 실행했구나");
  // res3 = "callback hell"
  const res3 = await hell();
  console.log("여기는", res3);
}

// ---------------------- 배경색 변경하기 ----------------------
