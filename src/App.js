// libraries
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// components
import Home from "pages/home/Home";
import Login from "pages/auth/login/Login";
import Register from "pages/auth/register/Register";
import Rankings from "pages/rankings/Rankings";
import Challenges from "pages/challenges/Challenges";
import SingleChallenge from "pages/single_challenge/SingleChallenge";
import Sandbox from "pages/sandbox/Sandbox";  
import PageNotFound from "pages/errors/page_not_found/PageNotFound";
import Admin from "pages/admin/Admin";
import Create from "pages/admin/create/Create";
import Published from "pages/admin/published/Published";
import UpdateTable from "pages/admin/update_table/UpdateTable";
import Team from "pages/team/Team";
import AdminProtectedRoute from "pages/protected_routes/AdminProtectedRoute";
import TeamProtectedRoute from "pages/protected_routes/TeamProtectedRoute";
import Settings from "pages/admin/settings/Settings";

// utils
import {
  HOME,
  LOGIN,
  REGISTER,
  RANKINGS,
  CHALLENGES,
  SINGLE_CHALLENGE,
  SANDBOX,
  ADMIN,
  TEAM,
  PAGE_NOT_FOUND,
  CREATE,
  PUBLISHED,
  SETTINGS,
  UPDATE_TABLE,
} from "utils/constants";

// contexts
import AppContextProvider from "contexts/AppContext";

function App() {
  return (
    <AppContextProvider>
      <Router>
        <Routes>
          <Route path={HOME} element={<Home />} />
          <Route path={LOGIN} element={<Login />} />
          <Route path={REGISTER} element={<Register />} />
          <Route path={RANKINGS} element={<Rankings />} />
          <Route path={CHALLENGES} element={<Challenges />} />
          <Route path={SINGLE_CHALLENGE} element={<SingleChallenge />} />
          <Route path={SANDBOX} element={<Sandbox />} />
          <Route element={<TeamProtectedRoute />}>
            <Route path={TEAM} element={<Team />} />
          </Route>
          <Route path={ADMIN} element={<AdminProtectedRoute />}>
            <Route index element={<Admin />} />
            <Route path={CREATE} element={<Create />} />
            <Route path={PUBLISHED} element={<Published />} />
            <Route path={UPDATE_TABLE} element={<UpdateTable />} />
            <Route path={SETTINGS} element={<Settings />} />
          </Route>
          <Route path={PAGE_NOT_FOUND} element={<PageNotFound />} />
        </Routes>
      </Router>
    </AppContextProvider>
  );
}

export default App;
