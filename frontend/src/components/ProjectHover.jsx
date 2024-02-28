import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import "../styles/ProjectsSection.css"

export const ProjectHover = ({ children, width = 'fit-content'}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const mainControls = useAnimation();
    

    useEffect(() => {
      if(isInView){
        mainControls.start("visible");
      }
    }, [isInView]);

  return (
    <div ref={ref} className='projectImageMotionDiv'>
      <motion.div className="motionDiv"
      
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{
        duration: 0.3,
      }}
      whileHover={{scale: 1.1, rotate: 2 }}
      >
        {children}
      </motion.div>
    </div>
  );
};
