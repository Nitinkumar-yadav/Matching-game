import React, { useState } from 'react';
import Bg from '../image/02-sec-screen.svg';
import Image from '../image/open-month-monkey.svg';
import Allow from '../image/allow.svg';
import yesBtn from '../image/yes-btn.svg'; 
import CommentIcon from '../image/comment-icon.svg'; 
import Loader from '../image/loader.svg';
import BananaLoader from '../image/loader-banana.svg';
import './CSS/min.css';

export default function Begin({ currentScreen, onNext, onBack }) {
  // const [next, setNext] = useState(false);

  const handleBack = () => {
    onBack();
  };

  const handleNext = () => {
    onNext();
  };

  return (
    <div className="main-scrren" style={{ backgroundImage: `url(${Bg})` }}>

      <img className="loader" src={Loader} alt="Loader"/>
      <img className="banana-loader" src={BananaLoader} alt="Banana"/>
      <img className="allow-icon" src={Allow} alt="Back" onClick={handleBack} style={{ display: currentScreen === 'Begin'}}/>
      <h1 style={{width:'100px' , height:'100px', backgroundImage: `url(${CommentIcon})` }}>
        {/* <span>Can you help me get some?</span> */}
      </h1>
      <div className="sub-screen">
        <img src={Image} width={'100px'} height={'100px'} alt="Monkey" />
        </div>
        <button style={{ backgroundImage: `url(${yesBtn})` }} onClick={handleNext}>
        {onNext && <playGame/>} 
      </button>
    </div>
  );
}
