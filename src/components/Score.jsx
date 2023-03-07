import useGame from "../hooks/useGame";
import { useState, useEffect } from "react";
import { logo } from "../images";

const Score = () => {
  const [game] = useGame();
  const [score, setScore] = useState(game.score);
  const updateScore = () => {
    if (game.whoWon === "Player") {
      setScore((prev) => prev + 1);
      // game.score = score;
      // console.log(score);
      // console.log(game.score);
    }
  };
  useEffect(() => {
    updateScore();
  }, [game.whoWon]);
  return (
    <div className="score-container">
      <div className="score-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="score">
        <p>SCORE</p>
        <h1>{score}</h1>
      </div>
    </div>
  );
};

export default Score;
