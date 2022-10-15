import React, { useContext, useRef, useState } from "react";
import Table from "./../../rankings/table/Table";
import { AppContext } from "contexts/AppContext";
import Button from "components/button/Button";

//styles
import updateStyles from "./update.module.scss";
import ToggleButton from "components/toggle_button/ToggleButton";

const UpdateTable = () => {
  const { headers, scores, sortScores } = useContext(AppContext);
  const [old, setOld] = useState(false);
  const newHeaders = useRef([...headers, "actions"]);
  const [update, setUpdate] = useState([...scores]);
  const updateScores = (score, ind, key) => {
    update[ind][key] = update[ind][key] + 3;
    setUpdate([...update]);
    // return update;
  };

  const updateBtns = (score, index) => {
    const btns = [
      <Button
        text="update sql"
        onClick={() => {
          updateScores(score, index, "sql");
        }}
      />,
      <Button
        text="update algo"
        onClick={() => {
          updateScores(score, index, "algorithms");
        }}
      />,
      <Button
        text="update script"
        onClick={() => {
          updateScores(score, index, "scripting");
        }}
      />,
    ];

    return btns;
  };

  const insertUpdateBtns = () => {
    update.map((score, index) => {
      return (score["buttons"] = updateBtns(score, index));
    });
  };
  insertUpdateBtns();

  const onClick = () => {
    setOld(!old);
  };
  return (
    <div className={updateStyles.container}>
      <ToggleButton text="Table state" Onclick={onClick} />
      {!old ? (
        <Table
          headers={newHeaders.current}
          body={scores}
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
