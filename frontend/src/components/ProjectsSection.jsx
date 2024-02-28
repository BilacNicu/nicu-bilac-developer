import "../styles/ProjectsSection.css";
import {React, useState, useEffect} from 'react';
import messageBoardImg from '../assets/MessageBoard.PNG'
import CVApplicationImg from '../assets/CVApplication.PNG'
import furnitureWebsiteImg from '../assets/FurnitureWebsite.PNG'
import nicusBitesImg from '../assets/NicusBites.PNG'
import { Reveal, RevealP, RevealP2 } from '../components/Reveal'
import { ProjectHover } from '../components/ProjectHover'
import { AnimatePresence } from "framer-motion"
import {Modal} from "../components/Modal"

function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const openModalOrLink = (project) => {
    if (windowWidth > 1200) {
      setSelectedProject(project);
    } else {
      window.open('https://nicu-s-message-board.fly.dev/', '_blank');
    }
  };

  const openModalOrLink2 = (project) => {
    if (windowWidth > 1200) {
      setSelectedProject(project);
    } else {
      window.open('https://bilacnicu.github.io/cv_application/', '_blank');
    }
  };

  const openModalOrLink3 = (project) => {
    if (windowWidth > 1200) {
      setSelectedProject(project);
    } else {
      window.open('https://bilacnicu.github.io/nic-nel-prod/', '_blank');
    }
  };

  const openModalOrLink4 = (project) => {
    if (windowWidth > 1200) {
      setSelectedProject(project);
    } else {
      window.open('https://bilacnicu.github.io/Nicu-sBites/', '_blank');
    }
  };



  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const projects = [
    {
      id: 0,
      image: messageBoardImg,
      title:"Message Board",
      technologies: "NodeJS - React - MongoDB - Express",
      description: "Message board pentru demonstrarea comunicării front-to-back cu necesitatea de a creea un cont, Sdatele fiind salvate într-o BD. ",
      codeLink:"https://github.com/BilacNicu/Nicu-s-Message-Board",
      websiteLink:"https://nicu-s-message-board.fly.dev/"
    },
    {
      id: 1,
      image: CVApplicationImg,
      title: "CV Builder",
      technologies: "React - Vite - Javascript",
      description: "Aplicație de construire a CV-ului adusă în realitate cu ajutorul React hooks și stilizare CSS. In principal useState() si useEffect() au fost utilizate.",
      codeLink:"https://github.com/BilacNicu/cv_application",
      websiteLink:"https://bilacnicu.github.io/cv_application/"
    },
    {
      id: 2,
      image: furnitureWebsiteImg,
      title: "Nic Nel Prod",
      technologies: "React - Vite - Javascript",
      description: "Un website pe scară mai largă, mai multe componente redate cu ajutorul React și o grămadă de CSS.",
      codeLink:"https://github.com/BilacNicu/nic-nel-prod",
      websiteLink:"https://bilacnicu.github.io/nic-nel-prod/"
    },
    {
      id: 3,
      image: nicusBitesImg,
      title: "Nicu's Bites",
      technologies: "Javascript - Webpack - CSS - HTML",
      description: "Un proiect standard, utilizând vanilla Javascript, stilizare CSS și producerea unei versiuni de producție cu Webpack.",
      codeLink:"https://github.com/BilacNicu/Nicu-sBites",
      websiteLink:"https://bilacnicu.github.io/Nicu-sBites/"
    },
  ];



return (

    <section className="projectsDescription" id="projects">
      <div className="projectsTitle">
          <h1 className="h1P"><span className="line" id="lineP"></span><Reveal>Proiecte<span className="dot">.</span></Reveal></h1>
      </div>

      <div className="projectsDiv">

        <div className="project">
       <div className="projectImage">
        <ProjectHover>
          <img
           src={messageBoardImg}
           className="img"
           onClick={() => openModalOrLink(projects[0])} 
          />
        </ProjectHover>
            </div>
            <RevealP> <div className="projectDescription">
           <div className="titleAndLinks">
               <h1 className="titleProject">Message Board<span className="lineProjects" id="msgLine"></span><span className="spanSVG" id="projectSVG">
          <a href="https://github.com/BilacNicu/Nicu-s-Message-Board" target="_blank" rel="noopener noreferrer">
            {/* SVG code goes here */}
            <svg
              className="svgIcon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 29 29"
            >
              {/* Replace with your actual SVG path data */}
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z" />
            </svg>
          </a>
        </span>
        <span className="spanSVG" id="projectSVG">
          <a  href="https://nicu-s-message-board.fly.dev/" target="_blank" rel="noopener noreferrer">
            {/* SVG code goes here */}
            <svg
              className="svgIcon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 29 29"
            >
              {/* Replace with your actual SVG path data */}
              <path d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z" />
            </svg>
          </a>
        </span></h1>
               </div>
               <h2 className="techUsed">
                    NodeJS - React - MongoDB - Express
                </h2>
                <p className="projectDescription">
                Message board pentru demonstrarea comunicării front-to-back cu necesitatea de a creea un cont, datele fiind salvate într-o BD.
                </p>
            </div></RevealP>
            <AnimatePresence
            initial={false}
            wait={true}
            onExitComplete={() => null}
            >
             {selectedProject  && <Modal project={selectedProject} handleClose={closeModal} />}
            </AnimatePresence>
        </div>
        

        <div className="project">
         <div className="projectImage" id="projectImgCV">
         <ProjectHover><img src={CVApplicationImg} className="img" onClick={() => openModalOrLink2(projects[1])} ></img></ProjectHover> 
            </div>
            <RevealP2><div className="projectDescription">
               <div className="titleAndLinks">
                <h1 className="titleProject">CV Builder<span className="lineProjects"></span><span className="spanSVG" id="projectSVG">
          <a  href="https://github.com/BilacNicu/cv_application" target="_blank" rel="noopener noreferrer">
            {/* SVG code goes here */}
            <svg
              className="svgIcon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 29 29"
            >
              {/* Replace with your actual SVG path data */}
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z" />
            </svg>
          </a>
        </span>
        <span className="spanSVG" id="projectSVG">
          <a  href="https://bilacnicu.github.io/cv_application/" target="_blank" rel="noopener noreferrer">
            {/* SVG code goes here */}
            <svg
              className="svgIcon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 29 29"
            >
              {/* Replace with your actual SVG path data */}
              <path d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z" />
            </svg>
          </a>
        </span>
        </h1>
               </div>
               <h2 className="techUsed">
                    React - Vite - Javascript
                </h2>
                <p className="projectDescription">
                Aplicație de construire a CV-ului adusă în realitate cu ajutorul React hooks și stilizare CSS.
                </p>
                <AnimatePresence
            initial={false}
            wait={true}
            onExitComplete={() => null}
            >
             {selectedProject  && <Modal project={selectedProject} handleClose={closeModal} />}
            </AnimatePresence>
            </div></RevealP2>
        </div>

        <div className="project">
            <div className="projectImage">
            <ProjectHover><img src={furnitureWebsiteImg} className="img" onClick={() => openModalOrLink3(projects[2])} ></img></ProjectHover>
            </div>
            <Reveal> <div className="projectDescription">
               <div className="titleAndLinks">
                <h1 className="titleProject">Nic Nel Prod<span className="lineProjects"></span><span className="spanSVG" id="projectSVG">
          <a  href="https://github.com/BilacNicu/nic-nel-prod" target="_blank" rel="noopener noreferrer">
            {/* SVG code goes here */}
            <svg
              className="svgIcon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 29 29"
            >
              {/* Replace with your actual SVG path data */}
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z" />
            </svg>
          </a>
        </span>
        <span className="spanSVG" id="projectSVG">
          <a  href="https://bilacnicu.github.io/nic-nel-prod/" target="_blank" rel="noopener noreferrer">
            {/* SVG code goes here */}
            <svg
              className="svgIcon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 29 29"
            >
              {/* Replace with your actual SVG path data */}
              <path d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z" />
            </svg>
          </a>
                </span></h1>
               </div>
               <h2 className="techUsed">
                    React - Vite - Javascript
                </h2>
                <p className="projectDescription">
                Un website pe scară mai largă, mai multe componente redate cu ajutorul React și o grămadă de CSS.
                </p>
                <AnimatePresence
            initial={false}
            wait={true}
            onExitComplete={() => null}
            >
             {selectedProject  && <Modal project={selectedProject} handleClose={closeModal} />}
            </AnimatePresence>
            </div></Reveal>
        </div>

        <div className="project">
            <div className="projectImage">
            <ProjectHover><img src={nicusBitesImg} className="img" onClick={() => openModalOrLink4(projects[3])} ></img></ProjectHover>
            </div>
            <RevealP><div className="projectDescription">
               <div className="titleAndLinks">
                <h1 className="titleProject">Nicu's Bites<span className="lineProjects"></span><span className="spanSVG" id="projectSVG">
          <a  href="https://github.com/BilacNicu/Nicu-sBites" target="_blank" rel="noopener noreferrer">
            {/* SVG code goes here */}
            <svg
              className="svgIcon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 29 29"
            >
              {/* Replace with your actual SVG path data */}
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z" />
            </svg>
          </a>
        </span>
        <span className="spanSVG" id="projectSVG">
          <a  href="https://bilacnicu.github.io/Nicu-sBites/" target="_blank" rel="noopener noreferrer">
            {/* SVG code goes here */}
            <svg
              className="svgIcon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 29 29"
            >
              {/* Replace with your actual SVG path data */}
              <path d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z" />
            </svg>
          </a>
        </span></h1>
               </div>
               <h2 className="techUsed">
                    Javascript - Webpack - CSS - HTML
                </h2>
                <p className="projectDescription">
                Un proiect standard, utilizând vanilla Javascript, stilizare CSS și producerea unei versiuni de producție cu Webpack.
                </p>
                <AnimatePresence
            initial={false}
            wait={true}
            onExitComplete={() => null}
            >
             {selectedProject  && <Modal project={selectedProject} handleClose={closeModal} />}
            </AnimatePresence>
            </div></RevealP>
        </div>

      </div>
      

    </section> 
    
  
);
};
export default ProjectsSection;