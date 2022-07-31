// libraries
import React from "react";

// components
import Table from "./table/Table";
import Button from "components/button/Button";

// styles
import rankingsStyles from "./team.module.scss";

// utils
import { teamHeaders, teamScores } from "utils/data";
import { NO_DIR } from "utils/constants";

const Team = () => {

  const handleAddHacker = (e) => {
    e.preventDefault()
    window.prompt("Add a new hacker🔥")
  }

  return (
    <div className={rankingsStyles.rankingsWrapper}>
      <div className={rankingsStyles.banner}>
        <h1>Indie-Hackers</h1>

        <div>
          <Button action={handleAddHacker} text="Add Hacker" to={NO_DIR} />
        </div>
      </div>

      <div className={rankingsStyles.tableParent}>
        <Table headers={teamHeaders} body={teamScores} />
      </div>
    </div>
  );
}

export default Team;
