import React from "react";
import toggleStyles from "./toggle-button.module.scss";
const ToggleButton = ({ text, Onclick }) => {
  return (
    <div className={toggleStyles.container}>
      <h2>{text}</h2>

      <div className={toggleStyles.toggleSwitch}>
        <input
          onChange={Onclick}
          type="checkbox"
          className={toggleStyles.checkbox}
          name={text}
          id={text}
        />
        <label className={toggleStyles.label} htmlFor={text}>
          <span className={toggleStyles.inner} />
          <span className={toggleStyles.switch} />
        </label>
      </div>
    </div>
  );
};

export default ToggleButton;
