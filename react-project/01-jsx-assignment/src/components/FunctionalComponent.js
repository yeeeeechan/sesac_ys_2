function Animal() {
  const name = "나만 없어...";
  const animal = "고양이";
  const result = 3 + 5;

  const a = 30;
  const b = 20;

  const title = <div className="title">Hello World</div>;

  return (
    <>
      <h2>
        제 반려동물의 이름은 {name}입니다. {name}은 {animal}입니다.
      </h2>

      <div>{result == 8 ? "정답입니다!" : "오답입니다!"}</div>

      <div>{a > b && "a가 b보다 큽니다."}</div>

      <div>{title}</div>
      <br />
      <div className="content">
        <div>
          아이디: <input type="text" />
        </div>
        <br />
        <div>
          비밀번호: <input type="password" />
        </div>
      </div>
      <br />
    </>
  );
}

export default Animal;
