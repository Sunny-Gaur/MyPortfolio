import React from 'react'
import "./Contact.css"
import client1 from '../../Assets/Assets/walmart.png'
import client2 from '../../Assets/Assets/adobe.png'
import client3 from '../../Assets/Assets/microsoft.png'
import client4 from '../../Assets/Assets/facebook.png'
import Link1 from "../../Assets/Assets/facebook-icon.png";
import Link2 from "../../Assets/Assets/twitter.png";
import Link3 from "../../Assets/Assets/instagram.png";
import Link4 from "../../Assets/Assets/youtube.png";
import  emailjs from '@emailjs/browser';
import { useRef } from 'react'
import {Link} from 'react-scroll';
export default function Contact() {
  // const form = useRef();
  // const sendEmail = (e) => {
  //   e.preventDefault();
  //   emailjs.sendForm('service_6gw5ib1', 'template_r2v2ynk', form.current, 'l5Hz3RgIx0NRmjxjB')
  //     .then((result) => {
  //         console.log(result.text);
  //         document.querySelector(".pop-up").style.display="block";
  //         setTimeout(()=>{
  //           document.querySelector(".pop-up").style.display="none";
  //         },2000)
  //     }, (error) => {
  //         console.log(error.text+"my");
  //         document.querySelector(".pop-up2").style.display="block";
  //         setTimeout(()=>{
  //           document.querySelector(".pop-up2").style.display="none";
  //         },2000)
  //     });
  // };
  const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  // Validate the form fields
  const to_name = form.current.querySelector('[name="to_name"]');
  const your_email = form.current.querySelector('[name="your_email"]');
  const message = form.current.querySelector('[name="message"]');

  if (!to_name.value || !your_email.value || !message.value) {
    alert("Please fill out all required fields.");
    return;
  }

  // Rest of your email sending logic
  emailjs.sendForm('service_6gw5ib1', 'template_r2v2ynk', form.current, 'l5Hz3RgIx0NRmjxjB')
    .then((result) => {
      console.log(result.text);
      document.querySelector(".pop-up").style.display = "block";
      setTimeout(() => {
        document.querySelector(".pop-up").style.display = "none";
      }, 2000);
    }, (error) => {
      console.log(error.text + "my");
      document.querySelector(".pop-up2").style.display = "block";
      setTimeout(() => {
        document.querySelector(".pop-up2").style.display = "none";
      }, 2000);
    });
};


  return (
    <section id='ContactPage'>
      {/* Client page */}
      <div className="clients">
        <h1 className='ContactPageTitle' data-aos="zoom-in" data-aos-duration="3000" data-aos-offset="300" data-aos-easing="ease-in-sine">My Clients </h1>
        <p className="clientDesc"  data-aos="zoom-in" data-aos-duration="3000" data-aos-offset="300" data-aos-easing="ease-in-sine">Lorem ipsum dolor sit amet consectetur adipisicing 
         elit
          ratione nihil, veritatis, aut corrupti tenetur numquam ad iste soluta n</p>
      </div>
      <div className="clientImgs">
        <img src={client1} alt="" className='clientImg' data-aos="fade-right" data-aos-duration="3000"/>
        <img src={client2} alt="" className='clientImg'  data-aos="fade-up" data-aos-duration="3000"/>
        <img src={client3} alt="" className='clientImg'  data-aos="fade-down" data-aos-duration="3000"/>
        <img src={client4} alt="" className='clientImg'  data-aos="fade-left" data-aos-duration="3000"/>

      </div>



      {/* Contact page start hare */}
      <div className="Contact" data-aos="fade-right" data-aos-duration="3000" data-aos-easing="linear" data-aos-offset="300">
        <h1 className="ContactPageTitle">Contact Me</h1>
        <span className="ContactDec">Please fill out the form below to discuss any 
          work opportunities</span>
        <form ref={form} className="ContactForm">
          <input type="text" name="to_name"  className="name" placeholder='Your Name' required/>
          <input type="email" name="your_email"  className="email" placeholder='Your Email' required/>
          <textarea name="message" rows="5" className='msg' placeholder='Your msg' required>
          </textarea>
          <button type='submit' className='submitbtn' onClick={sendEmail}>Submit</button>
          <div className="links">
           <a href="https://www.facebook.com/profile.php?id=100028048304233&mibextid=ZbWKwL" tab="_"><img src={Link1} alt="" className='linksImg' /></a> 
          <a href='https://www.instagram.com/sunnygaur2272/'><img src={Link3} alt="" className='linksImg' /></a>  
            <img src={Link2} alt="" className='linksImg' />
            <img src={Link4} alt="" className='linksImg' />  
          </div>
        </form>
      </div>
    </section>
  )
}
