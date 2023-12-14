// or
type gender = 'Men' | "Women"
const lily: gender = "Women" //타입에 지정된 값이 아닌 다른 값을 넣으면 오류뜸

// [상품명, 가격]
type productInfo = [string, number]
const cola: productInfo = ["cola", 2500]

// 객체에 대한 타입을 지정할 경우
interface productInfo2 {
  productName: string,
  price: number
}

const cider: productInfo2 = {
  productName: "cider",
  price: 2500
}

interface ProductInfo3 {
  productName: string,
  price: number,
  sale?: number // 있을 수도 있고 없을 수도 있는 값(있으면 number, 없으면 undefined)
}

const beer: ProductInfo3 = { productName: "beer", price: 2500 }
console.log(beer.sale)

interface Seller {
  name: string;
}

interface ProductInfo4 {
  productName: string;
  price: number;
  sale?: object;
  seller?: Seller;
}

const soju: ProductInfo4 = {
  productName: "soju",
  price: 2000,
  seller: {name: lily}
}

// 옵셔널 체이닝
console.log(soju.seller?.name)
// soju.seller -> seller는 potional한 key -> undefined가 될 수 있으므로 오류를 띄워줌. (?를 붙여주면 있을 때만 출력)


// interface는 상속 가능
interface Person {
  name: string,
  age: number,
}

interface Student extends Person {
  studentId: string;
  eat: () => void; // 함수의 리턴값이 없을 때 해당 함수 자체는 void를 반환한다.
  // eat2: (aa: number) => number
}

const person: Person = {
  name: 'lily', age: 100
}

const stu: Student = {
  name: "lily", age: 90, studentId: "000000",
  eat: () => console.log("밥을 먹는다.")
}

// 실습
// 아래 나와 있는 heroGame_A 와 heroGame_B 를 만족할 수 있는 interface Game 만들어보기
let heroGame_A: Game = {
  title: 'DC 언체인드',
  price: 50000,
  desc: 'DC 히어로 & 빌런 각각의 개성은 물론, 액션의 재미까지!',
  category: '액션',
  platform: '모바일',
}

let heroGame_B: Game = {
  title: 'MARVEL 퓨처파이트',
  price: 65000,
  category: '롤플레잉',
  platform: '모바일',
}

interface Game {
  title: string,
  price: number,
  desc?: string,
  category: string
  platform: string
}
