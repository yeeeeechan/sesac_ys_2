const crypto = require("crypto");

function createHashedPw(pw) {
  return crypto.createHash("sha512").update(pw).digest("base64");
}

// 객체 형태로 만들어짐
console.log("pw 1234: ", createHashedPw("1234"));
console.log("pw 12345: ", createHashedPw("12345"));

const input = "1234"; //사용자가 입력한 비번
const dbPw =
  "1ARVn2Auq2/WAqx2gNrL+q3RNjAzXpUfCXrzkA6d4Xa22yhRLy4AC50E+6UTPoscbo31nbOoq51gvkuXzJ6B2w=="; //암호화하여 db에 저장된 비번

// 단, 같은 비번을 사용하는 사용자가 있는 경우, 한 사람만 털려도 죄다 털릴 위험이 있음.
// 이를 방지하기 위해서 임의의 값을 붙여 함께 변형시킴(salt)

console.log("비교 결과1: ", createHashedPw(input) == dbPw);

function createHashedPwWithSalt(pw) {
  const salt = crypto.randomBytes(16).toString("base64");
  console.log("salt: ", salt);
  const interations = 100; //반복 횟수
  const keylen = 64;
  const digest = "sha512";
  return crypto
    .pbkdf2Sync(pw, salt, interations, keylen, digest)
    .toString("base64");
  // 인자 -> 암호화할 문자열, salt, 반복 횟수, 키의 길이, 해시 함수 알고리즘
}

function comparePw(pw, salt) {
  const interations = 100; //반복 횟수
  const keylen = 64;
  const digest = "sha512";
  return crypto
    .pbkdf2Sync(pw, salt, interations, keylen, digest)
    .toString("base64"); // 세글자 단위로 잘라서 4글자로 변환하는 알고리즘이므로, 최종적으로는 88글자로 나옴
}

console.log("pw with salt 1234: ", createHashedPwWithSalt("1234"));

// salt도 비번을 처음 저장하는 시점에 db에 함께 저장해야 함(비교할 때마다 salt 생성하면 비교 결과 false)
const dbPwSalt =
  "KfnZRFZlzPxrQvXtNFJnz832sXcw2nIEdrr42MzRFL9P98v4rm19hs2X17zzebOSlpXfCVzg6A8l+Tb1DANJzg==";
const dbSalt = "Qz7Jm59viNGPiB6O6y/3pQ==";

console.log("비교 결과2: ", createHashedPwWithSalt(input) == dbPwSalt);

console.log("compare result with salt: ", comparePw(input, dbSalt) == dbPwSalt);
