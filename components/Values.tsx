import React from 'react';
import PrincipleDiamond from '../public/principle-diamond.png';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

export default function Values() {

  const controls = useAnimation();
  const [ref, inView] = useInView();

  // Define the animation properties
  const animationVariants = {
    hidden: { opacity: 0, y: 30 }, // Start hidden below and with 0 opacity
    visible: { opacity: 1, y: 0, transition: { duration: 1 } }, // End visible with 1 opacity
  };

  // Animate when the element is in view
  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div className='bg-background'
      initial="hidden"
      animate={controls}
      variants={animationVariants}>
      <div className='text-foreground mx-auto px-2 py-8 md:max-w-5xl md:px-4 lg:px-8' ref={ref}>
        <h1 className='text-4xl md:text-6xl text-center py-8'>Our Values</h1>

        <div className='mb-12'>
          <h3 className='text-xl md:text-2xl font-semibold mb-4'>Tenacity</h3>
          <p className='text-base md:text-lg'>
            With a proven track record of successfully delivering high-quality web design solutions to a diverse range of clients, we’ve earned a reputation for reliability, professionalism, and exceeding client expectations.
          </p>
        </div>

        <div className='mb-12'>
          <h3 className='text-xl md:text-2xl font-semibold mb-4'>Dedication</h3>
          <p className='text-base md:text-lg'>
            With a proven track record of successfully delivering high-quality web design solutions to a diverse range of clients, we’ve earned a reputation for reliability, professionalism, and exceeding client expectations.
          </p>
        </div>

        <div>
          <h3 className='text-xl md:text-2xl font-semibold mb-4'>Collaboration</h3>
          <p className='text-base md:text-lg'>
            With a proven track record of successfully delivering high-quality web design solutions to a diverse range of clients, we’ve earned a reputation for reliability, professionalism, and exceeding client expectations.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

