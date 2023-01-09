import Button from "components/button/Button";
import popUpStyles from "./pop-up.module.scss";

export const Popup = ({ title, body, closePopup }) => {
  return (
    <div className={popUpStyles.popupContainer}>
      <div className={popUpStyles.popupWrapper}>
        <h3>{title}</h3>
        <div>
          <p>
            {body?.map((item) => {
              return <li>{item}</li>;
            })}
          </p>
          <Button text="Close" onClick={closePopup} />
        </div>
      </div>
    </div>
  );
};
