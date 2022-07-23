import ChallengeBubble from "./challenge-bubble/ChallengeBubble";
import challengesStyles from "./challenges.module.scss";

import { useState } from "react";

const Challenges = () => {
  const seasons = ["spring-2023", "fall-2022", "spring-2021", "fall-2020"];
  const [currentSeason, setCurrentSeason] = useState("spring-2023");
  const challengesCount = 7;
  const totalCount = 12;

  return (
    <div className={challengesStyles.wrapper}>
      <div>
        <h1>Challenges</h1>
        <select
          name=""
          id=""
          onChange={(e) => setCurrentSeason(e.target.value)}
        >
          {seasons.map((season) => (
            <option value={season} key={season}>
              {season}
            </option>
          ))}
        </select>
      </div>
      <div className={challengesStyles.challengesList}>
        {Array(challengesCount)
          .fill(0)
          .map((challenges, id) => (
            <ChallengeBubble
              key={id}
              route={`/${currentSeason}/${id}`}
              id={id}
              st={`${
                id > totalCount - challengesCount ? "bubbleGrey" : "bubble"
              }`}
            />
          ))}
      </div>
    </div>
  );
};

export default Challenges;
