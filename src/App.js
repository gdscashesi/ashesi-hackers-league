// libraries
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// components
import Home from "pages/home/Home";
import Login from "pages/auth/login/Login";
import Register from "pages/auth/register/Register";
import Rankings from "pages/rankings/Rankings";
import Challenges from "pages/challenges/Challenges";
import PageNotFound from "pages/errors/error4O4/PageNotFound";

// styles
import appStyles from "scss/app.module.scss";
import Test from "components/Table/Test";

// utils

function App() {
  return (
    <Router>
      <div>
        <Routes className={appStyles}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/rankings" element={<Rankings />} />
          <Route path="/challenges" element={<Challenges />} />
          <Route path="/test" element={<Test/>} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
