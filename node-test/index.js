
// ------------case 3-----------------
const { add, minus } = require("./math");
const sum = add(2, 3);
console.log(sum)
console.log(pi) // 객체구조분해 할당으로 add와 minus만 받아왔으므로, undefined 뜸

// ------------case 2-----------------
// const math = require("./math.js");

// const sum = math.add(3, 10);
// console.log(sum);
// console.log(math.pi);

// ------------case 1-----------------
// const add1 = require("./math.js"); // require은 모듈을 불러오는 함수, 이 코드는 그렇게 불러온 결과를 add1에 담는다는 뜻

// const sum = add1(2, 3);
// console.log(sum);