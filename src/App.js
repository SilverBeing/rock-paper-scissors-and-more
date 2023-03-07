import { useState, useRef } from "react";
import Playground from "./components/GameComponents/Playground";
import RulesModal from "./components/GameComponents/RulesModal";
import Rules from "./components/Rules";
import Score from "./components/Score";

import useGame from "./hooks/useGame";
import JudgeWinner from "./components/GameComponents/JudgeWinner";
import {
  iconPaper,
  iconRock,
  iconLizard,
  iconSpock,
  iconScissors,
  imageRulesBonus,
  imageRules,
} from "./images";

function App() {
  const [modal, setModal] = useState(false);
  const [game] = useGame();
  const [difficulty, setDifficulty] = useState(game.difficulty);
  const [gameStart, setGameStart] = useState(game.startGame);

  const choices =
    game.difficulty === "easy"
      ? ["Rock", "Paper", "Scissors"]
      : ["Rock", "Paper", "Scissors", "Spock", "Lizard"];
  const handleModal = () => {
    setModal(!modal);
  };
  const handleStartGame = () => {
    setGameStart(true);
    game.startGame = gameStart;
  };
  const handleClick = (value) => {
    setGameStart(false);
    game.startGame = false;
    game.playerChoice = value;
  };
  console.log(gameStart);
  console.log(game.startGame);
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
    <div className="main">
      <Score />
      <RulesModal
        modal={modal}
        image={
          difficulty === "easy"
            ? imageRules
            : difficulty === "hard"
            ? imageRulesBonus
            : ""
        }
        setModal={setModal}
      />
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
      <div className="settings">
        <Rules
          handleModal={handleModal}
          difficulty={difficulty}
          setDifficulty={setDifficulty}
          choices={choices}
        />
      </div>
    </div>
  );
}

export default App;
