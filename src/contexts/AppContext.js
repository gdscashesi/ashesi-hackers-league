// libraries
import { createContext, useState, useEffect } from "react";
import { AHL_DB } from "firebase-config";
import { collection, getDocs, addDoc } from "firebase/firestore";

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
// (async () => {
//   await addDoc(collection(AHL_DB, "teams"), {
//     id: "HOLOCAUST",
//     name: "Zulu Sonics",
//     members: [
//       {
//         name: "Michel Appa",
//         email: "michael.appa@ashesi.edu.gh",
//       },
//       {
//         name: "Solomon Grandy",
//         email: "solomon.grandy@ashesi.edu.gh",
//       },
//       {
//         name: "Kakashi Hatake",
//         email: "kakashi.hatake@ashesi.edu.gh",
//       },
//     ],
//     password: "$fddfd179%",
//   });
// })();

sessionStorage.setItem("scores", JSON.stringify(teamScores));
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

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AppContext.Provider value={{ headers, scores, sortScores, teams }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
