import { useState, useEffect, useCallback } from "react";
import useGame from "../hooks/useGame";
import JudgeWinner from "../components/GameComponents/JudgeWinner";
import Playground from "../components/GameComponents/Playground";
import {
  iconPaper,
  iconRock,
  iconLizard,
  iconSpock,
  iconScissors,
} from "../images";

const OverallPlayground = ({ choices, difficulty, setScore, score }) => {
  const [game] = useGame();
  const [gameStart, setGameStart] = useState(game.startGame);
  const whoWon = game.whoWon;
  const handleStartGame = () => {
    setGameStart(true);
    game.startGame = gameStart;
  };
  const handleClick = (value) => {
    setGameStart(false);
    game.startGame = false;
    game.playerChoice = value;
  };
  const updateScore = () => {
    if (whoWon === "Player" && game.startGame === false) {
      setScore((prev) => prev + 1);
    }
  };
  useEffect(() => {
    updateScore();
  }, [whoWon]);

  const gameData = [
    {
      id: 1,
      name: "Rock",
      value: choices[0],
      icon: iconRock,
      handleClick: () => handleClick(choices[0]),
    },
    {
      id: 2,
      name: "Paper",
      value: choices[1],
      icon: iconPaper,
      handleClick: () => handleClick(choices[1]),
    },
    {
      id: 3,
      name: "Scissors",
      value: choices[2],
      icon: iconScissors,
      handleClick: () => handleClick(choices[2]),
    },
    {
      id: 4,
      name: "Spock",
      value: choices[3],
      icon: iconSpock,
      handleClick: () => handleClick(choices[3]),
    },
    {
      id: 5,
      name: "Lizard",
      value: choices[4],
      icon: iconLizard,
      handleClick: () => handleClick(choices[4]),
    },
  ];
  return (
    <>
      <div className="playground">
        {gameStart ? (
          <Playground
            choices={choices}
            difficulty={difficulty}
            gameData={gameData}
          />
        ) : !gameStart ? (
          <JudgeWinner
            choices={choices}
            gameData={gameData}
            handleStartGame={handleStartGame}
          />
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default OverallPlayground;
