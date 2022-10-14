import React, { useContext, useEffect, useRef, useState } from "react";
import Table from "./../../rankings/table/Table";
import { AppContext } from "contexts/AppContext";
import Button from "components/button/Button";

//styles
import updateStyles from "./update.module.scss";

const UpdateTable = () => {
  const { headers, scores, sortScores } = useContext(AppContext);
  const newHeaders = useRef([...headers, "actions"]);
  const [update, setUpdate] = useState(scores);

  const updateScores = (score, ind, key) => {
    if (key === "sql") scores[ind].sql = scores[ind].sql + 3;
    if (key === "algo") scores[ind].algorithms = scores[ind].algorithms + 3;
    if (key === "scripting") scores[ind].scripting = scores[ind].scripting + 3;
    setUpdate(scores);
    return scores;
  };

  const updateBtns = (score, index) => {
    const btns = [
      <Button
        text="update sql"
        onClick={() => {
          updateScores(score, index, "sql");
          console.log(index, updateScores(score, index));
        }}
      />,
      <Button
        text="update algo"
        onClick={() => console.log(score.algorithms + 3)}
      />,
      <Button
        text="update script"
        onClick={() => console.log(score.scripting + 3)}
      />,
    ];

    return btns;
  };

  const insertUpdateBtns = () => {
    scores.map((score, index) => {
      return (score["buttons"] = updateBtns(score, index));
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
