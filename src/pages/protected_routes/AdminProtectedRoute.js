//libraries
import { Navigate, Outlet } from "react-router-dom";

const AdminProtectedRoute = () => {
  //getting admin from state management, but null for now
  const admin = true;

  return <>{admin ? <Outlet /> : <Navigate to="/" />}</>;
};

export default AdminProtectedRoute;
