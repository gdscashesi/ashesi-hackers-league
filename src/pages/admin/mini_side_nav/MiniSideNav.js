//libraries
import React, { useEffect, useState } from "react";

//components
import Button from "components/button/Button";
import {
	AlgorithmsTextArea,
	ScriptingTextArea,
	SqlTextArea,
} from "./TextAreas";

// utils
import { ALGORITHMS, SCRIPTING, SQL } from "utils/constants";

const MiniSideNav = () => {
	const [currentTextArea, setCurrentTextArea] = useState(ALGORITHMS);
	const handleNavClick = (e) => setCurrentTextArea(e.target.innerText);
	const [questionContent, setQuestionContent] = useState({
		[ALGORITHMS]: "",
		[SCRIPTING]: "",
		[SQL]: "",
	});

	useEffect(() => {
		const savedQuestions = JSON.parse(
			localStorage.getItem("questionContent")
		);
		if (savedQuestions) {
			setQuestionContent(savedQuestions);
		}
	}, []);

	const updateQuestionState = (questionType, content) => {
		setQuestionContent({
			...questionContent,
			[questionType]: content,
		});
		console.log(questionContent);
	};

	const storeQuestionContent = () => {
		localStorage.setItem(
			"questionContent",
			JSON.stringify(questionContent)
		);
	};

	const QUESTION_TYPE_COMPONENTS = {
		[ALGORITHMS]: (
			<AlgorithmsTextArea
				onChange={(e) =>
					updateQuestionState(e.target.name, e.target.value)
				}
				value={questionContent[ALGORITHMS]}
			/>
		),
		[SCRIPTING]: (
			<ScriptingTextArea
				onChange={(e) =>
					updateQuestionState(e.target.name, e.target.value)
				}
				value={questionContent[SCRIPTING]}
			/>
		),
		[SQL]: (
			<SqlTextArea
				onChange={(e) =>
					updateQuestionState(e.target.name, e.target.value)
				}
				value={questionContent[SQL]}
			/>
		),
	};

	return (
		<div>
			{Object.keys(QUESTION_TYPE_COMPONENTS).map((category) => (
				<Button
					key={category}
					text={category}
					onClick={handleNavClick}
				/>
			))}
			{QUESTION_TYPE_COMPONENTS[currentTextArea]}
			<Button text="save" onClick={storeQuestionContent}></Button>;
		</div>
	);
};

export default MiniSideNav;
