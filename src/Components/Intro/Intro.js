import bg from '../../Assets/Assets/newProfile.png';
import pdf from './sunny.pdf';
import downfile from '../../Assets/Assets/file.png';
import message from "../../Assets/Assets/output-onlinepngtools (1).png"
import correct from "../../Assets/Assets/meassages.png";
import wrong from "../../Assets/Assets/output-onlinepngtools (4).png";



// import bg from '../../Assets/Assets/image.png';

// import bg2 from '../../Assets/Assets/profileback.png';

// import hireImg from '../../Assets/Assets/hireme.png';
import './Intro.css';
// import { Link } from 'react-scroll';
export default function Intro() {

    return (
        <>
            <div className="message-container">
                <div className="pop-up">
                    <img src={correct} alt="" />
                    <h2>Thank You!</h2>
                    <p>Your details has been successfully submitted. Thanks!</p>
                </div>
            </div>
            <div className="message-container2">
                <div className="pop-up2">
                    <img src={wrong} alt="" />
                    <h1>Some Thing went wrong</h1>
                    <p id='errors-handle'></p>
                </div>
            </div>

            <section id="intro">
                <div className="introContent" data-aos="fade-right" data-aos-duration="3000" data-easing="ease-in-sine">
                    <span className="hello">Hii</span>
                    <span className="introtext">I'm <span className="introName">Sunny</span><br />Frontend Webdevloper</span>
                    <p className="intropara">I am goal oriented person and try Always enhanced my skills </p>
                    <a href={pdf} download="Sunny Resume" className='atags'><button className='btn'> <img src={downfile} alt="Hire me" className='btnImg' />Resume</button></a>
                </div>
                <img data-aos="fade-left" data-aos-duration="3000" data-easeing="ease-in-sine" src={bg} alt='Profile' className='bg' />
            </section>
        </>
    )
} 