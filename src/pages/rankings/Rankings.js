// libraries
import React from "react";

// components
import Table from "./table/Table";
import Button from "components/button/Button";

// styles
import rankingsStyles from "./rankings.module.scss";

// utils
import { headers, teamScores } from "utils/data";
import { CHALLENGES, REGISTER } from "utils/constants";

function Rankings() {
  throw new Error();
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
        <Table headers={headers} body={teamScores} />
      </div>
    </div>
  );
}

export default Rankings;
