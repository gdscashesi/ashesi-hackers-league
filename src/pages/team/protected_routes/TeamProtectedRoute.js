//libraries
import { Navigate, Outlet } from "react-router-dom";

const TeamProtectedRoute = () => {
	const team = null;

	return <>{team ? <Outlet /> : <Navigate to="/" />}</>;
};

export default TeamProtectedRoute;
