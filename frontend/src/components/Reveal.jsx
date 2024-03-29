import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

export const Reveal = ({ children, width = 'fit-content', color = '#0aff9d' }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const mainControls = useAnimation();
    const slideControls = useAnimation();
    

    useEffect(() => {
      if(isInView){
        mainControls.start("visible");
        slideControls.start("visible");
      }
    }, [isInView]);

  return (
    <div ref={ref} style={{ position: "relative", width, overflow:"hidden" }}>
      <motion.div
      variants={{
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{
        duration: 0.75,
        delay: 0.25
      }}
      >
        {children}
      </motion.div>
      <motion.div
      variants={{
        hidden: { left: 0 },
        visible: { left: "100%" },
      }}
      initial="hidden"
      animate={slideControls}
      transition={{
        duration: 0.75,
        
        ease: "easeIn"
      }}
      style={{
        position: "absolute",
        top: 4,
        bottom: 4,
        left: 0,
        right: 0,
        background: color,
        zIndex: 20,
      }}
      />
    </div>
  );
};

export const RevealP = ({ children, width = 'fit-content', color = '#0aff9d' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();
  const slideControls = useAnimation();
  

  useEffect(() => {
    if(isInView){
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);

return (
  <div ref={ref} style={{ position: "relative", width, overflow:"hidden", minHeight:"200px" }}>
    <motion.div
    variants={{
      hidden: { opacity: 0, y: 100 },
      visible: { opacity: 1, y: 0 },
    }}
    initial="hidden"
    animate={mainControls}
    transition={{
      duration: 0.75,
      delay: 0.25
    }}
    >
      {children}
    </motion.div>
    <motion.div
    variants={{
      hidden: { left: 0 },
      visible: { left: "100%" },
    }}
    initial="hidden"
    animate={slideControls}
    transition={{
      duration: 0.75,
      
      ease: "easeIn"
    }}
    style={{
      position: "absolute",
      top: 4,
      bottom: 4,
      left: 0,
      right: 0,
      background: color,
      zIndex: 20,
    }}
    />
  </div>
);
};


export const RevealP2 = ({ children, width = 'fit-content', color = '#0aff9d' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();
  const slideControls = useAnimation();
  

  useEffect(() => {
    if(isInView){
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);

return (
  <div ref={ref} style={{ position: "relative", width, overflow:"hidden", minHeight:"150px" }}>
    <motion.div
    variants={{
      hidden: { opacity: 0, y: 100 },
      visible: { opacity: 1, y: 0 },
    }}
    initial="hidden"
    animate={mainControls}
    transition={{
      duration: 0.75,
      delay: 0.25
    }}
    >
      {children}
    </motion.div>
    <motion.div
    variants={{
      hidden: { left: 0 },
      visible: { left: "100%" },
    }}
    initial="hidden"
    animate={slideControls}
    transition={{
      duration: 0.75,
      
      ease: "easeIn"
    }}
    style={{
      position: "absolute",
      top: 4,
      bottom: 4,
      left: 0,
      right: 0,
      background: color,
      zIndex: 20,
    }}
    />
  </div>
);
};


