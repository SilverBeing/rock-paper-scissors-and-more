import { gameContext } from "../context/GameContext";
import { useContext } from "react";

const useGame = () => {
  return useContext(gameContext);
};

export default useGame;
