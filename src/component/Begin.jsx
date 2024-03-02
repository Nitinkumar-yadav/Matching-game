import React, { useState } from 'react';
import Bg from '../image/02-sec-screen.svg';
import Image from '../image/open-month-monkey.svg';
import Allow from '../image/allow.svg';
import yesBtn from '../image/yes-btn.svg'; 
import CommentIcon from '../image/comment-icon.svg'; 
import Loader from '../image/loader.svg';
import BananaLoader from '../image/loader-banana.svg';

export default function Begin({ currentScreen, onBack }) {
  const [next, setNext] = useState(false);

  const handleBack = () => {
    onBack();
  };

  const handleNext = () => {
    setNext(true);
  };

  return (
    <div className="main-screen" style={{ backgroundImage: `url(${Bg})` }}>
      <img className="loader" src={Loader} alt="Loader"/>
      <img className="banana-loader" src={BananaLoader} alt="Banana"/>
      <img
        className="allow-icon"
        src={Allow}
        alt="Back"
        onClick={handleBack}
        style={{ display: currentScreen === 'Begin' ? 'block' : 'none' }}
      />
      <h1 style={{ backgroundImage: `url(${CommentIcon})` }}>
        <span>Can you help me get some?</span>
      </h1>
      <div className="sub-screen">
        <img src={Image} alt="Monkey" />
      </div>
      <button
        style={{ backgroundImage: `url(${yesBtn})` }}
        onClick={handleNext}
        disabled={next} // Disable the button once clicked
      >
        {next && <p>Next content goes here</p>} {/* Adjust content inside the button */}
      </button>
    </div>
  );
}
