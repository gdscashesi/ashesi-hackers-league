// libraries
import { createContext, useState } from "react";

// utils
import { headers, teamScores } from "utils/data";
import { sortTable } from "utils/functions";

<<<<<<< HEAD
export const AppContext = createContext();
=======
const AppContext = createContext();
>>>>>>> 9b9096a768ffff0b50fb550ddbcf840b78413406

/**
 * TODO : pre-fetch table data
 * TODO : pre-fetch current season's data (all its questions)
 * TODO : set team names to empty array
 * TODO : Dynamically upate the context with post-fetched data
 */

<<<<<<< HEAD
function AppContextProvider({ children }) {
  const [scores, setScores] = useState(teamScores);
  // console.log(scores);
=======
export function AppProvider({ children }) {
  const [scores, setScores] = useState(teamScores);
  console.log(scores);
>>>>>>> 9b9096a768ffff0b50fb550ddbcf840b78413406

  const sortScores = (key) => {
    setScores(sortTable(teamScores, key));
  };

  return (
    <AppContext.Provider value={{ headers, scores, sortScores }}>
      {children}
    </AppContext.Provider>
  );
}

<<<<<<< HEAD
export default AppContextProvider;
=======
export default AppContext;
>>>>>>> 9b9096a768ffff0b50fb550ddbcf840b78413406
