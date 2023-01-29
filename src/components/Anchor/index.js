import propTypes from "prop-types";
import "../Anchor/anchor.css";

const AnchorDefault = ({ name, href }) => {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      {name}
    </a>
  );
};

AnchorDefault.propTypes = {
  name: propTypes.string,
  href: propTypes.string,
};

export default AnchorDefault;
