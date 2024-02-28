import { motion } from "framer-motion";
import Backdrop from "../components/Backdrop";
import { useEffect } from "react";
import "../styles/Modal.css"

const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
    },
  };
  

  export const Modal = ({ handleClose, project }) => {

    
    // Use the project prop to display details about the selected project
    return (
      <Backdrop onClick={handleClose}>
        <motion.div
          onClick={(e) => e.stopPropagation()}
          className="modal"
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
             <img src={project.image} alt={project.title} className="modalImg"/>
              <div className="projectDescriptionModal">
            <div className="titleAndLinks">
               <h1 className="titleProjectModal">{project.title}<span className="lineProjects" id="msgLine"></span><span className="spanSVG" id="projectSVG">
          <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
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
          <a  href={project.websiteLink} target="_blank" rel="noopener noreferrer">
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
               {project.technologies}
                </h2>
                <p className="projectDescription" id="modalText">
                {project.description}
                </p>
            </div>
        </motion.div>
      </Backdrop>
    );
  };
  
