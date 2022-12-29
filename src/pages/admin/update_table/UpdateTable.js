// libraries
import React, { useContext, useRef, useState } from "react";
import Table from "./../../rankings/table/Table";
import Button from "components/button/Button";
import { AppContext } from "contexts/AppContext";

//styles
import updateStyles from "./update.module.scss";
import ToggleButton from "components/toggle_button/ToggleButton";

//icons
import { CaretUpIcon, UndoIcon } from "components/icons/Icons";

// utils
import { ALGORITHMS, SQL, SCRIPTING } from "utils/constants";

const UpdateTable = () => {
  const { headers, scores, sortScores } = useContext(AppContext);
  const [old, setOld] = useState(false);
  const newHeaders = useRef([...headers, "actions"]);
  const [update, setUpdate] = useState([...scores]);

  const updateScores = (index, key) => {
    update[index][key] += 3;
    setUpdate([...update]);
  };

  const undoAllScoreUpdates = () => {
    let response = window.confirm("you are about to reset the table");

    if (response) {
      setUpdate([...JSON.parse(sessionStorage.getItem("scores"))]);
    }
  };

  const publishScoreUpdates = () => {
    let response = window.confirm("you are about to publish the new scores");

    if (response) {
      // async publishing to firebase
    }
  };

  const generateUpdateBtns = (index) => {
    return [
      [ALGORITHMS, SCRIPTING, SQL].map((CHALLENGE_CATEGORY) => (
        <CaretUpIcon
          onClick={() => {
            updateScores(index, CHALLENGE_CATEGORY);
          }}
        />
      )),
    ];
  };

  const insertUpdateBtns = () => {
    update.map((score, index) => {
      return (score["buttons"] = generateUpdateBtns(index));
    });
  };
  insertUpdateBtns();

  const toggelTableVersion = () => {
    setOld(!old);
  };

  return (
    <div className={updateStyles.container}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <ToggleButton text="Table state" Onclick={toggelTableVersion} />

        {!old ? (
          <div>
            <UndoIcon onClick={undoAllScoreUpdates} />
            <Button
              onClick={publishScoreUpdates}
              text="publish"
              styles={{ background: "var(--gradient-green)" }}
            />
          </div>
        ) : null}
      </div>
      {!old ? (
        <Table
          headers={newHeaders.current}
          body={update}
          sortScores={sortScores}
        />
      ) : (
        <Table
          headers={headers}
          body={JSON.parse(sessionStorage.getItem("scores"))}
          sortScores={sortScores}
        />
      )}
    </div>
  );
};

export default UpdateTable;
