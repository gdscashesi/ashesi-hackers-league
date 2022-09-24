// libraries
import { createContext, useState } from "react";

// utils
import { headers, teamScores } from "utils/data";
import { sortTable } from "utils/functions";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [scores, setScores] = useState(teamScores);
  console.log(scores);

  const sortScores = (key) => {
    setScores([...sortTable(teamScores, key)]);
  };

  return (
    <AppContext.Provider value={{ headers, scores, sortScores }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;
