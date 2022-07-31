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
import Team from "pages/team/Team";
import { AdminProtectedRoute } from "pages/admin/protected_routes/AdminProtectedRoute";
import { TeamProtectedRoute } from "pages/team/protected_routes/TeamProtectedRoute";

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
				<Route element={<AdminProtectedRoute />}>
					<Route path={ADMIN} element={<Admin />} />
				</Route>
				<Route element={<TeamProtectedRoute />}>
					<Route path={TEAM} element={<Team />} />
				</Route>
				<Route path={PAGE_NOT_FOUND} element={<PageNotFound />} />
			</Routes>
		</Router>
	);
}

export default App;
