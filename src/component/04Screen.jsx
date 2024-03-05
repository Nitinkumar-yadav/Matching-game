import React from 'react';
import Bg from '../image/02-sec-screen.svg';
import Allow from '../image/allow.svg';
import playBtn from '../image/play-btn.svg';
import Loader from '../image/loader.svg';
import blueCard from '../image/blue-card.svg';
import cardbg from '../image/card-bg.svg';
import twiceCard from '../image/twice-card.svg';
import redCard2 from '../image/red-card2.svg';

import './CSS/min.css';

export default function Playgame({ currentScreen, onNext, onBack }) {

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
        style={{ display: currentScreen === 'Playgame' }} 
      />
      <img className="loader" src={Loader} alt="Loader" />
      <div className="sub-screen">
        <div className='card-container'>
          <div className='card-img' style={{backgroundImage: `url(${cardbg})` }}>
            <img style={{ width: '15rem' }} src={redCard2} />
          </div>
          <div className='card-img' style={{backgroundImage: `url(${cardbg})` }}>
            <img style={{ width: '15rem' }} src={blueCard} />
          </div>
          <div className='card-img' style={{backgroundImage: `url(${cardbg})` }}>
            <img style={{ width: '15rem' }} src={twiceCard} />
          </div>
        </div>
      </div>
      <button className="button" style={{ backgroundImage: `url(${playBtn})` }} onClick={handleNext}>
      </button>
    </div>
  );

}
