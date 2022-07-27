//libraries
import { Navigate, Outlet } from "react-router-dom";

export const AdminProtectedRoute = () => {

    const admin = null;

    return <>
        {admin ? <Outlet /> : <Navigate to="/" />}
        </>;
  };