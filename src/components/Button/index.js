import propTypes from "prop-types";
import "../Button/button.css";

const ButtonDefault = ({ name, redirection, divButton }) => {
  return (
    <div className={divButton}>
      <button className="button-default" onClick={redirection}>
        {name}
      </button>
    </div>
  );
};

ButtonDefault.propTypes = {
  name: propTypes.string,
  redirection: propTypes.func,
  divButton: propTypes.string,
};

export default ButtonDefault;
