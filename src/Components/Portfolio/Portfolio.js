import React from 'react'
import "./Portfolio.css";
import portfolio1 from '../../Assets/Assets/try2.png';
import portfolio3 from '../../Assets/Assets/try3.png'
import portfolio2 from '../../Assets/Assets/trying.png';
import portfolio4 from '../../Assets/Assets/portfolio-4.png'
import portfolio5 from '../../Assets/Assets/portfolio-5.png'
import portfolio6 from '../../Assets/Assets/portfolio-6.png'
import comming from "../../Assets/Assets/comming-soon.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
export default function Portfolio() {
  function seeMore() {
    document.querySelector(".pop-up3").style.display="block";
    setTimeout(()=>{
      document.querySelector(".pop-up3").style.display="none";
    },1000)
  }
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      <div className="message-container3">
        <div className="pop-up3">
          <img src={comming} alt="" />
        </div>
      </div>

      <section id='works'>
        <div className="fads" data-aos="fade-down">
          <h2 className='workstitle'>My Portfolio</h2>
          <span className='worksDesc'>Greetings! I'm Sunny, a passionate front-end web developer with a solid foundation in HTML, CSS, and JavaScript. My proficiency extends to advanced frameworks like Bootstrap and React, enabling me to create stunning, responsive, and user-friendly web applications.</span>
        </div>
        <div className="worksImgs">
          <img src={portfolio1} alt="" className="worksImg" data-aos="fade-left" data-aos-offset="300"
            data-aos-easing="ease-in-sine"></img>
          <img src={portfolio2} alt="" className="worksImg diff" data-aos="fade-down" data-aos-offset="300" data-aos-duration="1500" data-aos-easing="ease-in-sine" />
          <img src={portfolio3} alt="" className="worksImg" data-aos="fade-right" data-aos-offset="300" data-aos-duration="1500" data-aos-easing="ease-in-sine" />
          <img src={portfolio4} alt="" className="worksImg" data-aos="fade-left" data-aos-offset="300" data-aos-duration="1500" data-aos-easing="ease-in-sine" />
          <img src={portfolio5} alt="" className="worksImg" data-aos="fade-down" data-aos-offset="300" data-aos-duration="1500" data-aos-easing="ease-in-sine" />
          <img src={portfolio6} alt="" className="worksImg" data-aos="fade-right" data-aos-offset="300" data-aos-duration="1500" data-aos-easing="ease-in-sine" />
        </div>
        <button className='workbtn' data-aos="flip-left" data-aos-duration="1500" data-aos-easing="ease-in-sine" onClick={seeMore}>See more</button>
      </section>
    </>
  )
}

