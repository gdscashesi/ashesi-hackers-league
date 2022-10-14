// libraries
import { createContext, useState, useEffect } from "react";
import { AHL_DB } from "firebase-config";
import { collection, doc, getDocs } from "firebase/firestore";

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
  const [teams, setTeams] = useState([]);

  const sortScores = (key) => {
    setScores(sortTable(teamScores, key));
  };

  const teamsCollectionRef = collection(AHL_DB, "teams");

  useEffect(() => {
    const getTeams = async () => {
      const teamsData = await getDocs(teamsCollectionRef);
      setTeams(teamsData.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getTeams();
    console.log(teams);
  }, []);

  return (
    <AppContext.Provider value={{ headers, scores, sortScores, teams }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
