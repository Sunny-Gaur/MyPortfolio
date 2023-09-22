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

export default function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6gw5ib1', 'template_r2v2ynk', form.current, 'l5Hz3RgIx0NRmjxjB')
      .then((result) => {
          console.log(result.text);
          alert("Thanks for Contact us")
      }, (error) => {
          console.log(error.text);
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
          <input type="text" name="to_name"  className="name" placeholder='Your Name' />
          <input type="email" name="your_email"  className="email" placeholder='Your Email' />
          <textarea name="message" rows="5" className='msg' placeholder='Your msg'>
          </textarea>
          <button type='submit' className='submitbtn' onClick={sendEmail}>Submit</button>
          <div className="links">
            <img src={Link1} alt="" className='linksImg' />
            <img src={Link2} alt="" className='linksImg' />
            <img src={Link3} alt="" className='linksImg' />
            <img src={Link4} alt="" className='linksImg' />  
          </div>
        </form>
      </div>
    </section>
  )
}
