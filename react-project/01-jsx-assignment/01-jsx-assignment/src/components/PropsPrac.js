import PropTypes from "prop-types";

function FavoritFood(props) {
  return (
    <>
      제가 좋아하는 음식은 <span style={{ color: "red" }}>{props.food}</span>{" "}
      입니다.
    </>
  );
}

FavoritFood.defaultProps = {
  food: "옥수수",
};

export default FavoritFood;
