import React from "react";
import GameConsole from "./GameConsole";
import { bgGameTriangle } from "../../images";

const EasyMode = ({ easyGround }) => {
  return (
    <div className="easy-playground">
      <img src={bgGameTriangle} alt="Triangle" />
      <div className="cursor-container">
        {easyGround.map((easy) => (
          <>
            <GameConsole
              icon={easy.icon}
              handleClick={easy.handleClick}
              name={easy.name}
            />
          </>
        ))}
      </div>
    </div>
  );
};

export default EasyMode;
