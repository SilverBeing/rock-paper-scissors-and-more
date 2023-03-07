import useGame from "../../hooks/useGame";

const GameConsole = ({ name, icon, handleClick, player }) => {
  console.log(name);
  const [game] = useGame();

  return (
    <div className={`cursor `}>
      <h1>{player}</h1>
      <div
        className={`cursor-outer-layer ${
          name === "Rock"
            ? "red-bg"
            : name === "Paper"
            ? "blue-bg"
            : name === "Scissors"
            ? "yellow-bg"
            : name === "Spock"
            ? "light-blue-bg"
            : name === "Lizard"
            ? "purple-bg"
            : ""
        } `}
      >
        <div
          className={`cursor-middle-layer ${
            name === "Rock"
              ? "red-bg"
              : name === "Paper"
              ? "blue-bg"
              : name === "Scissors"
              ? "yellow-bg"
              : name === "Spock"
              ? "light-blue-bg"
              : name === "Lizard"
              ? "purple-bg"
              : ""
          }`}
        >
          <div
            className={`cursor-inner-layer ${
              name === "Rock"
                ? "red-bg"
                : name === "Paper"
                ? "blue-bg"
                : name === "Scissors"
                ? "yellow-bg"
                : name === "Spock"
                ? "light-blue-bg"
                : name === "Lizard"
                ? "purple-bg"
                : ""
            }`}
          >
            <div className="cursor-last-layer">
              <div>
                <button onClick={handleClick}>
                  <img src={icon} alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameConsole;
