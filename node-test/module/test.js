// 콜백 함수: 함수의 인자로 함수를 넘길 때, 인자로 넘기는 그 함수
function run() {
    console.log("3초 뒤 실행");
}

console.log("시작");
setTimeout(run, 3000); // 괄호를 쓰지 않는 것이 맞음
console.log("끝");