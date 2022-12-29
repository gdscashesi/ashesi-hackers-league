// libraries
import React, { useContext, useState } from "react";

// components
import Table from "./table/Table";
import Button from "components/button/Button";

import { AppContext } from "contexts/AppContext";

// styles
import rankingsStyles from "./rankings.module.scss";

// utils
import { CHALLENGES, REGISTER } from "utils/constants";

function Rankings() {
  const { headers, scores, sortScores } = useContext(AppContext);

  return (
    <div className={rankingsStyles.rankingsWrapper}>
      <div className={rankingsStyles.banner}>
        <h1>Rankings</h1>

        <div>
          <Button text="view current challenge" to={CHALLENGES} />
          <Button text="register your team" to={REGISTER} />
        </div>
      </div>
      
      {
        scores.length > 0 ? 
      <div className={rankingsStyles.tableParent}>
        <Table headers={headers} body={scores} sortScores={sortScores} />
      </div> : <div className={rankingsStyles.tableParent}>
         <div className={rankingsStyles.placeholder}>
            <h2>No new rankings...Sign up for <strong className={rankingsStyles.highlight}>upcoming challenges</strong> 🎉
            </h2>
         </div>
            <div className={rankingsStyles.centerBtn}>
              <Button text="Sign Up" to={REGISTER}  />
            </div>
      </div>
      }
    </div>
  );
}

export default Rankings;
