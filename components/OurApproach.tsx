"use client"
import React from 'react'
import Image from 'next/image'
import Process from '../public/process.png'
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

export default function OurApproach() {

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
    <>
      <motion.div className='text-foreground bg-background w-full'
        initial="hidden"
        animate={controls}
        variants={animationVariants}>
        <div className='h-1/2 text-center text-6xl m-4 pt-16' ref={ref}>
          <h1>Our Approach</h1>
          <p className='text-lg mt-4 pb-8'>With a proven track record of successfully delivering high-quality web design solutions to a diverse range of clients, we’ve earned a reputation for reliability, professionalism and exceeding client expectations.</p>
        </div>
        <div className='flex flex-col w-full justify-center items-center text-xl pb-12'>
          <Image priority src={Process} alt={'/'} height={500} width={250} />
        </div>
      </motion.div>
    </>
  )
} 
