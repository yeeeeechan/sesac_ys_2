function Book({ title, author, price, type }) {
  return (
    <div className="info">
      <h3 className="bestSeller">이번 주 베스트셀러</h3>
      <div className="img-container">
        <img src="/logo192.png" />
      </div>
      <h3 className="book-title">{title}</h3>
      <h4>저자: {author}</h4>
      <h4>판매가: {price}원</h4>
      <h4>구분: {type}</h4>
    </div>
  );
}

export default Book;
