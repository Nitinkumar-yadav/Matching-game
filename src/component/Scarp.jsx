import React, { useState } from "react";
import "./CSS/styles.css";
// import './CSS/min.css';
import Bg from '../image/02-sec-screen.svg';
import Allow from '../image/allow.svg';
import playBtn from '../image/play-btn.svg';
import Loader from '../image/loader.svg';
import Card from "./card";
import GameOver from "./06Screen";

const GameBoard1 = () => {
  const cards = [
    "apple",
    "banana",
    "orange",
    "A-letter",
    "O-letter",
  ];

  ///////////// HELPER FUNCTION /////////////

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

  ///////////// SETUP /////////////

  const [cardList, setCardList] = useState(
    shuffle(cards).map((name, index) => {
      return {
        id: index,
        name: name,
        flipped: false,
        matched: false
      };
    })
  );

  const [flippedCards, setFlippedCards] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  ///////////// GAME LOGIC /////////////

  const handleClick = (name, index) => {
    let currentCard = {
      name,
      index
    };

    //update card is flipped
    let updateCards = cardList.map(card => {
      if (card.id === index) {
        card.flipped = true;
      }
      return card;
    });
    let updateFlipped = flippedCards;
    updateFlipped.push(currentCard);
    setFlippedCards(updateFlipped);
    setCardList(updateCards);

    //if 2 cards are flipped, check if they are a match
    if (flippedCards.length === 2) {
      setTimeout(() => {
        check();
      }, 750);
    }
  };

  const check = () => {
    let updateCards = cardList;
    if (
      flippedCards[0].name === flippedCards[1].name &&
      flippedCards[0].index !== flippedCards[1].index
    ) {
      updateCards[flippedCards[0].index].matched = true;
      updateCards[flippedCards[1].index].matched = true;
      isGameOver();
    } else {
      updateCards[flippedCards[0].index].flipped = false;
      updateCards[flippedCards[1].index].flipped = false;
    }
    setCardList(updateCards);
    setFlippedCards([]);
  };

  const isGameOver = () => {
    let done = true;
    cardList.forEach(card => {
      if (!card.matched) done = false;
    });
    setGameOver(done);
  };

  ///////////// RESTART - REDO SETUP /////////////

  const restartGame = () => {
    setCardList(
      shuffle(cards).map((name, index) => {
        return {
          id: index,
          name: name,
          flipped: false,
          matched: false
        };
      })
    );

    setFlippedCards([]);
    setGameOver(false);
  };

  ///////////// DISPLAY /////////////

  return (
    <div className="main-screen" style={{ backgroundImage: `url(${Bg})` }}>
    <div className="game-board">
      {!gameOver &&
        cardList.map((card, index) => (
          <Card
            key={index}
            id={index}
            name={card.name}
            flipped={card.flipped}
            matched={card.matched}
            clicked={flippedCards.length === 2 ? () => {} : handleClick}
          />
        ))}
      {gameOver && <GameOver restartGame={restartGame} />}
    </div>
    </div>
  );
};

export default GameBoard1;


// import React, { useState } from "react";
// // import "./CSS/styles.css";
// import './CSS/min.css';
// import Bg from '../image/02-sec-screen.svg';
// import Allow from '../image/allow.svg';
// import Loader from '../image/loader.svg';
// import Card from "./card";
// // import GameOver from "./gameOver";

// export default function GameBoard({ currentScreen, onBack }) {

//   const cards = [
//     "apple",
//     "A-letter",
//     "banana",
//     "O-letter",
//     "orange",
//   ];

//   const shuffle = array => {
//     let currentIndex = array.length,
//       temporaryValue,
//       randomIndex;
//     while (0 !== currentIndex) {
//       randomIndex = Math.floor(Math.random() * currentIndex);
//       currentIndex -= 1;
//       temporaryValue = array[currentIndex];
//       array[currentIndex] = array[randomIndex];
//       array[randomIndex] = temporaryValue;
//       console.log(temporaryValue);
//     }
//     console.log(array);
//     return array;
//   };

//   const [cardList, setCardList] = useState(
//     shuffle(cards).map((name, index) => {
//       return {
//         id: index,
//         name: name,
//         flipped: false,
//         matched: false
//       };
//     })
//   );

//   const [flippedCards, setFlippedCards] = useState([]);
//   // const [gameOver, setGameOver] = useState(false);
  
//   const handleClick = (name, index) => {
//     let currentCard = {
//       name,
//       index
//     };

//     //update card is flipped
//     let updateCards = cardList.map(card => {
//       if (card.id === index) {
//         card.flipped = true;
//       }
//       return card;
//     });
//     let updateFlipped = flippedCards;
//     updateFlipped.push(currentCard);
//     setFlippedCards(updateFlipped);
//     setCardList(updateCards);

//     //if 2 cards are flipped, check if they are a match
//     if (flippedCards.length === 2) {
//       setTimeout(() => {
//         check();
//       }, 750);
//     }
//   };

//   const check = () => {
//     let updateCards = cardList;
//     if (
//       flippedCards[0].name === flippedCards[1].name &&
//       flippedCards[0].index !== flippedCards[1].index
//     ) {
//       updateCards[flippedCards[0].index].matched = true;
//       updateCards[flippedCards[1].index].matched = true;
//       isGameOver();
//     } else {
//       updateCards[flippedCards[0].index].flipped = false;
//       updateCards[flippedCards[1].index].flipped = false;
//     }
//     setCardList(updateCards);
//     setFlippedCards([]);
//   };
  
//   const handleBack = () => {
//     onBack();
//   };
//   return (
//     <div
//       className="main-screen" style={{ backgroundImage: `url(${Bg})` }}>
//        <img className="allow-icon" src={Allow} alt="Back" onClick={handleBack} style={{ display: currentScreen === 'begins' }} />
//       <img className="loader" style={{ margin: '10px 10px 10px 100px', height: '5vh' }} src={Loader} alt="Loader" />
//     <div className="game-board">
//      {/* {!gameOver && */}
//       {  cardList.map((card, index) => (
//           <Card
//             key={index}
//             id={index}
//             name={card.name}
//             flipped={card.flipped}
//             matched={card.matched}
//             clicked={flippedCards.length === 2 ? () => {} : handleClick}
//           />
//         ))
//          } 
//       {/* {gameOver && <GameOver restartGame={restartGame} />} */}
//     </div>

//     </div>
//   );
// };

// import './CSS/styles.css';
// // import './CSS/min.css';
// import React, { useState, useEffect } from "react";
// import Card from "./Card";
// import Bg from '../image/02-sec-screen.svg';
// import Allow from '../image/allow.svg';
// import Loader from '../image/loader.svg';

// export default function GameBoard({ currentScreen, onBack }) {
//   const [cardList, setCardList] = useState([]);
//   const [flippedCards, setFlippedCards] = useState([]);
//   const [gameOver, setGameOver] = useState(false);

//   useEffect(() => {
//     const cards = [
//       "apple",
//       "A-letter",
//       "banana",
//       "orange",
//       "O-letter",
//     ];
//     const shuffledCards = shuffle(cards).map((name, index) => ({
//       id: index,
//       name: name,
//       flipped: false,
//       matched: false
//     }));
//     setCardList(shuffledCards);
//   }, []);

//   const shuffle = array => {
//     let currentIndex = array.length,
//       temporaryValue,
//       randomIndex;

//     while (0 !== currentIndex) {
//       randomIndex = Math.floor(Math.random() * currentIndex);
//       currentIndex -= 1;

//       temporaryValue = array[currentIndex];
//       array[currentIndex] = array[randomIndex];
//       array[randomIndex] = temporaryValue;
//     }

//     return array;
//   };

//   const handleClick = (name, index) => {
//     if (flippedCards.length === 2 || cardList[index].flipped) return;

//     let currentCard = { name, index };

//     let updatedCards = [...cardList];
//     updatedCards[index].flipped = true;

//     let updatedFlipped = [...flippedCards];
//     updatedFlipped.push(currentCard);

//     setFlippedCards(updatedFlipped);
//     setCardList(updatedCards);
//   };

//   const check = () => {
//     let updatedCards = [...cardList];
//     if (
//       (flippedCards[0].name === "apple" && flippedCards[1].name === "A-letter") ||
//       (flippedCards[0].name === "A-letter" && flippedCards[1].name === "apple")
//     ) {
//       updatedCards[flippedCards[0].index].matched = true;
//       updatedCards[flippedCards[1].index].matched = true;
//       setCardList(updatedCards);
//       setFlippedCards([]);
//       if (updatedCards.every(card => card.matched)) {
//         setGameOver(true);
//       }
//     } else if (
//       (flippedCards[0].name === "banana" && flippedCards[1].name === "B-letter") ||
//       (flippedCards[0].name === "B-letter" && flippedCards[1].name === "banana")
//     ) {
//       updatedCards[flippedCards[0].index].matched = true;
//       updatedCards[flippedCards[1].index].matched = true;
//       setCardList(updatedCards);
//       setFlippedCards([]);
//       if (updatedCards.every(card => card.matched)) {
//         setGameOver(true);
//       }
//     } else if (
//       (flippedCards[0].name === "banana" && flippedCards[1].name === "B-letter") ||
//       (flippedCards[0].name === "B-letter" && flippedCards[1].name === "banana")
//     ) {
//       updatedCards[flippedCards[0].index].matched = true;
//       updatedCards[flippedCards[1].index].matched = true;
//       setCardList(updatedCards);
//       setFlippedCards([]);
//       if (updatedCards.every(card => card.matched)) {
//         setGameOver(true);
//       }
//     } else if (
//       (flippedCards[0].name === "orange" && flippedCards[1].name === "O-letter") ||
//       (flippedCards[0].name === "O-letter" && flippedCards[1].name === "orange")
//     ) {
//       updatedCards[flippedCards[0].index].matched = true;
//       updatedCards[flippedCards[1].index].matched = true;
//       setCardList(updatedCards);
//       setFlippedCards([]);
//       if (updatedCards.every(card => card.matched)) {
//         setGameOver(true);
//       }
//     } else {
//       setTimeout(() => {
//         updatedCards[flippedCards[0].index].flipped = false;
//         updatedCards[flippedCards[1].index].flipped = false;
//         setCardList(updatedCards);
//         setFlippedCards([]);
//       }, 1000);
//     }
//   };
  
//   useEffect(() => {
//     if (flippedCards.length === 2) {
//       setTimeout(check, 500);
//     }
//   }, [flippedCards]);

//   const handleBack = () => {
//     onBack();
//   };

//   return (
//     <div className="main-screen" style={{ backgroundImage: `url(${Bg})` }}>
//       <img className="allow-icon" src={Allow} alt="Back" onClick={handleBack} style={{ display: currentScreen === 'begins' }} />
//       <img className="loader" style={{ margin: '10px 10px 10px 100px', height: '5vh' }} src={Loader} alt="Loader" />
//       <div className="game-board">
//         {!gameOver &&
//           cardList.map((card, index) => (
//             <Card
//               key={index}
//               id={index}
//               name={card.name}
//               flipped={card.flipped}
//               matched={card.matched}
//               clicked={() => handleClick(card.name, index)}
//             />
//           ))}
//         {gameOver && (
//           <div>
//             <h1>Congratulations! You've matched all the cards!</h1>
//             <button onClick={restartGame}>Play Again</button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

