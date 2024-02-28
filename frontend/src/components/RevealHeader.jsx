import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import "../styles/RevealHeader.css"

export const RevealHeader = ({ children, width = 'fit-content'}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const mainControls = useAnimation();
    

    useEffect(() => {
      if(isInView){
        mainControls.start("visible");
      }
    }, [isInView]);

  return (
    <div ref={ref} style={{position: 'relative', overflow: 'hidden'}}>
      <motion.div

      style={{ display:"flex", alignItems:"center", justifyContent:"center"}}

      variants={{
        hidden: { opacity: 0, y: -75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{
        duration: 0.5,
        delay: 0
      }}
      >
        {children}
      </motion.div>

    </div>
  );
};

export const RevealHeader2 = ({ children, width = 'fit-content'}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();
  

  useEffect(() => {
    if(isInView){
      mainControls.start("visible");
    }
  }, [isInView]);

return (
  <div ref={ref} style={{ position: 'relative', width, overflow: 'hidden', width: "34px"}}>
    <motion.div

    className='motionDiv'

    variants={{
      hidden: { opacity: 0, y: -75 },
      visible: { opacity: 1, y: 0 },
    }}
    initial="hidden"
    animate={mainControls}
    transition={{
      duration: 0.5,
      delay: 0.25
    }}
    >
      {children}
    </motion.div>

  </div>
);
};

export const RevealHeader3 = ({ children, width = 'fit-content', }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();
  

  useEffect(() => {
    if(isInView){
      mainControls.start("visible");
    }
  }, [isInView]);

return (
  <div ref={ref} style={{ position: 'relative', width, overflow: 'hidden', width: "40px"}}>
    <motion.div
    
    style={{ display:"flex", alignItems:"center", justifyContent:"center", width:"40px", height:"40px"}}

    variants={{
      hidden: { opacity: 0, y: -75 },
      visible: { opacity: 1, y: 0 },
    }}
    initial="hidden"
    animate={mainControls}
    transition={{
      duration: 0.5,
      delay: 0.5
    }}
    >
      {children}
    </motion.div>

  </div>
);
};
