import React from "react";
import "./CSS/card.css";
import Bg from "../image/02-sec-screen.svg";

const GameOver = ({ restartGame }) => {
  return (
    <div className="main-screen" style={{ backgroundImage: `url(${Bg})` }}>
    {/* <div className="centered"> */}
      <h1>Congrats!</h1>
      <button className="restart-button" onClick={restartGame}>
        Play Again?
      </button>
    </div>
    // </div>
  );
};

export default GameOver;
