// libraries
import { useState } from "react";
import { useParams } from "react-router-dom";

// styles
import challengeStyles from "./single-challenge.module.scss";

const SingleChallenge = () => {
  const params = useParams();
  const categories = ["algorithms", "scripting", "sql"];

  const [currentQuestion, setCurrentQuestion] = useState(0);

  return (
    <div className={challengeStyles.wrapper}>
      <div className={challengeStyles.details}>
        <h1>Challenge {params.id}</h1>
        <small>22/05/2023</small> | <small>Spring 2023</small>
      </div>
      <div className={challengeStyles.questions}>
        <div className={challengeStyles.categories}>
          {categories.map((category, index) => (
            <div key={category} onClick={() => setCurrentQuestion(index)}>
              {category}
            </div>
          ))}
        </div>
        <div>{categories[currentQuestion]}</div>
      </div>
    </div>
  );
};

export default SingleChallenge;
