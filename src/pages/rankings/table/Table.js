import React, { useState } from "react";

import tableStyles from "./table.module.scss";

const Table = ({ headers, body, sortScores }) => {
  const [col,setCol] = useState(0);
  return (
    <div className={tableStyles.tableWrapper}>
      <table cellSpacing="0">
        <colgroup>
          <col span={col} style={{"background-color":"#ffff"}} />
          <col span={1} style={{"background-color": "#FAFAFA"}} />
        </colgroup>
        <thead>
          <tr>
            {headers?.map((headName, index) => {
              return (
                <th
                  title="sort"
                  onClick={() => {sortScores(headName.toLowerCase());setCol(index)}}
                  key={index}
                >
                  {headName}
                </th>
              );
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
