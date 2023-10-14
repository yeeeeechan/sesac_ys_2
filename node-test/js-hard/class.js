const cat1 = {
  name: "나비",
  age: 2,
  mew: function () {
    console.log("야옹");
  },
};

const cat2 = {
  name: "장화",
  age: 8,
  mew: function () {
    console.log("야옹");
  },
};

const cat3 = {
  name: "코코",
  age: 4,
  mew: function () {
    console.log("야옹");
  },
};

// PascalCase 규칙을 이용해서 식별자 생성(camelCase에서 첫 글자를 대문자로)
class Cat {
  // 생성자: 메소드의 일종. 보통 생성자에 객체의 속성을 지정함.
  // 메소드 중에서 Cat 클래스를 이용해서 객체를 만드는 순간 호출되는 메소드.
  constructor(name1, age1) {
    this.name = name1; // this.name의 name과 name1은 서로 다른 변수(단 보통 이름을 동일하게 씀)
    this.age = age1;
  }

  // 메소드. 클래스 내부에서 메소드 선언할 때는 function 안 붙여도 됨
  mew() {
    console.log("야옹");
  }

  // 고양이의 정보를 콘솔로 찍는 메소드
  info() {
    console.log(`이름은 ${this.name}, 나이는 ${this.age}살`);
  }
}

// Cat 클래스를 이용해서 새로운 객체를 만들겠다.
const cat4 = new Cat("나비", "2"); // Cat이라는 메소드를 만드는 순간에 호출. 생성자 매개변수와 동일한 인자를 받아야 함.
const cat5 = new Cat("장화", 80);
console.log(cat4.name, cat5.name);
cat4.mew(); // 클래스의 함수를 실행시킬 때
cat4.info();
