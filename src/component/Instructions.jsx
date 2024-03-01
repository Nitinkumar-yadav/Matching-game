import { useState } from 'react';
// import '../component/min.css';
import Image from '../image/open-month-monkey.svg';
import Begin from './Begin';


export default function Instructions() {
    const[start,setStart] =useState(false);

    return(
        <div className="main-screen">
                 <h1><span>Hi , I am Mizo !
and I love bananas</span></h1>
            <div className="sub-screen">
                <img src={Image} alt="Monkey"/>
            </div>
            <button onClick={start ? () => setStart(false) : () => setStart(true)}>
  {start && <Begin/>}
</button>
        </div>
    )
}
