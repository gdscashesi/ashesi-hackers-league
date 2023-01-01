import popUpStyles from "./pop-up.module.scss"

export const Popup = ({ title,body, closePopup }) => {
  return (
    <div className={popUpStyles.popupContainer}>
      <div className={popUpStyles.popupWrapper}>
        <h2>{title}</h2>
        <button onClick={closePopup}>Close</button>
      </div>
    </div>
  );
};
