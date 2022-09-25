// libraries
import { Link } from "react-router-dom";

// styles
import buttonStyles from "./button.module.scss";

const Button = ({ icon, text, to, styles, onClick }) => {
  return (
    <button
      className={`${buttonStyles.button} ${!to ? buttonStyles.padding : null}`}
      style={{ ...styles }}
      onClick={onClick ? onClick : null}
    >
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
