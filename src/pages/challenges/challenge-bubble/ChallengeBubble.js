import { Link } from "react-router-dom";

import challengeBubbleStyles from "./challenge-bubble.module.scss";

const ChallengeBubble = ({ id, route, css }) => {
  const BOBBLE_AVAILABLE = "bubble";
  return (
    <div className={challengeBubbleStyles[css]}>
      {css === BOBBLE_AVAILABLE ? (
        <Link to={route}>{id}</Link>
      ) : (
        <div>{id}</div>
      )}
    </div>
  );
};

export default ChallengeBubble;
