// libraries
import { Link } from "react-router-dom";

// styles
import buttonStyles from "./button.module.scss";

const Button = ({ svg, text, to, styles }) => {
  return (
    <>
      {!svg?
        <button className={buttonStyles.button} styles={{ ...styles }}>
          {to ? <Link to={to}>{text}</Link> : { text }}
        </button> : 
        <button className={buttonStyles.svgButton} style={{...styles}}>
          {svg}
          {to ? <Link to={to}>{text}</Link> : {text}}
        </button>
       
      }
    </>
  );
};

export default Button;
