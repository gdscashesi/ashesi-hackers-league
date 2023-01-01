import React from "react";
import instructionsStyles from "./instructionsStyles.module.scss";
import Button from "components/button/Button";
import { CHALLENGES } from "utils/constants";

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
        {/* <div className={instructionsStyles.divider}></div> */}
        <div>
          <h2>General Rules</h2>
          <p>
            <li>Start by understanding the problem statement:</li>
            <li>
              Identify the key constraints: Look for any constraints in the
              problem that may affect your solution.
            </li>
            <li>
              Look for patterns: Many algorithm problems can be solved by
              identifying patterns in the data.
            </li>{" "}
            <li>
              Consider different approaches: There may be multiple ways to solve
              an algorithm problem.
            </li>
          </p>
        </div>
        <div>
          <h2>Points Accumulation</h2>
          <p>
            <li>Start by understanding the problem statement:</li>
            <li>
              Identify the key constraints: Look for any constraints in the
              problem that may affect your solution.
            </li>
            <li>
              Look for patterns: Many algorithm problems can be solved by
              identifying patterns in the data.
            </li>{" "}
            <li>
              Consider different approaches: There may be multiple ways to solve
              an algorithm problem.
            </li>
          </p>
        </div>
        <div>
          <h2>Teams Rules</h2>
          <p>
            <li>Start by understanding the problem statement:</li>
            <li>
              Identify the key constraints: Look for any constraints in the
              problem that may affect your solution.
            </li>
            <li>
              Look for patterns: Many algorithm problems can be solved by
              identifying patterns in the data.
            </li>{" "}
            <li>
              Consider different approaches: There may be multiple ways to solve
              a challenge.
            </li>
          </p>
        </div>
        <div>
          <h2>Other Rules</h2>
          <p>
            <li>Start by understanding the problem statement:</li>
            <li>
              Identify the key constraints: Look for any constraints in the
              problem that may affect your solution.
            </li>
            <li>
              Look for patterns: Many algorithm problems can be solved by
              identifying patterns in the data.
            </li>{" "}
            <li>
              Consider different approaches: There may be multiple ways to solve
              a challenge
            </li>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Instructions;
