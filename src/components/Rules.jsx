import { useState } from "react";
import useGame from "../hooks/useGame";

const Rules = ({ handleModal, setDifficulty }) => {
  const [game] = useGame();
  const [dropdown, setDropdown] = useState(false);

  const handleDifficulty = (value) => {
    setDifficulty(value);
    game.difficulty = value;
    setDropdown((prev) => !prev);
  };

  return (
    <>
      <div className="modal-button">
        <button onClick={handleModal} className="rules">
          Rules
        </button>
        <div className="diff">
          <button className="select" onClick={() => setDropdown(!dropdown)}>
            Select Difficulty
          </button>
          {dropdown && (
            <div className="dropdown">
              <button onClick={() => handleDifficulty("easy")}>Easy</button>
              <button onClick={() => handleDifficulty("hard")}>Hard</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Rules;
