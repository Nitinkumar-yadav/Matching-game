import React from 'react';
import './CSS/min.css';
import Bg from '../image/02-sec-screen.svg';
import Image from '../image/open-month-monkey.svg';
import startBtn from '../image/start-btn.svg';
import comment from '../image/comment-icon.svg';

export default function Welcome(props) {
  
  const handleClick = () => {
    props.onNext();
  };

  return (
    <div className="main-screen" style={{ backgroundImage: `url(${Bg})` }}>
      <h1 style={{ backgroundImage: ` url(${comment})` }}>
        <span>Welcome Kiddo!</span>
      </h1>
      <div className="sub-screen">
        <img src={Image} alt="Monkey" />
      </div>
      <button style={{ backgroundImage: `url(${startBtn})` }} onClick={handleClick} />
    </div>
  );
}