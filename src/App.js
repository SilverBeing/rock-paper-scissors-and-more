import { useState } from "react";
import GameBody from "./components/GameBody";

import Score from "./components/Score";

function App() {
  const [score, setScore] = useState(0);
  return (
    <div className="main">
      <Score score={score} />
      <GameBody score={score} setScore={setScore} />
    </div>
  );
}

export default App;
