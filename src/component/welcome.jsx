import '../component/min.css';
import Image from '../image/open-month-monkey.svg';

export default function Welcome() {
    return(
        <div className="main-screen">
                 <p><h1>Welcome Kiddo !</h1></p>
            <div className="sub-screen">
                <img src={Image} alt="Monkey"/>
            </div>
                 <button/>
        </div>
    )
}
