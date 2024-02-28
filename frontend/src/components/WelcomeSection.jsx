import "../styles/WelcomeSection.css";
import { Reveal } from '../components/Reveal'
import {React} from 'react';


function WelcomeSection() {

return (
    <div className='welcomeSectionDiv'>
        <section className="aboutMe">
          <Reveal><h1 className="h1">Bună, eu sunt Nicu<span className="dot">.</span></h1></Reveal>
          <Reveal><h2 className="h2">Full Stack Developer</h2></Reveal>
          <Reveal><p className="p1">Mi-am petrecut ultimii 5 ani construind proiecte pentru mediul corporatist și facultate.
          Pe lângă coding, îmi ocup timpul cu antrenament fizic și box.
          <br />Hai să ne auzim pentru o colaborare sau un antrenament! 💪🏼</p></Reveal>
          <Reveal><button className="contact"><a className="contactLink" href="#contact">Contactează-mă</a></button></Reveal>
        </section> 
        
    </div>
);
};
export default WelcomeSection;