/*eslint-disable */
import { useEffect, useState } from "react";
import useGame from "../../hooks/useGame";

const WhoWins = ({ handleStartGame }) => {
  const [game] = useGame();
  const [winner, setWinner] = useState();
  const playerChoice = game.playerChoice;

  const handleWinner = (value) => {
    setWinner(value);
    game.whoWon = value;
  };

  const winProtocol = {
    Rock: ["Scissors", "Lizard"],
    Paper: ["Rock", "Spock"],
    Scissors: ["Paper", "Lizard"],
    Lizard: ["Spock", "Paper"],
    Spock: ["Scissors", "Rock"],
  };
  const win = () => {
    if (playerChoice === game.computerChoice) {
      return handleWinner("Nobody");
    }
    if (winProtocol[playerChoice].includes(game.computerChoice)) {
      return handleWinner("Player");
    } else {
      return handleWinner("Computer");
    }
  };

  useEffect(() => {
    win();
  }, [game.startGame, game.computerChoice, game.playerChoice]);

  return (
    <div className="win-board">
      <p>
        {winner === "Player"
          ? "YOU WIN"
          : winner === "Computer"
          ? "YOU LOSE"
          : "IT'S A TIE"}
      </p>

      <button onClick={handleStartGame}>Restart</button>
    </div>
  );
};

export default WhoWins;
