// 파일에서 여러 개의 식별자를 객체 형태로 내보내는 경우(중괄호 써서 사용하는 것과 동일한 결과)
// module.exports.add = (a, b) => a+b;
// module.exports.minus = (a, b) => a-b;
// module.exports.pi = 3.141592;


// ------------case 2, 3-----------------
// 파일에서 여러 개의 식별자를 객체 형태로 내보내는 경우
// 모듈을 받아올 때 객체를 그대로 math라는 식별자로 받음
// 특정 식별자만 필요하다면, 객체구조분해 문법을 통해 불러온다.(index에서)

const add = (a,b) => a+b;
const minus = (a, b) => a-b;
const pi = 3.141592;

module.exports = {
    add,
    minus,
    pi
};
// 객체는 보통 key:value 형태인데 key만 있는 것은 각각 'add라는 이름(key)으로 add함수를 넘긴다.'...는 뜻


// ------------case 1-----------------
// 이건 파일에서 한 개의 식별자만 내보내는 경우. 두 개 이상을 내보내고 싶으면 중괄호를 써서 객체화
// module.exports = add;

// add와 add2는 완전히 같은 코드. 중괄호{}가 없으면 그 값을 리턴하겠다는 의미.
// const add2 = (a,b) => {
//     return a+b;
// }