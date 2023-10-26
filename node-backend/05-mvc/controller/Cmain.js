const { commentInfos } = require("../model/Comment");
//model 안에 있는 Comment.js에서 connemtInfos 함수를 구조분해 할당으로 가져오기

exports.main = (req, res) => {
  res.render("index");
};

exports.comments = (req, res) => {
  //commentInfos 함수를 실행시켜서 그 return값을 commentData에 담고 있음
  const commentData = commentInfos();

  res.render("comments", {
    commentInfos: commentData,
  });
};
