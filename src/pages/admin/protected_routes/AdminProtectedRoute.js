//libraries
import { Navigate, Outlet } from "react-router-dom";

export const AdminProtectedRoute = () => {

    //getting admin from state management, but null for now
    const admin = null;

    return <>
        {admin ? <Outlet /> : <Navigate to="/" />}
        </>;
  };