import { useState } from "react";
import { imageRulesBonus, imageRules } from "../images";
import useGame from "../hooks/useGame";
import OverallPlayground from "./OverallPlayground";
import Rules from "./Rules";

const GameBody = ({ score, setScore }) => {
  const [game] = useGame();
  const [difficulty, setDifficulty] = useState(game.difficulty);

  const choices =
    game.difficulty === "easy"
      ? ["Rock", "Paper", "Scissors"]
      : ["Rock", "Paper", "Scissors", "Spock", "Lizard"];

  console.log("....rendering");

  return (
    <>
      <OverallPlayground
        choices={choices}
        difficulty={difficulty}
        setScore={setScore}
        score={score}
      />

      <div className="settings">
        <Rules
          difficulty={difficulty}
          setDifficulty={setDifficulty}
          choices={choices}
          image={
            difficulty === "easy"
              ? imageRules
              : difficulty === "hard"
              ? imageRulesBonus
              : ""
          }
        />
      </div>
    </>
  );
};

export default GameBody;
