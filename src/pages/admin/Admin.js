import { useContext } from "react";

import { AdminContext } from "contexts/AdminContext";

const Admin = () => {
  const { admin } = useContext(AdminContext);
  return (
    <div>
      <h3>{admin["context"]}</h3>
    </div>
  );
};

export default Admin;
