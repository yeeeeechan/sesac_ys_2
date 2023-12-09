import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function PhotosPage() {
  const { id } = useParams();
  const [photos, setPhotos] = useState(null);

  const getPhoto = async () => {
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/photos/${id}`
      );

      if (res.ok) setPhotos(await res.json());
      else throw Error;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPhoto();
  }, []);

  return (
    <>
      <div> 상품 이미지 페이지 </div>
      {photos ? (
        <ul>
          <li>번호: {photos.id}</li>
          <li>상품명: {photos.title}</li>
          <li>
            상품 이미지:
            <img src={photos.url} alt={photos.title}></img>
          </li>
        </ul>
      ) : (
        <div>loading...</div>
      )}
    </>
  );
}
