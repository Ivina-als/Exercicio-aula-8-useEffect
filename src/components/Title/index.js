import propTypes from "prop-types";
import "../Title/title.css";

const Title = ({ title, styleTitle }) => {
  return <h2 className={styleTitle}>{title}</h2>;
};

Title.propTypes = {
  title: propTypes.string.isRequired,
};

Title.defaultProps = {
  styleTitle: "style-title",
};

export default Title;
