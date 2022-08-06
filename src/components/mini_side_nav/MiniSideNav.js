//libraries
import React, { useState } from "react";

//components
import Button from "components/button/Button";

//styles
import SideNavStyles from "./mini-sidenav.module.scss";

const MiniSideNav = () => {
	const [current, setCurrent] = useState("algorithms");

	const handleClick = (e) => {
		setCurrent(e.target.innerText);
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

	const questionTypes = ["algorithms", "scripting", "sql"];
	const questionTypeComponents = {
		algorithms: AlgorithmsTextArea,
		scripting: ScriptingTextArea,
		sql: SqlTextArea,
	};

	let textbox;
	if (questionTypes.includes(current)) {
		textbox = questionTypeComponents[current];
	}

	return (
		<div>
			{questionTypes.map((category) => {
				return (
					<Button
						key={category}
						text={category}
						onClick={handleClick}
					></Button>
				);
			})}
			{textbox}
		</div>
	);
};

export default MiniSideNav;
