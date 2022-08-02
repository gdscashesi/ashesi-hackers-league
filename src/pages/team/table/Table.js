import React from "react";

import tableStyles from "./table.module.scss";

const Table = ({ headers, body }) => {
  return (
    <div className={tableStyles.tableWrapper}>
      <table cellSpacing="0">
        <thead>
          <tr>
            {headers?.map((headName, index) => {
              return <th key={index}>{headName}</th>;
            }) ?? <div>loading...</div>}
          </tr>
        </thead>
        <tbody>
          {body?.map((data, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{data.name}</td>
              <td>{data.algorithms}</td>
              <td>{data.scripting}</td>
              <td>{data.sql}</td>
              <td>{data.algorithms + data.scripting + data.sql}</td>
            </tr>
          )) ?? <div>loading...</div>}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
