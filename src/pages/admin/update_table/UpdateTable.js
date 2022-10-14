import React, { useContext, useRef, useEffect } from "react";
import Table from "./../../rankings/table/Table";
import { AppContext } from "contexts/AppContext";
import Button from "components/button/Button";

//styles
import updateStyles from "./update.module.scss";

const UpdateTable = () => {
  const { headers, scores, sortScores } = useContext(AppContext);
  const newHeaders = useRef([...headers, "actions"]);
  const scoresRef = useRef(scores);
  // const [update, setUpdate] = useState(scores);

  const updateScores = (score, ind, key) => {
    if (key === "sql") scores[ind].sql = scores[ind].sql + 3;
    if (key === "algo") scores[ind].algorithms = scores[ind].algorithms + 3;
    if (key === "script") scores[ind].scripting = scores[ind].scripting + 3;
    // setUpdate(scores);
    scoresRef.current = scores;
    return scores;
  };

  useEffect(() => {
    scoresRef.current = scores;
  }, [scoresRef, scores]);

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
          updateScores(score, index, "algo");
        }}
      />,
      <Button
        text="update script"
        onClick={() => {
          updateScores(score, index, "script");
        }}
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
        body={scores}
        sortScores={sortScores}
      />
    </div>
  );
};

export default UpdateTable;
