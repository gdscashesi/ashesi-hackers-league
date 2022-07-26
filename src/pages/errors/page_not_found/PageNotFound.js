//libraries
import { useLocation } from "react-router-dom";

//Styles
import styles from "./page-not-found.module.scss";

//components
import { PageNotFoundSvg } from "./PageNotFoundSvg";

const PageNotFound = () => {
  const location = useLocation();

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h2>Ashesi Hackers League</h2>
      </div>

      <div className={styles.notFound}>
        <PageNotFoundSvg />
        <br />
        <strong>
          sorry, looks like we don't have a {location.pathname.split("/")[1]}{" "}
          page{" "}
        </strong>
      </div>
    </div>
  );
};

export default PageNotFound;
