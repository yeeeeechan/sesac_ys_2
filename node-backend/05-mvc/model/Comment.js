exports.commentInfos = () => {
  // mysql 연결해서 select * from comment 했다고 생각하고, 그 결괏값을 리턴했다고 가정
  return [
    {
      id: 1,
      userId: "lily",
      date: "2023-10-26",
      comment: "hello",
    },
    {
      id: 2,
      userId: "gildong",
      date: "2023-10-28",
      comment: "hello world",
    },
  ];
};
