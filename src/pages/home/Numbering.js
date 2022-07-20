const Numbering = () => {
  let numbers = Array(30)
    .fill()
    .map((v, i) => ++i);

  return (
    <div
      style={{
        display: "flex",
        flexFlow: "column",
        position: "absolute",
        left: "0",
        top: "0",
        fontSize: "120%",
        padding: "0.2rem 0.4rem",
        lineHeight: "2.5rem",
        maxHeight: "100%",
        overflow: "hidden",
        opacity: "0.5",
      }}
    >
      {[...numbers].map((num) => (
        <div key={num}>{num}</div>
      ))}
    </div>
  );
};

export default Numbering;
