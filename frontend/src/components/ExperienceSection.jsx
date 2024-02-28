import "../styles/ExperienceSection.css";
import {React} from 'react';
import { Reveal } from '../components/Reveal'

function ExperienceSection() {

return (
    <div className='experienceSectionDiv' id="experience">
        <section className="aboutExp">
        <div className="experienceTitle">
        <h1 className="h1D"><Reveal>Experiență<span className="dot">.</span></Reveal><span className="line"></span></h1>
        </div>
          <div className="experienceDiv">

            <div className="experienceHeading" id="topHeading">
            <Reveal><h2 className="companyAndPosition" id="company">Arobs</h2></Reveal>
            <Reveal><h2 className="timeAndLocation" id="time">2022 - Prezent</h2></Reveal>
            </div>
            <div className="experienceHeading" id="bottomHeading">
            <Reveal><h2 className="companyAndPosition" id="position">Software Developer</h2></Reveal>
            <Reveal><h2 className="timeAndLocation" id="location">Târgu-Mureș</h2></Reveal>
            </div>

            <div className="jobDescriptionDiv">
            <Reveal><p className="jobDescription">
                Embedded Automotive Software Developer, specializat pe Fiat Instrument Panel Clusters (Ceasuri de bord), integrare de componente și debugging cu deadline-uri mereu terminate în medie cu 40% mai repede.
                </p></Reveal>
            </div>
            <Reveal><div className="techUsedDiv">
                <span className="tech-item-work" id="first-item">C</span>
                <span className="tech-item-work">C++</span>
                <span className="tech-item-work">Git</span>
                <span className="tech-item-work">Sourcetree</span>
                <span className="tech-item-work">Jira</span>
                <span className="tech-item-work">Confluence</span>
                <span className="tech-item-work">DOORS</span>
            </div></Reveal>

          </div>
        </section> 
    </div>
);
};
export default ExperienceSection;