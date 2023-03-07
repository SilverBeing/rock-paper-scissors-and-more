import React, { useCallback, useEffect, useState } from "react";
import useGame from "../../hooks/useGame";
import GameConsole from "./GameConsole";
import WhoWins from "./WhoWins";

const JudgeWinner = ({ gameData, handleStartGame, choices }) => {
  const [game] = useGame();
  const [computerChoice, setComputerChoice] = useState(game.computerChoice);
  const playerChoice = game.playerChoice;

  const playerOne = gameData.filter((player) => player.value === playerChoice);
  const computerPlays = gameData.filter(
    (computer) => computer.value === computerChoice
  );
  const computerPicks = Math.ceil(Math.random() * choices.length - 1);
  const startComputer = () => {
    const result = choices.at(computerPicks);
    setComputerChoice(result);
    game.computerChoice = result;
  };

  useEffect(() => {
    startComputer();
  }, []);

  return (
    <div className="judge-container">
      <div>
        {playerChoice &&
          playerOne.map((choice) => (
            <GameConsole
              name={choice.name}
              icon={choice.icon}
              player={"You Picked"}
            />
          ))}
      </div>
      <div>
        {playerChoice && computerChoice ? (
          <WhoWins handleStartGame={handleStartGame} />
        ) : (
          ""
        )}
      </div>
      <div>
        {computerChoice &&
          computerPlays.map((choice) => (
            <GameConsole
              name={choice.name}
              icon={choice.icon}
              player={"Computer Picked"}
            />
          ))}
      </div>
    </div>
  );
};

export default JudgeWinner;
