import { Link } from "react-router-dom";

import challengeBubbleStyles from "./challenge-bubble.module.scss";

const ChallengeBubble = ({ id, route, st }) => {
  return (
    <div className={challengeBubbleStyles[st]}>
      {st === "bubble" ? <Link to={route}>{id}</Link> : <div>{id}</div>}
    </div>
  );
};

export default ChallengeBubble;
