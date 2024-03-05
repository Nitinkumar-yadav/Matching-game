import './CSS/card.css';
import './CSS/min.css';
import React, { useState, useEffect } from "react";
import Bg from '../image/02-sec-screen.svg';
import Allow from '../image/allow.svg';
import icon from '../image/card/red-heart.svg';
import comment from '../image/comment-icon.svg';
import playbtn from '../image/play-btn.svg';
// import Loader from '../image/loader.svg';
// import GameOver from './06Screen';


export default function GameBoard({ currentScreen, onBack }) {
  const [cardList, setCardList] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const cards = [
      "apple",
      "A-letter",
      "banana",
      "B-letter",
      "orange",
      "O-letter",
    ];

    const shuffle = array => {
      let currentIndex = array.length,
        temporaryValue,
        randomIndex;
      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
      return array;
    };
    const shuffledCards = shuffle(cards).map((name, index) => ({
      id: index,
      name: name,
      flipped: false,
      matched: false
    }));
    setCardList(shuffledCards);
  }, []);


  const handleClick = (name, index) => {
    if (flippedCards.length === 2 || cardList[index].flipped) return;

    let currentCard = { name, index };

    let updatedCards = [...cardList];
    updatedCards[index].flipped = true;

    let updatedFlipped = [...flippedCards];
    updatedFlipped.push(currentCard);

    setFlippedCards(updatedFlipped);
    setCardList(updatedCards);
  };

  const check = () => {
    let updatedCards = [...cardList];
    if (
      (flippedCards[0].name === "apple" && flippedCards[1].name === "A-letter") ||
      (flippedCards[0].name === "A-letter" && flippedCards[1].name === "apple")
    ) {
      updatedCards[flippedCards[0].index].matched = true;
      updatedCards[flippedCards[1].index].matched = true;
      setCardList(updatedCards);
      setFlippedCards([]);
      if (updatedCards.every(card => card.matched)) {
        setGameOver(true);
      }
    } else if (
      (flippedCards[0].name === "banana" && flippedCards[1].name === "B-letter") ||
      (flippedCards[0].name === "B-letter" && flippedCards[1].name === "banana")
    ) {
      updatedCards[flippedCards[0].index].matched = true;
      updatedCards[flippedCards[1].index].matched = true;
      setCardList(updatedCards);
      setFlippedCards([]);
      if (updatedCards.every(card => card.matched)) {
        setGameOver(true);
      }
    } else if (
      (flippedCards[0].name === "banana" && flippedCards[1].name === "B-letter") ||
      (flippedCards[0].name === "B-letter" && flippedCards[1].name === "banana")
    ) {
      updatedCards[flippedCards[0].index].matched = true;
      updatedCards[flippedCards[1].index].matched = true;
      setCardList(updatedCards);
      setFlippedCards([]);
      if (updatedCards.every(card => card.matched)) {
        isGameOver();
      }
    } else if (
      (flippedCards[0].name === "orange" && flippedCards[1].name === "O-letter") ||
      (flippedCards[0].name === "O-letter" && flippedCards[1].name === "orange")
    ) {
      updatedCards[flippedCards[0].index].matched = true;
      updatedCards[flippedCards[1].index].matched = true;
      setCardList(updatedCards);
      setFlippedCards([]);
      if (updatedCards.every(card => card.matched)) {
        isGameOver();
      }
    } else {
      setTimeout(() => {
        updatedCards[flippedCards[0].index].flipped = false;
        updatedCards[flippedCards[1].index].flipped = false;
        setCardList(updatedCards);
        setFlippedCards([]);
      }, 750);
    }
  };


  useEffect(() => {
    if (flippedCards.length === 2) {
      setTimeout(check, 500);
    }
  }, [flippedCards]);

  const isGameOver = () => {
    let done = true;
    cardList.forEach(card => {
      if (!card.matched) done = false;
    });
    setGameOver(done);
  };

  // const restartGame = () => {
  //   setCardList(
  //     shuffle(shuffledCards).map((name, index) => {
  //       return {
  //         id: index,
  //         name: name,
  //         flipped: false,
  //         matched: false
  //       };
  //     })
  //   );

  //   setFlippedCards([]);
  //   setGameOver(false);
  // };


  const handleBack = () => {
    console.log('handleBack');
    onBack();
  };

  return (
    <div className="main-screen" style={{ backgroundImage: `url(${Bg})` }}>
      <img className="allow-icon" src={Allow} alt="Back" onClick={handleBack} style={{ display: currentScreen === 'Playgame' }} />
      <div className="game-board">
        {!gameOver &&
          cardList.map((card, index) => (
            <Card className="cards"
              key={index}
              id={index}
              name={card.name}
              flipped={card.flipped}
              matched={card.matched}
              clicked={() => handleClick(card.name, index)}
            />
          ))}
        {gameOver && (
          <div >
            <h1 style={{ backgroundImage: ` url(${comment})` }}>
              <span>Congratulations! You've matched all the cards!</span>
            </h1>
            {/* <img className='button'onClick={restartGame} src={playbtn}/> */}
          </div>
        )}
      </div>
    </div>
  );
}

const Card = ({ id, name, flipped, matched, clicked }) => {
  return (
    <div
      onClick={() => (flipped ? undefined : clicked(name, id))}
      className={
        "card" + (flipped ? " flipped" : "") + (matched ? " matched" : "")
      }
    >
      <div className="back"><img src={icon} /></div>
      <div className="front">
        <img alt={name} src={"src/image/card/" + name + ".svg"} />
      </div>
    </div>
  );
};

