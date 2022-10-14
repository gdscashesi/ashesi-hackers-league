// libraries
import { createContext, useState, useEffect } from "react";
import { AHL_DB } from "firebase-config";
import { collection, getDocs } from "firebase/firestore";

// utils
import { headers, teamScores } from "utils/data";
import { sortTable } from "utils/functions";

export const AppContext = createContext();

/**
 * TODO : pre-fetch table data
 * TODO : pre-fetch current season's data (all its questions)
 * TODO : set team names to empty array
 * TODO : Dynamically upate the context with post-fetched data
 */

function AppContextProvider({ children }) {
  const [scores, setScores] = useState(teamScores);
  // console.log(scores);

  const sortScores = (key) => {
    setScores(sortTable(teamScores, key));
  };

  const teamsCollectionRef = collection(AHL_DB, "teams");

  useEffect(() => {
    const getTeams = async () => {
      const teams = await getDocs(teamsCollectionRef);
      console.log(teams);
    };

    getTeams();
  }, []);

  return (
    <AppContext.Provider value={{ headers, scores, sortScores }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
