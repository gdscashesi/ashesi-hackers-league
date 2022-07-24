// library
import React from "react";
import { Link } from "react-router-dom";

// images
import Trophy from "media/trophy.png";
import BlueCode from "media/code.png";
import BlackCode from "media/codee.png";

// styles
import homeStyles from "./homeStyles.module.scss";
import Numbering from "./Numbering";

// utils
import { RANKINGS } from "utils/constants";

function Home() {
  return (
    <div className={homeStyles.wrapper}>
      <Numbering />

      <div className={homeStyles.headline}>
        <h1> Ashesi Hackers League</h1>
        <small>powered by gdsc - ashesi univesity</small>
        <br />
      </div>

      <div className={homeStyles.description}>
        a competitive series of coding challenges across{" "}
        <strong> Algorithms, SQL, and Scripting (bash & python)</strong>
        <br />
        <button>
          <Link to={RANKINGS}>view rankings</Link>
        </button>
      </div>

      <div className={homeStyles.codeTrophy}>
        <img src={Trophy} alt={Trophy} />
        <img src={BlueCode} alt={BlueCode} />
        <img src={BlackCode} alt={BlackCode} />
      </div>
    </div>
  );
}

export default Home;
