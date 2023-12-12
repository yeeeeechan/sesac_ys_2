// 변수를 선언할 때 변수의 타입도 함께 정의함
let str: string = "hello";

let num: number;
num = 5;

let undif: undefined;
let nu: null = null;

console.log(nu);

let arr: number[]; // arr는 숫자로 이루어진 배열임
arr = [1, 2, 3, 4, 5];

// 문자로 이루어진 배열을 선언하는 방법 2가지
let strArr1: string[] = ["ab", "cde"];
let strArr2: Array<string> = ["abc", "def"];

// number이거나 string이거나
let numStrArr1: (number | string)[] = [1, "a"];
let numStrArr2: Array<number | string> = [1, "a"];

let abc: number | string = "qwer";
abc = 1234;

// 어떤 값이든 들어갈 수 있는 배열
// 단, typescript에서 any를 사용하는 것은 지양해야 함
let anyArr: any[] = [1, 2, "ㅇㅇㅇ", null, undefined, {}];

// 객체 type은 객체 안에 들어갈 key값을 지정해 둘 수 있음 -> interface, type: 커스터마이징한 type
let odj: object = { key: "value" };

// Tuple : 요소의 길이, 순서와 자료형이 고정되어 있는 배열
let drink1: [string, number] = ["cola", 1000];
console.log(drink1[0]);

drink1[0] = "cider";
console.log(drink1[0]);

// drink1[2] = "길이가 고정되어 있으므로 넣을 수 없음!"

drink1.push("hihihi"); // 그러나 push 메소드를 이용하면 오류를 잡지 않음 > 튜플의 한계
console.log(drink1);
// console.log(drink1[2]); // push로 값이 들어갔지만, 이렇게는 접근 불가임

// 읽기만 가능한 튜플(수정 불가)
let drink2: readonly [string, number] = ["cola", 1000];

// Enum 열거형 데이터
// 문자나 숫자에 미리 의미를 지정해두고 사용할 때
enum Weather {
  sun = 0,
  rain = 1,
  cloud = 2,
}

// 열거형이므로, 숫자를 기입하지 않아도 차례로 0, 1, 2로 설정됨
// enum Weather {
//   sun,
//   rain,
//   cloud,
// }

console.log(Weather.sun);
const weather = 0;

if (weather == Weather.sun) {
  console.log("날씨 좋음");
}

let a: Weather = 2;
// let a: Weather = 3 // 이건 오류 뜸
console.log(a);

// 실습
let olimpic_newgame: readonly [object, boolean];

olimpic_newgame = [
  {
    name: "쇼트트랙",
    type: "혼성 계주",
  },
  true,
];

console.log(olimpic_newgame);

// interface
interface Mystyle {
  id: number;
  content: string;
  completed: boolean;
}

let todoList: Mystyle;
todoList = { id: 1, content: "와아아아", completed: true };
console.log(todoList);
