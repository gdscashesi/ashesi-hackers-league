// libraries
import { Link } from "react-router-dom";

// styles
import buttonStyles from "./button.module.scss";

const Button = ({ text, to, styles }) => {
  return (
    <button className={buttonStyles.button} styles={{ ...styles }}>
      {to ? <Link to={to}>{text}</Link> : { text }}
    </button>
  );
};

export default Button;