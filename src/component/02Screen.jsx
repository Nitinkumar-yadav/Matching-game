import React, { useState } from 'react';
import Bg from '../image/02-sec-screen.svg';
import './CSS/min.css'
import Image from '../image/open-month-monkey.svg';
import Allow from '../image/allow.svg';
import nextBtn from '../image/next-btn.svg';
import comment from '../image/comment-icon.svg';
import icon from '../image/card/banana.svg';
import Begin from './03Screen';
import { useNavigate } from 'react-router-dom';


export default function Instructions({ currentScreen,onNext, onBack }) {
  const [next, setNext] = useState(false);

  const handleNext = () => {
    onNext();
  };
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
        style={{ display: currentScreen === 'instructions'}}
      />
      <h1 style={{ backgroundImage: ` url(${comment})` }}>
        <span>Hi, I am Mizo! and I love bananas <img style={{width:'45px', height:'45px'}} src={icon}/> </span>
      </h1>
      <div className="sub-screen">
        <img src={Image} alt="Monkey" />
      </div>
      <div  className="button"style={{ backgroundImage: `url(${nextBtn})` }} onClick={handleNext}>
      </div>
    </div>
  );
}


