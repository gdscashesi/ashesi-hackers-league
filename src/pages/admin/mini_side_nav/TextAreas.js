export const AlgorithmsTextArea = ({ onChange, value }) => {
	return (
		<textarea
			name="algorithms"
			placeholder="algorithms"
			onChange={onChange}
			value={value}
		></textarea>
	);
};
export const ScriptingTextArea = ({ onChange, value }) => {
	return (
		<textarea
			name="scripting"
			placeholder="scripting"
			onChange={onChange}
			value={value}
		></textarea>
	);
};
export const SqlTextArea = ({ onChange, value }) => {
	return (
		<textarea
			name="sql"
			placeholder="sql"
			onChange={onChange}
			value={value}
		></textarea>
	);
};
