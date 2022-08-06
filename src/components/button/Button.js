// libraries
import { Link } from "react-router-dom";

// styles
import buttonStyles from "./button.module.scss";

const Button = ({ icon, text, to, styles }) => {
  return (
    <button className={buttonStyles.button} style={{ ...styles }}>
      {to ? (
        <Link to={to}>
          {icon ?? ""} {text}
        </Link>
      ) : (
        <>
          {icon ?? ""}
          {text}
        </>
      )}
    </button>
  );
};

export default Button;
