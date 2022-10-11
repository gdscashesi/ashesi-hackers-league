//libraries
import { createContext, useState } from "react";

export const AdminContext = createContext();

export const AdminContextProvider = ({ children }) => {
  //waiting for json server to simulate data fetching
  const [admin] = useState({ context: "yeppp the context workssss" }); //dummy to cater for provider value prop
  // setAdmin(null)

  return (
    <AdminContext.Provider value={{ admin }}>{children}</AdminContext.Provider>
  );
};

export default AdminContext;
