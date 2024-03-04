import React from 'react';
import Bg from '../image/02-sec-screen.svg';
import Allow from '../image/allow.svg';
import playBtn from '../image/play-btn.svg';
import Loader from '../image/loader.svg';
import blueCard from '../image/blue-card.svg';
import cardbg from '../image/card-bg.svg';
import twiceCard from '../image/twice-card.svg';
import redCard2 from '../image/red-card2.svg';
import BananaLoader from '../image/loader-banana.svg';
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
      <img className="allow-icon" src={Allow} alt="Back" onClick={handleBack} style={{ display: currentScreen === 'Playgame' }} />
      <img className="loader" style={{ margin: '10px 10px 10px 100px', height: '5vh' }} src={Loader} alt="Loader" />
      {/* <img className="banana-loader" style={{height:'15vh'}} src={BananaLoader} alt="Banana"/> */}
      <div className="sub-screen">
        <div style={{ position: 'absolute', right: '10%', display: 'flex', flexDirection: 'row', gap: '10%', justifyContent: 'center' }}>
          <div className='card-img' style={{ width: '16rem', height: '20rem', backgroundImage: `url(${cardbg})` }}>
            <img style={{ width: '15rem' }} src={redCard2} />
              {/* <h6>Select a pink card.</h6>
              <p>It has images.</p> */}
          </div>
          <div className='card-img' style={{ width: '16rem', height: '20rem', backgroundImage: `url(${cardbg})` }}>
            <img style={{ width: '15rem' }} src={blueCard} />
              {/* <h6>Select a pink card.</h6>
              <p>It has alphabets.</p> */}
          </div>
          <div className='card-img' style={{ width: '16rem', height: '20rem', backgroundImage: `url(${cardbg})` }}>
            <img style={{ width: '15rem' }} src={twiceCard} />
              {/* <p>If they're same</p>
              <h6>Its a match !</h6>
              <p>otherwise retry!</p> */}
          </div>
        </div>
      </div>
      <button className="button" style={{ backgroundImage: `url(${playBtn})` }} onClick={handleNext}>
      </button>
    </div>
  );

}
