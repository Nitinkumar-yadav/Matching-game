import { useState } from 'react';
import '../component/min.css';
import Image from '../image/open-month-monkey.svg';
import GameBoard from './gameBoard';
import Instruction from './Instructions';

export default function Welcome() {
    const[start,setStart] =useState(false);

    return(
        <div className="main-screen">
                 <h1><span>Welcome Kiddo !</span></h1>
            <div className="sub-screen">
                <img src={Image} alt="Monkey"/>
            </div>
            <button onClick={start ? () => setStart(false) : () => setStart(true)}>
  {start && <Instruction/>}
</button>
        </div>
    )
}
