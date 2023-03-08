import { useState, useEffect } from "react";
import { logo } from "../images";

const Score = ({ score }) => {
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
