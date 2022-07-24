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
import PageNotFound from "pages/errors/error4O4/PageNotFound";

// utils

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/rankings" element={<Rankings />} />
        <Route path="/challenges" element={<Challenges />} />
        <Route path="/challenges/:id" element={<SingleChallenge />} />
        <Route path="/sandbox" element={<Sandbox />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
