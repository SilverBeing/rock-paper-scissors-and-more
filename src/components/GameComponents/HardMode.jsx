import React from "react";
import { bgGamePentagon } from "../../images";
import GameConsole from "./GameConsole";

const HardMode = ({ hardGround }) => {
  return (
    <div className="hard-playground">
      <img src={bgGamePentagon} alt="" />
      <div className="hard-cursor-container">
        {
          <>
            <div className="first">
              <GameConsole
                icon={hardGround[0].icon}
                handleClick={hardGround[0].handleClick}
                name={hardGround[0].name}
              />
            </div>
            <div className="second-third">
              <div className="first">
                <GameConsole
                  icon={hardGround[1].icon}
                  handleClick={hardGround[1].handleClick}
                  name={hardGround[1].name}
                />
              </div>
              <div className="first">
                <GameConsole
                  icon={hardGround[2].icon}
                  handleClick={hardGround[2].handleClick}
                  name={hardGround[2].name}
                />
              </div>
            </div>
            <div className="forth-fifth">
              <div className="first">
                <GameConsole
                  icon={hardGround[3].icon}
                  handleClick={hardGround[3].handleClick}
                  name={hardGround[3].name}
                />
              </div>
              <div className="first">
                <GameConsole
                  icon={hardGround[4].icon}
                  handleClick={hardGround[4].handleClick}
                  name={hardGround[4].name}
                />
              </div>
            </div>
          </>
        }
      </div>
    </div>
  );
};

export default HardMode;
