import React from "react";
import icon from '../image/card/red-heart.svg';


const Card = ({ id, name, flipped, matched, clicked }) => {
  return (
    <div
      onClick={() => (flipped ? undefined : clicked(name, id))}
      className={
        "card" + (flipped ? " flipped" : "") + (matched ? " matched" : "")
      }
    >
      <div className="back"><img src={icon}/></div>
      <div className="front">
        <img alt={name} src={"src/image/card/" + name + ".svg"}  />
      </div>
    </div>
  );
};

export default Card;
