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

// utils
import {
  HOME,
  LOGIN,
  REGISTER,
  RANKINGS,
  CHALLENGES,
  SINGLE_CHALLENGE,
  SANDBOX,
  PAGE_NOT_FOUND,
} from "utils/constants";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={HOME} element={<Home />} />
        <Route path={LOGIN} element={<Login />} />
        <Route path={REGISTER} element={<Register />} />
        <Route path={RANKINGS} element={<Rankings />} />
        <Route path={CHALLENGES} element={<Challenges />} />
        <Route path={SINGLE_CHALLENGE} element={<SingleChallenge />} />
        <Route path={SANDBOX} element={<Sandbox />} />
        <Route path={PAGE_NOT_FOUND} element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
