//libraries
import React, { useEffect, useState } from "react";

//components
import Button from "components/button/Button";
import {
  AlgorithmsTextArea,
  ScriptingTextArea,
  SqlTextArea,
} from "./TextAreas";

// styles
import styles from "./new.module.scss";

// utils
import { ALGORITHMS, SCRIPTING, SQL, SAVE } from "utils/constants";

const New = () => {
  const [currentTextArea, setCurrentTextArea] = useState(ALGORITHMS);
  const handleNavClick = (e) => setCurrentTextArea(e.target.innerText);
  const [questionContent, setQuestionContent] = useState({
    [ALGORITHMS]: "",
    [SCRIPTING]: "",
    [SQL]: "",
  });

  useEffect(() => {
    const savedQuestions = JSON.parse(localStorage.getItem("questionContent"));
    if (savedQuestions) {
      setQuestionContent(savedQuestions);
    }
  }, []);

  const updateQuestionState = (questionType, content) => {
    setQuestionContent({
      ...questionContent,
      [questionType]: content,
    });
    console.log(questionContent);
  };

  const storeQuestionContent = () => {
    localStorage.setItem("questionContent", JSON.stringify(questionContent));
    alert("questions saved");
  };

  const QUESTION_TYPE_COMPONENTS = {
    [ALGORITHMS]: (
      <AlgorithmsTextArea
        onChange={(e) => updateQuestionState(e.target.name, e.target.value)}
        value={questionContent[ALGORITHMS]}
      />
    ),
    [SCRIPTING]: (
      <ScriptingTextArea
        onChange={(e) => updateQuestionState(e.target.name, e.target.value)}
        value={questionContent[SCRIPTING]}
      />
    ),
    [SQL]: (
      <SqlTextArea
        onChange={(e) => updateQuestionState(e.target.name, e.target.value)}
        value={questionContent[SQL]}
      />
    ),
  };

  return (
    <div className={styles.wrapper}>
      <div>
        {Object.keys(QUESTION_TYPE_COMPONENTS).map((category) => (
          <Button key={category} text={category} onClick={handleNavClick} />
        ))}
      </div>

      <div>{QUESTION_TYPE_COMPONENTS[currentTextArea]}</div>

      <div>
        <Button text={SAVE} onClick={storeQuestionContent} />
      </div>
    </div>
  );
};

export default New;
