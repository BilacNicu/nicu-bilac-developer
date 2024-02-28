import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

export const RevealNavbar = ({ children, width = 'fit-content'}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const mainControls = useAnimation();
    

    useEffect(() => {
      if(isInView){
        mainControls.start("visible");
      }
    }, [isInView]);

  return (
    <div ref={ref} style={{ position: 'relative', width, overflow: 'hidden' }}>
      <motion.div
      variants={{
        hidden: { opacity: 0, x: -75 },
        visible: { opacity: 1, x: 0 },
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

export const RevealNavbar2 = ({ children, width = 'fit-content'}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();
  

  useEffect(() => {
    if(isInView){
      mainControls.start("visible");
    }
  }, [isInView]);

return (
  <div ref={ref} style={{ position: 'relative', width, overflow: 'hidden' }}>
    <motion.div
    variants={{
      hidden: { opacity: 0, x: -75 },
      visible: { opacity: 1, x: 0 },
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

export const RevealNavbar3 = ({ children, width = 'fit-content'}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();
  

  useEffect(() => {
    if(isInView){
      mainControls.start("visible");
    }
  }, [isInView]);

return (
  <div ref={ref} style={{ position: 'relative', width, overflow: 'hidden' }}>
    <motion.div
    variants={{
      hidden: { opacity: 0, x: -75 },
      visible: { opacity: 1, x: 0 },
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

export const RevealNavbar4 = ({ children, width = 'fit-content'}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  
    const mainControls = useAnimation();
    
  
    useEffect(() => {
      if(isInView){
        mainControls.start("visible");
      }
    }, [isInView]);
  
  return (
    <div ref={ref} style={{ position: 'relative', width, overflow: 'hidden' }}>
      <motion.div
      variants={{
        hidden: { opacity: 0, x: -75 },
        visible: { opacity: 1, x: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{
        duration: 0.5,
        delay: 0.75
      }}
      >
        {children}
      </motion.div>
  
    </div>
  );
  };

  export const RevealNavbar5 = ({ children, width = 'fit-content'}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  
    const mainControls = useAnimation();
    
  
    useEffect(() => {
      if(isInView){
        mainControls.start("visible");
      }
    }, [isInView]);
  
  return (
    <div ref={ref} style={{ position: 'relative', width, overflow: 'hidden' }}>
      <motion.div
      variants={{
        hidden: { opacity: 0, x: -75 },
        visible: { opacity: 1, x: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{
        duration: 0.5,
        delay: 1
      }}
      >
        {children}
      </motion.div>
  
    </div>
  );
  };