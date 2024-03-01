import { useState } from 'react';
// import '../component/min.css';
import Image from '../image/open-month-monkey.svg';

export default function Begin() {
    const[start,setStart] =useState(false);

    return(
        <div className="main-screen">
           {/* <button></button> */}
                 <h1><span>Can you help me get some ? </span></h1>
            <div className="sub-screen">
                <img src={Image} alt="Monkey"/>
            </div>
            <button onClick={start ? () => setStart(false) : () => setStart(true)}>
  {/* {start && <Begin/>} */}
</button>
        </div>
    )
}
