// libraries
import React, { useState } from "react";

// components
import Button from "components/button/Button";


// styles
import teamStyles from "./team.module.scss";
import rankingsStyles from "../rankings/rankings.module.scss";
import { HOME } from "utils/constants";

// utils
import { dummyMembers } from "./utils/dummyData";
import { categoryRank } from "./utils/dummyData";
import { IMG_URL } from "./utils/dummyData";

const Team = () => {

  // Show "add member" button only when team is logged in
  // Initially set to False
  const [isLoggedIn, ] = useState(false);

  // A popup to add a new member to the team: *TENTATIVE*
  const handleAddMember = () => {
    prompt("Add a new member")
  }

  return (
    <div className={rankingsStyles.rankingsWrapper}>
      <div className={rankingsStyles.banner}>
          <h1>Team Profile</h1>

          <div>
            <Button text="Go back" to={HOME} />
            { isLoggedIn && <Button text="Add member" onClick={handleAddMember}/> }
          </div>
      </div>
      
    <div className={teamStyles.baseWrapper}>

		<div className={teamStyles.info}>
        <div className={teamStyles.itemOne}>
          <div className={teamStyles.imgWrapper}>
            <img alt="group_img" 
              src="https://img.icons8.com/color/48/null/european-dragon.png"/>
          </div>
        <div className={teamStyles.textWrapper}>
          <h3>Algo Maniacs</h3>
            <h4>Quad-team</h4>
            <h6>Created 12/03/23</h6>

        </div>

        </div>
 
        <div className={teamStyles.itemTwo}>
            <div className={teamStyles.itemWrapper}>
                <div className={teamStyles.centerText}>
                  <h2 className={teamStyles.number}>4</h2>
                </div>
                <span>members</span>
            </div>

            <div className={teamStyles.itemWrapper}>
                <div className={teamStyles.centerText}>
                  <h2 className={teamStyles.number}>5th</h2>
                </div>
                <span>overall ranking</span>
            </div>

            <div className={teamStyles.itemWrapper}>
                <div className={teamStyles.centerText}>
                  <h2 className={teamStyles.number}>70</h2>
                </div>
                <span>points gained</span>
            </div>
        </div>

		</div>

  
    <div className={teamStyles.divWrapper}>
        <div className={teamStyles.sc}>
            <h2>Team members</h2>
        <div className={teamStyles.members}>
          {
            dummyMembers.map((member) => {
                return ( 
                  <div className={teamStyles.section1}>
                    <div className="">
                        <img className={teamStyles.userPic} alt="user_pic"
                        src={IMG_URL}/>
                    </div>
                    <div className="">
                          <h4 className={teamStyles.userName}>{member}</h4>
                    </div>
                  </div>
              )
            })
          }

        </div>
        </div>
    </div>

    <div className={teamStyles.divWrapper}>
        <div className={teamStyles.sc}>
            <h2>Team rankings</h2>
        <div className={teamStyles.rankings}>
          {
            categoryRank.map((category) => {
                return (
                  <div className={teamStyles.section1}>
                      <div className="">
                          <img className={teamStyles.userPic} alt="user_pic"
                          src={category.icon}/>
                      </div>
                      <div className={teamStyles.scorePoint}>
                            <h4 className={teamStyles.userName}>{category.name}</h4>
                            <small className={teamStyles.rank}>Points: 200</small>
                            <small className={teamStyles.rank}>Rank: {category.rank}th</small>
                      </div>


                  </div>
                )
            })
          }
        </div>
        </div>
    </div>


    </div>






    </div>
  );
}

export default Team;
