import React, { useState } from "react";
import {Link} from 'react-scroll'
import './Navbar.css';
// import Logo from '../../Assets/Assets/logo.png'
import Logo from '../../Assets/Assets/newOurLogo.png'
// import message from "../../Assets/Assets/output-onlinepngtools (1).png"
import Contact from '../../Assets/Assets/contact.png';
import menu from '../../Assets/Assets/menu (2).png';


export default function Navbar(){
    const [Showmenu,setShowmenu]=useState(false);
    return(
        <>
        <nav className="navbar">
            <img src={Logo} alt=""  className="logo"/>
            <div className="desktopmenu">
            <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={700} className="desktopmenuListItem">Home</Link>
            <Link activeClass="active"  to="Skill" spy={true} smooth={true} offset={-119} className="desktopmenuListItem" id="About">About</Link>
            <Link activeClass="active" to="works" spy={true} smooth={true} offset={-70} className="desktopmenuListItem">Portfolio</Link>
            <Link activeClass="active" to="clients" spy={true} smooth={true} offset={-70} className="desktopmenuListItem">Clients</Link>
            </div>
            <button className="destopmenubtn" onClick={()=>{
                document.querySelector('.Contact').scrollIntoView({behavior:'smooth'})
            }}>
            <img src={Contact} alt="" className="destopmenuImg" />Contact Me
            </button>
            {/* burgur menu */}
            <img src={menu} alt="Menu"  className="mobMenu" onClick={()=>setShowmenu(!Showmenu)}/>
            <div className="Navmenu"style={{display:Showmenu?"flex":"none"}}>
            <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={700} className="ListItem" onClick={()=>setShowmenu(false)}>Home</Link>
            <Link activeClass="active"  to="Skill" spy={true} smooth={true} offset={-100} className="ListItem" id="About" onClick={()=>setShowmenu(false)}>About</Link>
            <Link activeClass="active" to="works" spy={true} smooth={true} offset={-60} className="ListItem" onClick={()=>setShowmenu(false)}>Portfolio </Link>
            <Link activeClass="active" to="clients" spy={true} smooth={true} offset={-100} className="ListItem" onClick={()=>setShowmenu(false)}>Clients</Link>
            </div>
            {/* burgur menu end */}
        </nav>
        </>

    )
}