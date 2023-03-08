import { useState, useRef } from "react";
import useGame from "../hooks/useGame";
import useOnClickOutside from "../hooks/useClickOutside";

const Rules = ({ setDifficulty, image }) => {
  const [game] = useGame();
  const [dropdown, setDropdown] = useState(false);
  const [modal, setModal] = useState();
  const modalref = useRef();
  useOnClickOutside(modalref, () => setModal(false));

  const handleDifficulty = (value) => {
    setDifficulty(value);
    game.difficulty = value;
    setDropdown((prev) => !prev);
  };
  const handleModal = () => {
    setModal(!modal);
  };
  return (
    <>
      {modal && (
        <div className="modal" ref={modalref}>
          <img src={image} alt="rules" />
        </div>
      )}
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
