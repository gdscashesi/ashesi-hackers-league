//libraries
import { useLocation } from 'react-router-dom';

//Styles
import styles from "./PageNotFound.module.css"

const PageNotFound = () => {

    const location = useLocation();

    return(
        
        <div className={styles.notFound}>
            <h1>Sorry, looks like we don't have a {location.pathname.split('/')[1]} page </h1>
        </div>
    
    );
}

export default PageNotFound;