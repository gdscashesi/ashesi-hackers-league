export const AlgorithmsTextArea = ({ onChange }) => {
  return (
    <textarea
      name="algorithms"
      placeholder="algorithms"
      onChange={onChange}
    ></textarea>
  );
};
export const ScriptingTextArea = ({ onChange }) => {
  return (
    <textarea
      name="scripting"
      placeholder="scripting"
      onChange={onChange}
    ></textarea>
  );
};
export const SqlTextArea = ({ onChange }) => {
  return <textarea name="sql" placeholder="sql" onChange={onChange}></textarea>;
};
