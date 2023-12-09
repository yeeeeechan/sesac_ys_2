import { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

export default function ProductDetail() {
  const [product, setProduct] = useState();
  const [photos, setPhotos] = useState();
  const [msg, setMsg] = useState("loading...");
  const { id } = useParams();
  console.log(id);
  // product/:id
  // params => {id: value, name: value} params는 객체 형태로 나온다.

  // 쿼리를 가져오고 싶을 땐?
  const [query, setQuery] = useSearchParams();

  // ~~~~?name=lily
  console.log(query); // URLSearchParams {size: 1}
  console.log(query.get("name")); // lily

  // Link 컴포넌트를 이용하지 않고, js 함수 내부에서 페이지를 이동시키는 코드를 작성해야 할 때
  const navigator = useNavigate();

  const getProducts = async () => {
    try {
      // 오류가 날 수도 있는 코드를 try 안에 넣는다.
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      console.log("res", res);
      if (res.ok) setProduct((await res.json())[0]);
      else throw Error;
    } catch (error) {
      console.log(error);
      setMsg(error.message);
      // try 안에서 오류가 발생하면 catch로 이동함.
    }
  };

  const getPhoto = async () => {
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/photos/${id}`
      );
      if (res.ok) setPhotos(await res.json());
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
    getPhoto();
  }, []);
  return (
    <>
      <div> 여기는 상품 상세 페이지 </div>
      <button onClick={() => navigator(-1)}>목록으로 이동</button>
      {/* <button onClick={() => navigator(2)}>앞으로 이동</button> */}
      <button onClick={() => navigator("/")}>홈으로 이동</button>

      {/* setQuery는 인자로 보내준 정보를 이용하여 새로운 쿼리를 만들고, 이동함 */}
      <button onClick={() => setQuery({ name: "codee", id: 5 })}>
        setQuery 테스트
      </button>

      {product ? (
        <ul>
          <li>번호: {product.id}</li>
          <li>상품명: {product.title}</li>
          <li>
            상품 이미지 <br />
            <img className="photos" src={photos.url} alt={photos.title}></img>
          </li>
        </ul>
      ) : (
        <div>{msg}</div>
      )}
    </>
  );
}
