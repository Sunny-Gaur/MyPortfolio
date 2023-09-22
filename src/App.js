import Navbar from "./Components/Navbar/Navbar"
import Intro from "./Components/Intro/Intro";
import Skills from "./Components/Skills/Skill";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
export default function App(){
return(
  <>
  <div className="App">
    <Navbar/>
    <Intro/>
    <Skills/>
    <Portfolio/>
    <Contact/>
    <Footer/>
  </div>
  </>
)
}