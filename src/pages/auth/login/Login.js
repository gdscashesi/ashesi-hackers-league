//library
import React from "react";
import { Link } from "react-router-dom";

//images
import Trophy from "media/trophy.png";
import BlueCode from "media/code.png";

//styles
import loginStyles from "./loginStyles.module.scss";
import Button from "components/button/Button";

function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const teamName = e.target.teamName.value;
    const token = e.target.token.value;

    if (teamName && token) {
      authenticateTeam();
      return;
    }

    alert("please enter all fields");
  };

  const authenticateTeam = () => {
    // firebase auth
  };

  const [TEXT, PASSWORD, TOKEN, LOGIN, TEAM_NAME_, TEAM_NAME] = [
    "text",
    "password",
    "token",
    "login",
    "teamName",
    "team name",
  ];

  return (
    <div className={loginStyles.wrapper}>
      <div className={loginStyles.headline}>
        <h1>Login</h1>
      </div>

      <div className={loginStyles.loginForm}>
        <form onSubmit={handleSubmit}>
          <input type={TEXT} name={TEAM_NAME_} placeholder={TEAM_NAME} />
          <input type={PASSWORD} name={TOKEN} placeholder={TOKEN} />
          <Button text={LOGIN} />
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
