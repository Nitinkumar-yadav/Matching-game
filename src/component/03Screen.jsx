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

  const handleBack = () => {
    onBack();
  };

  const handleNext = () => {
    onNext();
  };

  return (
    <div className="main-screen" style={{ backgroundImage: `url(${Bg})` }}>

      <img className="allow-icon" src={Allow} alt="Back" onClick={handleBack} style={{ display: currentScreen === 'Begin'}}/>
      {/* <div style={{display:'flex',margin}}> */}
      <img className="loader" style={{margin:'10px 10px 10px 100px',height:'5vh'}}src={Loader} alt="Loader"/>
      {/* <img className="banana-loader" style={{height:'15vh'}} src={BananaLoader} alt="Banana"/> */}
      {/* </div> */}
            <h1 style={{ backgroundImage: `url(${CommentIcon})` }}>
        <span>Can you help me get some?</span>
     </h1>
       <div className="sub-screen">
         <img src={Image}  alt="Monkey" />
         </div>
         <div  className="button" style={{ backgroundImage: `url(${yesBtn})` }} onClick={handleNext}>
      </div> 
    </div>
  );
}
