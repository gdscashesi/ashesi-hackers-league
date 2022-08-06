//libraries
import { Navigate, Outlet } from "react-router-dom";

const TeamProtectedRoute = () => {
  const team = true;

  return <>{team ? <Outlet /> : <Navigate to="/" />}</>;
};

export default TeamProtectedRoute;
