//libraries
import React, { useState } from "react";

//styles
import SideNavStyles from "./mini-sidenav.module.scss";

const MiniSideNav = () => {
	const [current, setCurrent] = useState("algorithms");

	const handleClick = (e) => {
		setCurrent(e.target.id);
	};

	const AlgorithmsTextArea = () => {
		return <textarea name="algorithms" placeholder="algo"></textarea>;
	};

	const ScriptingTextArea = () => {
		return <textarea name="scripting" placeholder="scripting"></textarea>;
	};

	const SqlTextArea = () => {
		return <textarea name="sql" placeholder="sql"></textarea>;
	};

	return (
		<div>
			<input
				type="radio"
				name="question"
				id="algorithms"
				onClick={handleClick}
				className={SideNavStyles.hide}
			/>
			<label htmlFor="algorithms">algorithms</label>
			<input
				type="radio"
				name="question"
				id="scripting"
				onClick={handleClick}
				className={SideNavStyles.hide}
			/>
			<label htmlFor="scripting">scripting</label>
			<input
				type="radio"
				name="question"
				id="sql"
				onClick={handleClick}
				className={SideNavStyles.hide}
			/>
			<label htmlFor="sql">sql</label>
			{current === "algorithms" && <AlgorithmsTextArea />}
			{current === "scripting" && <ScriptingTextArea />}
			{current === "sql" && <SqlTextArea />}
		</div>
	);
};

export default MiniSideNav;
