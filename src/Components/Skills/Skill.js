import Htmls from "../../Assets/Assets/html-5.png";
import Css from "../../Assets/Assets/css.png";
import Javascript from "../../Assets/Assets/JavaScript.png";
import bootstrap from "../../Assets/Assets/005-bootstrap.png";
import reactimg from "../../Assets/Assets/react.png";
import Nodeimg from "../../Assets/Assets/Nodejs.png";
import Mongodb from "../../Assets/Assets/mongoDb.png";
import Php from "../../Assets/Assets/php.png";



import './Skill.css';
export default function Skills() {
    return (
        <>
            <section className="skills" id='Skill' data-aos="zoom-in-up" data-aos-duration="3000">
                <span className='skillTitle'><p className="skilltext" data-aos="zoom-in-up">Skills</p></span>
                <span className='skillDescription' data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine">I am a skilled and juniour Webdevloper with little bit experience in all skills which i have</span>
                <br />
                <br />
                <div className="first">
                    <div className="skillBars">
                        <div className="skillBar">
                            <img src={Htmls} alt="" />
                            <div className="skillbarLines">
                            <div className="full"> </div>
                            </div>
                        </div>
                    </div>
                    {/* nex */}
                    <div className="skillBars">
                        <div className="skillBar">
                            <img src={Css} alt="" />
                            <div className="skillbarLines">
                            <div className="medium"> </div>
                            </div>

                        </div>
                    </div>

                </div>
                <br />

                <div className="first">
                    <div className="skillBars">
                        <div className="skillBar">
                            <img src={Javascript} alt=""/>
                            <div className="skillbarLines">
                            <div className="medium"> </div>
                            </div>


                        </div>
                    </div>
                    <div className="skillBars">
                        <div className="skillBar">
                            <img src={bootstrap} alt="" />
                            <div className="skillbarLines">
                            <div className="full"> </div>
                            </div>

                        </div>
                    </div>
                </div>
                <br />
                <div className="first">
                    <div className="skillBars">
                        <div className="skillBar">
                            <img src={reactimg} alt="" /> 
                             <div className="skillbarLines">
                             <div className="medium"> </div>

                             </div>


                        </div>
                    </div>
                    <div className="skillBars">
                        <div className="skillBar">
                            <img src={Nodeimg} alt="" />
                            <div className="skillbarLines">
                            <div className="medium"> </div>

                            </div>

                        </div>
                    </div>
                </div>
                <br />

                <div className="first">
                    <div className="skillBars">
                        <div className="skillBar">
                            <img src={Mongodb} alt="" />
                            <div className="skillbarLines">
                            <div className="low"> </div>

                            </div>

                        </div>
                    </div>
                    <div className="skillBars">
                        <div className="skillBar">
                            <img src={Php} alt="" />
                            <div className="skillbarLines">
                            {/* <div className="unk"> </div> */}
                            <div className="low"> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}