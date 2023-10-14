// 배열 구조 분해 할당
const fruits = ["apple", "banana", "kiwi"];

// 각 배열 요소값을 할당하고 싶은 변수를 선언 (순서대로)
// 새로 변수를 선언하고 값을 할당하고 싶다면 strawberry처럼
const [apple, banana, kiwi, strawberry = "strawberry"] = fruits;
console.log(kiwi, strawberry);

// 사실상 아래 코드와 동일한 작업
// const apple = fruits[0]
// const banana = fruits[1]
// const kiwi = fruits[2]

// 객체 구조 분해 할당
const obj = {
  name: "lily",
  gender: "women",
  age: "99",
};

let x = 1,
  y = 3;
[x, y] = [y, x]; // x에 y를 넣고, y에 x를 넣겠다. (값을 맞바꿀 때 배열 구조 분해 할당을 이용하면 간단하다.)
console.log(x, y);

// const { age, name, test = "test" } = obj;
// console.log(age, test);

// 아래 코드와 동일한 작업
// const age = obj.age;
// const name = obj.name;

const { age, name: name2 } = obj;
// 구조 분해 할당 중에 key 이름 바꾸는 방법
// (원래 변수명: 바꿀 변수명 > 새로운 변수에 할당하는 것이기 때문에 객체 자체의 key값이 바뀌는 것은 아님!)
console.log(age, name2);
console.log("obj: ", obj);
console.log(obj.name);

const arr1 = [1, 2, 3, 4, 5];
const arr2 = ["a", "b", "c", "d", "e"];

// 두 배열을 효율적으로 합치려면 아래와 같이 spread 연산자 사용
// spread 연산자는 ...[1, 2, 3, 4, 5] => 1, 2, 3, 4, 5 로 바꾼다. (배열을 해제)
const arr3 = [...arr1, ...arr2];
console.log(arr3);

const hello = [..."hello"];
console.log(hello);

const word1 = "abc";
const word2 = "xyz";

const arr = [...word1, ...word2];
console.log(arr);

const obj2 = {
  name: "lily",
  gender: "women",
  age: "99",
};

const obj3 = {
  ...obj2,
  test: "true",
};

console.log(obj3);

const values = [10, 20, 30, 40, 50];

function get(a, b, c, ...rest) {
  console.log("a :", a);
  console.log("rest :", rest); // 앞에 할당하고 남은 값들이 배열로 묶여서 들어오게 된다.
}

get(...values);
