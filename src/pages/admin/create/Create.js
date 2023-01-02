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
import styles from "./create.module.scss";

// utils
import { ALGORITHMS, SCRIPTING, SQL, SAVE, PUBLISH } from "utils/constants";

const Create = () => {
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

  const saveQuestionsToLocalStorage = () => {
    localStorage.setItem("questionContent", JSON.stringify(questionContent));
    alert("questions saved");
  };

  const publishQuestions = () => {
    const response = window.confirm("you are about to publish these questions");

    if (response) {
      // async publishing to firebase
    }
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
      <div className={styles.questionButtons}>
        {Object.keys(QUESTION_TYPE_COMPONENTS).map((category) => (
          <Button
            key={category}
            text={category}
            onClick={handleNavClick}
            styles={{
              cssText: `${
                currentTextArea === category
                  ? "background-color: #f0f0f080; color: #555; font-size: 105%; font-weight: 500"
                  : "background-color: white; color: #aaa"
              }`,
            }}
          />
        ))}
      </div>

      {QUESTION_TYPE_COMPONENTS[currentTextArea]}

      <div className={styles.savePublishButtonsWrapper}>
        <Button text={SAVE} onClick={saveQuestionsToLocalStorage} />
        <Button text={PUBLISH} onClick={publishQuestions} />
      </div>
    </div>
  );
};

export default Create;
