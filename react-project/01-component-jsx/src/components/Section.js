import PropTypes from "prop-types";

function Section({ title, children }) {
  return (
    <>
      <div className="Section__section">
        <h3 className="Section__title">{title}</h3>
        <div>{children}</div>
      </div>
    </>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired, // == elements가 필수로 넘어온다.
};

export default Section;
