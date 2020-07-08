import React from "react";

const Result = ({score, playAgain}) => (
  <div className="scoreboard">
    <div className="score">You scored {score} / 10 correct answers!</div>
    <button className="playBtn" onClick={playAgain}>
      Play again?
    </button>
  </div>
);

export default Result;
