import "../styles/ContactSection.css";
import {React} from 'react';
import { Reveal } from '../components/Reveal'

function ContactSection() {

return (
    <div className='contactSectionDiv' id="contact">
        <section className="contactDiv">
        <Reveal><h1 className="h1C">Contactează-mă<span className="dot">.</span></h1></Reveal>
          <div className="text">
          <Reveal><p class="contactText">
          Trimite-mi un email dacă vrei să ne auzim! Mă poți găsi si pe
    
    <a className="highlight" target="_blank" rel="nofollow" href="https://www.linkedin.com/in/nicu-bilac-1649b0213/">LinkedIn</a>
     sau
   
    <a className="highlight" target="_blank" rel="nofollow" href="https://www.instagram.com/bilacnicu/">Instagram</a>
    
    dacă îți e mai ușor acolo.
</p></Reveal>
<Reveal><a href="mailto:nicubilac1@gmail.com" className="mailLink"><span className="spanSVG" id="mailSpan">
            <a href="mailto:nicubilac1@gmail.com" target="_blank" rel="noopener noreferrer" className="mailLink1">
            {/* SVG code goes here */}
            <svg
              className="svgIconContact"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 25 25"
            >
              <path d="M12 12.713l-11.985-9.713h23.971l-11.986 9.713zm-5.425-1.822l-6.575-5.329v12.501l6.575-7.172zm10.85 0l6.575 7.172v-12.501l-6.575 5.329zm-1.557 1.261l-3.868 3.135-3.868-3.135-8.11 8.848h23.956l-8.11-8.848z" />
            </svg>
          </a>
        </span>
        nicubilac1@gmail.com</a></Reveal>
          </div>
          
         
        </section> 
        
    </div>
);
};
export default ContactSection;