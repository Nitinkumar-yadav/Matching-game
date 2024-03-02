import React, { useState } from 'react';
import './CSS/min.css';
import Bg from '../image/02-sec-screen.svg';
import Image from '../image/open-month-monkey.svg';
import Allow from '../image/allow.svg';
import nextBtn from '../image/next-btn.svg';
import comment from '../image/comment-icon.svg';


export default function Begin({ currentScreen, onBack }) {
  const [next, setNext] = useState(false);

  const handleBack = () => {
    onBack();
  };

  return (
    <div className="main-screen" style={{ backgroundImage: `url(${Bg})` }}>
      <img
        className="allow-icon"
        src={Allow}
        alt="Back"
        onClick={handleBack}
        style={{ display: currentScreen === 'instructions' ? 'block' : 'none' }}
      />
      <h1 style={{ backgroundImage: ` url(${comment})` }}>
        <span>Hi, I am Mizo! and I love bananas</span>
      </h1>
      <div className="sub-screen">
        <img src={Image} alt="Monkey" />
      </div>
      <button style={{ backgroundImage: `url(${nextBtn})` }} onClick={() => setNext(true)}>
        {next && <Begin />}
      </button>
    </div>
  );
}
