// 함수 자체의 type -> 함수가 실행되어 결국 retrun되는 값(매개변수 뒤에 타입 선언, 선언 필요 없으면 안 해도 됨)
function sum(a: number, b: number): number {
  return a + b
  // return "hello" // error
}

console.log(sum(1,2))

const sum11 = (a: number, b?: number): number => {
  if (b) return a + b;
  return a
}

// void : 함수 자체의 return값이 없을 때 사용

// 오버로딩? -> 함수의 이름은 같으나 형태가 다른 함수(매개변수) > js와의 차이
// 오버로딩 함수들의 선언을 먼저 해두고, 구현은 한 번에 한다.
function hello(num: number, num2: number): number
function hello(str: string, str2: string): string

function hello(param: number | string, param2: number | string) {
  console.log(param)
  console.log(param2)
  return param
}

hello(1, 2)
hello("hello", "world")

interface Calculator {
  sum: (a: number, b: number) => number,
  sub?: () => void
}

const clac: Calculator = {
  sum: sum
}

function goingOn(): never
{
  while (true) {
  console.log("go")
  }
}

// 실습1.
function sum1(a:number, b:number) {
  console.log(a+b)
}
sum1(5, 11)

// 실습2.
function sum2(...arr: number[]) {
  let sumResult: number = 0
  for (let i: number = 0 ; i < arr.length; i++) {
    sumResult += arr[i]
  }
  return sumResult
}

console.log(sum2(1, 2, 3, 4, 10))