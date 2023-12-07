import { useCallback, useState, useEffect } from "react";

// useCallback : 함수를 기억함
// 컴포넌트가 렌더링될 때 컴포넌트 내부에 있는 함수도 다시 선언하게 됨.
// 다시 선언할 필요가 없는 함수는 굳이 재선언하지 않고, 이전에 선언해 둔 함수를 사용하는 것이 효율적! => 이걸 도와주는 것이 UseCallback
export default function UseCallbackEx2({ postId }) {
  const [post, setPost] = useState();
  const [text, setText] = useState("");

  const fetchData = useCallback(async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );

    const post = await res.json();
    setPost(post);
  }, [postId]);

  useEffect(() => {
    fetchData();
  }, [fetchData]); // fetchData가 변경될 때마다 fetchData 함수가 실행된다. (의존성 배열에 postId 넣어도 됨)

  return (
    <>
      <h3>UseCallback 공부 2</h3>
      <div>조회한 post ID: {postId}</div>
      {post && (
        <div>
          <div>id: {post.id}</div>
          <div>title: {post.title}</div>
          <div>body: {post.body}</div>
        </div>
      )}
    </>
  );
}

// useMemo vs useCallback
// useMemo: 특정 값을 기억하여 불필요한 연산을 방지
// useCallback: 특정 함수를 기억하여 불필요한 재선언을 방지
