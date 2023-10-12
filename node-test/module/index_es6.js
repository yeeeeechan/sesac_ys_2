// import add from "./math_es6.js";
// math_es6 파일에서 default로 export 하고 있는 식별자를 add(원하는 이름)라는 식별자로 받아옴
// console.log(add(2, 3));

// import { add } from "./math_es6.js"; // 여러 개 내보낼 땐 구조 분해 해서 가져온다. 이렇게 가져올 땐 키 값을 그대로 써야 함.
// console.log(add(2, 3));

// es6 문법에서 모듈을 import 할 때 구조 분해 할당 없이 식별자를 만들어 받아 오려면
// module 파일(math_es6.js)에 default로 export 하는 값이 있어야 한다.
import math from "./math_es6.js"; 
console.log(math.add(2, 4)); // default 키워드가 없을 땐 오류 발생
