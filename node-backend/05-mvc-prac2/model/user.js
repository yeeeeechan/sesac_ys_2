// 보통 table 단위로 파일 생성

exports.getUser = () => {
  const id = "lily";
  const pw = "12345";
  return { id, pw };
};

// 선택 실습2
let users = `spreatics//12341234//코딩온
codee//4321//코디
lily//1234//릴리`;

const person = users.split("\n");
console.log(person);

const personArr = person.map((x) => {
  return x.split("//");
});
// 화살표 함수에는 return이 내재되어 있음
// 때문에 화살표 함수 내에 중괄호를 쓰면 별도로 return 해야 함

console.log(personArr);

exports.users = () => {
  return personArr;
};
