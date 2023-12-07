import styled from "styled-components";

// css의 네이밍 중복을 방지한다.
// css in js (이외 style-jsx)
const Container = styled.div`
  display: flex;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

/// or 연산자를 사용해서 값이 정의되어 있지 않은 경우 디폴트값으로 넣을 색상을 지정함
const Box = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.color || "black"};

  &:hover {
    transform: scale(1.2);
  }
`;

export default function StyledComponent() {
  return (
    <Container>
      <Box color="red" />
      <Box />
      <Box />
      <Box color="green" />
      <Box />
    </Container>
  );
}
