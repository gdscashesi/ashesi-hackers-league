import React from "react";
import instructionsStyles from "./instructionsStyles.module.scss";
import Button from "components/button/Button";
import { CHALLENGES } from "utils/constants";
import { instructions } from "utils/rulesdata";

const Instructions = () => {
  return (
    <div className={instructionsStyles.rankingsWrapper}>
      <div className={instructionsStyles.banner}>
        <h1>Instructions</h1>
        <div>
          <Button text="Back To Challenges" to={CHALLENGES} />
        </div>
      </div>

      <div className={instructionsStyles.container}>
        {instructions?.map((instruction) => {
          return (
            <div>
              <h3>{instruction.header}</h3>
              <p>
                {instruction.rules.map((rule) => {
                  return <li>{rule}</li>;
                })}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Instructions;
