class House {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age() {
    console.log(
      `${this.name} 건물은 ${
        new Date().getFullYear() - this.year
      }년 전에 건축되었어요.`
    );
  }
}
const house1 = new House("A", 1990);
console.log(house1);
house1.age();

// 상속
class Apartment extends House {
  constructor(name, year, floor) {
    super(name, year); // 부모 클래스(House)의 생성자 호출
    this.floor = floor;
  }

  // 오버라이딩: 부모에 있는 메소드를 자식이 다시 정의하는 것
  // cf. 오버로딩: js에서는 없는 개념. 같은 이름으로 여러 개의 함수를 선언하는 것. (다른 매개변수를 받는다.)
  age() {
    super.age(); // 부모에 있는 메소드를 사용하고 싶은 경우
    console.log(
      `${this.name} 건물은 ${this.floor}층이고, ${
        new Date().getFullYear() - this.year
      }년 전에 건축되었어요.`
    );
  }

  getFloor() {
    console.log(`${this.name} 건물은 ${this.floor}층입니다.`);
  } // 클래스 안에서 동일한 이름의 메소드와 속성을 지정하는 건 권장되지 않음.
}

const apart = new Apartment("B", 1988, 4);
console.log(apart);
apart.age();
apart.getFloor();

// 실습
class Shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  getArea() {
    console.log(this.width * this.height);
  }
}

const rec1 = new Shape(3, 4);
rec1.getArea();

// 실습(선택) - 직사각형 클래스 만들기
class Rectangle extends Shape {
  constructor(width, height) {
    super(width, height);
  }
  getArea() {
    console.log(Math.sqrt(this.width ** 2 + this.height ** 2));
  }
}

const rec2 = new Rectangle(3, 4);
rec2.getArea();

// 실습(선택) - 삼각형 클래스 만들기
class Triangle extends Shape {
  constructor(width, height) {
    super(width, height);
  }
  getArea() {
    console.log((this.width * this.height) / 2);
  }
}

const tri = new Triangle(3, 4);
tri.getArea();

// 실습(선택) - 원 클래스 만들기
class Circle extends Shape {
  constructor(width, height, radius) {
    super(width, height);
    this.radius = radius;
  }
  getArea() {
    console.log(this.radius ** 2 * 3.14);
  }
}

const cir = new Circle(4, 4, 4);
cir.getArea();
