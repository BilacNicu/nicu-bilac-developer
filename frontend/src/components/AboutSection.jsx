import "../styles/AboutSection.css";
import {React} from 'react';
import { Reveal } from '../components/Reveal'

function AboutSection() {

return (
    <div className='aboutSectionDiv' id="about">
      <section className="aboutMeDescription">
        <div className="titleDescription">
        <h1 className="h1D"><Reveal>Despre mine<span className="dot">.</span></Reveal><span className="line"></span></h1>
        </div>

        <div className="contentDescription">

          <div className="aboutTextandButton">

          <Reveal><p className="p1D1">După cum ai citit, mă cheamă Nicu și sunt un software developer din Târgu-Mureș.
               În principal folosesc tehnologiile listate alături, dar îmi place să construiesc aplicațiile cu
               orice unealtă e mai eficientă.</p></Reveal>
               <Reveal><p className="p1D2">În momentul de față, lucrez ca și software developer la Arobs, dar în domeniul Automotive.</p></Reveal>
               <Reveal><p className="p1D3">Sunt în căutare activă a unei oportunități în domeniu de web development, unde aș putea să îmi concentrez pasiunea total spre această ramură. Dacă crezi că ai avea o deschidere pentru mine, let's connect 🔗</p></Reveal>
               <Reveal><h2 className="linksDescription">Link-uri<span className="spanSVG3">
                     <svg
                     className="svgIcon2 trei"
                     xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 23 23"
                     >
                    <path d="m13.022 14.999v3.251c0 .412.335.75.752.75.188 0 .375-.071.518-.206 1.775-1.685 4.945-4.692 6.396-6.069.2-.189.312-.452.312-.725 0-.274-.112-.536-.312-.725-1.451-1.377-4.621-4.385-6.396-6.068-.143-.136-.33-.207-.518-.207-.417 0-.752.337-.752.75v3.251h-9.02c-.531 0-1.002.47-1.002 1v3.998c0 .53.471 1 1.002 1z" />
                    </svg>
                  </span>

                  <div className="headingLinksAbout">
                      <span className="spanSVG" id="unu">
          <a  href="https://github.com/BilacNicu" target="_blank" rel="noopener noreferrer">
            {/* SVG code goes here */}
            <svg
              className="svgIcon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 25 25"
            >
              {/* Replace with your actual SVG path data */}
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z" />
            </svg>
          </a>
                      </span>

                      <span className="spanSVG">
          <a href="https://www.linkedin.com/in/nicu-bilac-1649b0213/" target="_blank" rel="noopener noreferrer">
            {/* SVG code goes here */}
            <svg
              className="svgIcon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 25 25"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
                      </span>

                      <span className="spanSVG" id="trei">
          <a href="https://www.instagram.com/bilacnicu/" target="_blank" rel="noopener noreferrer">
            {/* SVG code goes here */}
            <svg
              className="svgIcon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 25 25"
            >
              {/* Replace with your actual SVG path data */}
              <path d="M15.233 5.488c-.843-.038-1.097-.046-3.233-.046s-2.389.008-3.232.046c-2.17.099-3.181 1.127-3.279 3.279-.039.844-.048 1.097-.048 3.233s.009 2.389.047 3.233c.099 2.148 1.106 3.18 3.279 3.279.843.038 1.097.047 3.233.047 2.137 0 2.39-.008 3.233-.046 2.17-.099 3.18-1.129 3.279-3.279.038-.844.046-1.097.046-3.233s-.008-2.389-.046-3.232c-.099-2.153-1.111-3.182-3.279-3.281zm-3.233 10.62c-2.269 0-4.108-1.839-4.108-4.108 0-2.269 1.84-4.108 4.108-4.108s4.108 1.839 4.108 4.108c0 2.269-1.839 4.108-4.108 4.108zm4.271-7.418c-.53 0-.96-.43-.96-.96s.43-.96.96-.96.96.43.96.96-.43.96-.96.96zm-1.604 3.31c0 1.473-1.194 2.667-2.667 2.667s-2.667-1.194-2.667-2.667c0-1.473 1.194-2.667 2.667-2.667s2.667 1.194 2.667 2.667zm4.333-12h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm.952 15.298c-.132 2.909-1.751 4.521-4.653 4.654-.854.039-1.126.048-3.299.048s-2.444-.009-3.298-.048c-2.908-.133-4.52-1.748-4.654-4.654-.039-.853-.048-1.125-.048-3.298 0-2.172.009-2.445.048-3.298.134-2.908 1.748-4.521 4.654-4.653.854-.04 1.125-.049 3.298-.049s2.445.009 3.299.048c2.908.133 4.523 1.751 4.653 4.653.039.854.048 1.127.048 3.299 0 2.173-.009 2.445-.048 3.298z" />
            </svg>
          </a>
                      </span>
                </div>
               </h2></Reveal>
       
          </div>

          <div className="technologiesUsed">
                <div className="techAtWork">
                <Reveal><div className="titluSiSvg">
                      <span className="spanSVG2">
                     <svg
                     className="svgIcon2"
                     xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 25 25"
                     >
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1 10.199l-3.64 1.801 3.64 1.796v2.204l-6-2.935v-2.131l6-2.934v2.199zm8 2.866l-6 2.935v-2.204l3.64-1.796-3.64-1.801v-2.199l6 2.935v2.13z" />
                    </svg>
                  </span>
                  <p className="techUsedTitle">Tehnologii</p>
                 </div></Reveal>
                 <Reveal><div className="techContainer">
                    <span className="tech-item">HTML</span>
                    <span className="tech-item">HTMLX</span>
                    <span className="tech-item">CSS</span>
                    <span className="tech-item">Tailwind</span>
                    <span className="tech-item">JavaScript</span>
                    <span className="tech-item">React</span>
                    <span className="tech-item">Vite</span>
                    <span className="tech-item">NodeJS</span>
                    <span className="tech-item">Express</span>
                    <span className="tech-item">Python</span>
                    <span className="tech-item">MongoDB</span>
                    <span className="tech-item">MySQL</span>
                    <span className="tech-item">GitHub</span>
                    <span className="tech-item">Jira</span>
                     
                  </div></Reveal>
                </div>
          </div>

        </div>

      </section> 
    </div>
);
};
export default AboutSection;