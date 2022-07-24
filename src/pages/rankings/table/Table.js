import React from "react";

import tableStyles from "./table.module.scss";

const Table = ({ headers, body, width = "auto", height = "auto" }) => {
  return (
    <div className={tableStyles.tableWrapper}>
      <table
        style={{ padding: "10px 10px", width: width, height: height }}
        cellSpacing="0"
      >
        <thead>
          <tr>
            {headers?.map((headName, index) => {
              return <th key={index}>{headName}</th>;
            })}
          </tr>
        </thead>
        <tbody></tbody>
        {Object.values(body)?.map((data, index) => {
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{data.name}</td>
              <td>{data.algorithms}</td>
              <td>{data.scripting}</td>
              <td>{data.sql}</td>
              <td>{data.algorithms + data.scripting + data.sql}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Table;
