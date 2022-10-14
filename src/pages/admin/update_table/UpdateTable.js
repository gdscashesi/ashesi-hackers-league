import React, { useContext, useRef, useEffect, useState } from "react";
import Table from "./../../rankings/table/Table";
import { AppContext } from "contexts/AppContext";
import Button from "components/button/Button";

//styles
import updateStyles from "./update.module.scss";

const UpdateTable = () => {
  const { headers, scores, sortScores } = useContext(AppContext);
  const newHeaders = useRef([...headers, "actions"]);
  const [update, setUpdate] = useState([...scores]);

  const updateScores = (score, key) => {
    score[key] = score[key] + 3;
    setUpdate([...update]);
    return update;
  };

  const updateBtns = (score) => {
    const btns = [
      <Button
        text="update sql"
        onClick={() => {
          updateScores(score, "sql");
        }}
      />,
      <Button
        text="update algo"
        onClick={() => {
          updateScores(score, "algorithms");
        }}
      />,
      <Button
        text="update script"
        onClick={() => {
          updateScores(score, "scripting");
        }}
      />,
    ];

    return btns;
  };

  const insertUpdateBtns = () => {
    update.map((score, index) => {
      return (score["buttons"] = updateBtns(score));
    });
  };
  insertUpdateBtns();

  return (
    <div className={updateStyles.container}>
      <Table
        headers={newHeaders.current}
        body={update}
        sortScores={sortScores}
      />
    </div>
  );
};

export default UpdateTable;
