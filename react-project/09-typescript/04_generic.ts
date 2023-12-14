// Generic
// 기본적으로 선언할 때 type 지정을 해 주는데,
// 사용하다 보면 다양한 타입에 대해서 처리를 해줘야 할 수 있음
// 호출하거나 사용할 때 타입을 넘겨서 해당 타입으로 지정할 수 있는 방법

function printXY(x: number, y: number):void
function printXY(x: string, y: string):void

function printXY(x: number | string, y: number | string) {
  console.log(x,y)
}
printXY(1, 2)
printXY("a", "b") // 오버로딩으로 처리하면 둘 다 문자 또는 둘 다 숫자 가능
// printXY("a", 2) // or로 처리하면 가능

function printXYByGeneric<T>(x: T, y: T) {
  console.log(x,y)
}
printXYByGeneric<string>("a", "b")
printXYByGeneric<number>(1, 2)

function numArrLength(arr: number[]): number {
  return arr.length
}

function strArrLength(arr: string[]): number {
  return arr.length
}

// 만약, 객체 배열, 이외 다른 타입의 배열도 length를 구하는 함수를 만들고 싶다면?
function arrLength<T>(arr: T[]):  number {
  return arr.length
}

arrLength<string>(["a", "b", "B"])

function exampleGenric<T, U> (x: T, y: U) {
  console.log(x, y)
}

exampleGenric<number, string>(100, "qwer")

let aa: string[]
let bb: Array<string>

// interface에서 generic 활용
interface Phone<T> {
  company: string,
  model: string,
  option: T
}

interface SamsungOption {
  a: string,
  b: number
}

const samsung23: Phone<SamsungOption> = {
  company: "samsung",
  model: "samsung S23",
  option: {
    a: "문자",
    b: 123123
  }
}

interface IphoneOption {
  a: string,
  c: number
}

const iphone15: Phone<IphoneOption> = {
  company: "apple",
  model: "iphone15",
  option: {
    a: "문자문자",
    c: 456456
  }
}

// 실습1
function arrElement1<T>(arr: T[], index: number) {
  return arr[index]
}
console.log(arrElement1<string>(["a"], 0));

// 실습2
function arrElement2<T>(arr: T[], index: number) {
  if (arr.length > index) return false
  return arr[index]
}
console.log(arrElement2<string>(["a"], 0));
