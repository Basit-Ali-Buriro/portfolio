import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';

const FadeInOnScroll = ({
  children,
  direction = 'up',
  duration = 0.6,
  delay = 0,
  className = ''  // <-- new prop to pass extra classes
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.2, once: false });

  const getYOffset = () => {
    switch (direction) {
      case 'up': return 40;
      case 'down': return -40;
      case 'left': return 40;
      case 'right': return -40;
      default: return 40;
    }
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{
        opacity: 0,
        y: direction === 'up' || direction === 'down' ? getYOffset() : 0,
        x: direction === 'left' || direction === 'right' ? getYOffset() : 0
      }}
      animate={isInView ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, y: getYOffset(), x: getYOffset() }}
      transition={{ duration, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInOnScroll;
