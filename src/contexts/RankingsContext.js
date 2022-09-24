// libraries
import { createContext, useState } from "react";

// utils
import { headers, teamScores } from "utils/data";
import { sortTable } from "utils/functions";

const RankingsContext = createContext();

export function RankingsProvider({ children }) {
  const [scores, setScores] = useState(teamScores);
  console.log(scores);

  const sortScores = (key) => {
    setScores([...sortTable(teamScores, key)]);
  };

  return (
    <RankingsContext.Provider value={{ headers, scores, sortScores }}>
      {children}
    </RankingsContext.Provider>
  );
}

export default RankingsContext;
