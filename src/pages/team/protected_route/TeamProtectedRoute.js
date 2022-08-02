//libraries
import { Navigate, Outlet } from "react-router-dom";

export const TeamProtectedRoute = () => {

    // This is a temporary "token" for testing, by default it should be NULL
    const isTeam = "indie-hackers"; // default: NULL prevents access to page

    return <>
        {
            isTeam ? <Outlet /> : <Navigate to="/" />
        }
        </>;
  };