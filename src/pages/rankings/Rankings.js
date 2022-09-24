// libraries
import React, { useContext } from "react";

// components
import Table from "./table/Table";
import Button from "components/button/Button";

import RankingsContext from "contexts/RankingsContext";

// styles
import rankingsStyles from "./rankings.module.scss";

// utils
import { CHALLENGES, REGISTER } from "utils/constants";

function Rankings() {
  const { headers, scores, sortScores } = useContext(RankingsContext);

  return (
    <div className={rankingsStyles.rankingsWrapper}>
      <div className={rankingsStyles.banner}>
        <h1>Rankings</h1>

        <div>
          <Button text="view current challenge" to={CHALLENGES} />
          <Button text="register your team" to={REGISTER} />
        </div>
      </div>

      <div className={rankingsStyles.tableParent}>
        <Table headers={headers} body={scores} sortScores={sortScores} />
      </div>
    </div>
  );
}

export default Rankings;
