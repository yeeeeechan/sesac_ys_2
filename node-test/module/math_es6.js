const add = (a, b) => a+b;
const minus = (a, b) => a-b;
const pi = 3.14;


// 1) 하나만 내보낼 경우
// module.exports = add //common js 문법
// export default add //es6 문법

// 2) 여러 개 내보낼 경우
//  module.exports = {
//     add,
//     minus
// } // common js 문법

export default pi;
export { add, minus };