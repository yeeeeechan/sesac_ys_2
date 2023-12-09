import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ProductsPage() {
  const [product, setProduct] = useState(null);

  const getProducts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const product = await res.json(); // fetch는 json으로 파싱
    setProduct(product);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div> 여기는 상품 페이지 </div>
      {product ? (
        <>
          {product.map((value) => (
            <ul key={value.id}>
              <li>상품 번호: {value.id}</li>
              <li>상품명: {value.title}</li>
              <li>상품 설명: {value.body}</li>
              <ii>
                <Link to={`/products/${value.id}`}>상세 페이지로 이동하기</Link>
              </ii>
            </ul>
          ))}
        </>
      ) : (
        <div>loading...</div>
      )}
    </>
  );
}
