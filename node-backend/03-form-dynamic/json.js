const data = {
  name: "lily",
  gender: "female",
};

// 직렬화
const jsonData = JSON.stringify(data);
console.log("json: ", jsonData);

// 역직렬화
console.log("js object: ", JSON.parse(jsonData));
