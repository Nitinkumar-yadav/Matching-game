import React from "react";
import Icon from '../image/card/red-heart.svg';
import apple from '../image/card/apple.svg';
import banana from '../image/card/banana.svg';
import orange from '../image/card/orange.svg';

const Card = ({ id, name, flipped, matched, clicked }) => {
  return (
    <div
      onClick={() => (flipped ? undefined : clicked(name, id))}
      className={
        "card" + (flipped ? " flipped" : "") + (matched ? " matched" : "")
      }
    >
      <div className="back"><img src={Icon}/></div>
      <div className="front">
        <img alt={name} src={name? banana : apple} />
      </div>
    </div>
  );
};

export default Card;
