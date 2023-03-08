import { createContext, useState } from "react";

export const gameContext = createContext();

const GameContextProvider = ({ children }) => {
  const [game, setGame] = useState({
    startGame: true,
    playerChoice: "",
    computerChoice: "",
    whoWon: "",
    difficulty: "easy",
  });

  return (
    <gameContext.Provider value={[game, setGame]}>
      {children}
    </gameContext.Provider>
  );
};

export default GameContextProvider;
