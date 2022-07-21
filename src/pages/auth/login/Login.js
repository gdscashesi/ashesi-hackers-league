//library
import React, { useState } from "react";
import { Link } from "react-router-dom";

//images
import Trophy from "media/trophy.png";
import BlueCode from "media/code.png";

//styles
import loginStyles from "./loginStyles.module.scss";

function Login() {
	const [teamName, setTeamName] = useState("");
	const [token, setToken] = useState("");
	const [errorTeamName, setErrorTeamName] = useState("");
	const [errorToken, setErrorToken] = useState("");

	const handleSubmit = (e) => {
		if (!teamName) {
			setErrorTeamName("*team name is required");
		}
		if (!token) {
			setErrorToken("*token is required");
		}
	};

	return (
		<div className={loginStyles.wrapper}>
			<div className={loginStyles.headline}>
				<h1>Login</h1>
			</div>

			<div className={loginStyles.loginForm}>
				<form action="" onSubmit={handleSubmit}>
					<span>{errorTeamName}</span>
					<input
						type="text"
						name="teamName"
						placeholder="team name"
						value={teamName}
						onChange={(e) => setTeamName(e.target.value)}
					/>

					<span>{errorToken}</span>
					<input
						type="password"
						name="token"
						placeholder="token"
						value={token}
						onChange={(e) => setToken(e.target.value)}
					/>

					<button type="submit">login</button>
					<p>
						wanna compete? &nbsp;
						<Link to="/register">register your team</Link>
					</p>
				</form>
			</div>

			<div className={loginStyles.codeTrophy}>
				<img src={Trophy} alt={Trophy} />
				<img src={BlueCode} alt={BlueCode} />
			</div>
		</div>
	);
}

export default Login;
