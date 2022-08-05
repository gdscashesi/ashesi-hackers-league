// libraries
import { Link } from "react-router-dom";

// styles
import buttonStyles from "./button.module.scss";

const Button = ({ icon, text, to, styles }) => {
  return (
    <button className={buttonStyles.button} style={{...styles}}>
      {icon? icon:null}
      {to ? <Link to={to}>{text}</Link> : {text}}
    </button>
       
  );
};

export default Button;
