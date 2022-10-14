import React, { useContext, useState, useEffect } from "react";
import Table from "./../../rankings/table/Table";
import { AppContext } from "contexts/AppContext";
import Button from "components/button/Button";

const UpdateTable = () => {
  const { headers, scores, sortScores } = useContext(AppContext);
  const [newHeaders, setNewHeaders] = useState(null);
  const updateBtns = [
    <Button text="sql" />,
    <Button text="algo" />,
    <Button text="script" />,
  ];

  const insertUpdateBtns = () => {
    scores.map((score) => {
      score["buttons"] = updateBtns;
    });
  };

  useEffect(() => {
    insertUpdateBtns();
    return () => {
      headers.push("actions");
      setNewHeaders(headers);
    };
  }, [headers]);

  return <Table headers={newHeaders} body={scores} sortScores={sortScores} />;
};

export default UpdateTable;
