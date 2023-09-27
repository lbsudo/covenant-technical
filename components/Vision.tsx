"use client"
import React from 'react';
import Image from 'next/image';
import PrincipleDiamond from '../public/principle-diamond.png';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

export default function Vision() {

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
    <motion.div className='bg-black text-white'
      initial="hidden"
      animate={controls}
      variants={animationVariants}>
      <div className='mx-auto px-4 py-8 md:max-w-5xl md:px-8 lg:px-16' ref={ref}>
        <div className='text-center text-4xl md:text-6xl py-16'>
          <h1>Covenant Vision</h1>
          <p className='text-base md:text-lg mt-4 pb-8'>
            Our vision is to be our clients&apos; full suite Digital Design and development agency and offer a full suite of services to help our clients go from the first concept to deployment and beyond using innovative design, seamless user experiences, and emerging technologies. We aspire to be the catalyst to help you thrive in the digital world.
          </p>
          <p className='text-base md:text-lg mt-4 pb-8'>
            The foundation of Covenant Digital is the diamond of principles we operate our business on:
          </p>
        </div>
        <div className='flex flex-col w-full justify-center items-center text-base md:text-xl pb-12'>
          <Image src={PrincipleDiamond} alt='Principle Diamond' height={800} width={800} />
        </div>
      </div>
    </motion.div>
  );
}

