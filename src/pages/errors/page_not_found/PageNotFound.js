//libraries
import { useLocation } from "react-router-dom";

//Styles
import errorStyles from "../errors.module.scss";

//components
import { PageNotFoundSvg } from "./PageNotFoundSvg";

const PageNotFound = () => {
  const location = useLocation();

  return (
    <div className={errorStyles.errorWrapper}>
      <div>
        <PageNotFoundSvg />
        <br />
        <strong>
          sorry, looks like we don't have a{" "}
          <span>{location.pathname.split("/")[1]} </span>
          page{" "}
        </strong>
      </div>
    </div>
  );
};

export default PageNotFound;
