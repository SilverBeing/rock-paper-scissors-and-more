import EasyMode from "./EasyMode";
import HardMode from "./HardMode";

const Playground = ({ difficulty, choices, gameData }) => {


  const easyPlayground = gameData.slice(0, 3);
  return (
    <>
      {difficulty === "easy" ? (
        <EasyMode easyGround={easyPlayground} />
      ) : difficulty === "hard" ? (
        <HardMode hardGround={gameData} />
      ) : (
        ""
      )}
    </>
  );
};

export default Playground;
