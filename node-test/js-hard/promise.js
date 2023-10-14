// 비동기 처리: promise (기본 예시)
function promise1(flag) {
  return new Promise(function (resolve, reject) {
    // if문에서 boolean값을 받음
    if (flag) {
      resolve(`fulfilled! then으로 연결`); // resolve의 매개변수엔 then의 결괏값으로 받아올 값을 넣는다.
    } else {
      reject(`rejected! catch로 연결`);
    }
  });
}

// 특정 함수가 return하는 값이 promise 객체일 경우, 메소드 체이닝으로 then, catch라는 메소드를 사용할 수 있다.
promise1(true)
  .then((result) => {
    // result에는 resolve로 보낸 인자 값이 들어오게 된다.
    // 여기서는 `fulfilled! then으로 연결` 문자열
    // then이 없고 바로 catch만 올 수도 있음
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

// ---------------------콜백 지옥 예시--------------------
function add(n1, n2, cb) {
  setTimeout(function () {
    let result = n1 + n2;
    cb(result);
  }, 1000);
}

function mul(n, cb) {
  setTimeout(function () {
    let result = n * 2;
    cb(result);
  }, 700);
}

function sub(n, cb) {
  setTimeout(function () {
    let result = n - 1;
    cb(result);
  }, 500);
}

add(4, 3, function (x) {
  console.log("1: ", x);
  mul(x, function (y) {
    console.log("2: ", y);
    sub(y, function (z) {
      console.log("3: ", z);
    });
  });
});

/// ---------------------promise로 변경--------------------
// function add(n1, n2) {
//   return new Promise((resolve) => {
//     setTimeout(function () {
//       let result = n1 + n2;
//       resolve(result);
//     }, 1000);
//   });
// }

// function mul(n) {
//   return new Promise((resolve) => {
//     setTimeout(function () {
//       let result = n * 2;
//       resolve(result);
//     }, 700);
//   });
// }

// function sub(n) {
//   return new Promise((resolve) => {
//     setTimeout(function () {
//       let result = n - 1;
//       resolve(result);
//     }, 500);
//   });
// }

// add(4, 3)
//   .then((result) => {
//     console.log("1: ", result);
//     return mul(result);
//   }) // 함수 내부에서 return하는 객체가 promise 객체일 경우, then을 이어서 사용할 수 있다.
//   .then((result) => {
//     console.log("2: ", result);
//     return sub(result);
//   })
//   .then((result) => {
//     console.log("3: ", result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// -----------------(Promise) async / await과 함께 사용------------------
async function add(n1, n2) {
  return new Promise((resolve) => {
    setTimeout(function () {
      let result = n1 + n2;
      resolve(result);
    }, 1000);
  });
}

async function mul(n) {
  return new Promise((resolve) => {
    setTimeout(function () {
      let result = n * 2;
      resolve(result);
    }, 700);
  });
}

async function sub(n) {
  return new Promise((resolve) => {
    setTimeout(function () {
      let result = n - 1;
      resolve(result);
    }, 500);
  });
}

// add(4, 3)
//   .then((result) => {
//     console.log("1: ", result);
//     return mul(result);
//   }) // 함수 내부에서 return하는 객체가 promise 객체일 경우, then을 이어서 사용할 수 있다.
//   .then((result) => {
//     console.log("2: ", result);
//     return sub(result);
//   })
//   .then((result) => {
//     console.log("3: ", result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// 1. async를 붙이면 Promise 객체를 return 한다. (없다고 반환 못 하는 건 아님)
// 2. await 키워드는 async 함수 내부에서만 사용이 가능하다.
async function exec() {
  const x = await add(4, 3); // x = 7, await을 사용하면 이 함수가 실행될 때까지 뒤에 이어지는 함수를 실행하지 않는다.
  console.log("1: ", x);
  const y = await mul(x); // y = 14
  console.log("2: ", y);
  const z = await sub(y); // z = 13
  console.log("3: ", z);
}

exec();

function test() {}

// async function test() {
//   console.log("test");
//   // async를 붙이면 Promise 객체를 return 한다. (없다고 반환 못 하는 건 아님)
// }
// console.log(test());
