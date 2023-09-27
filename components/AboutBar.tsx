"use client"
import React from "react"
import Link from "next/link";
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';


export default function AboutBar() {
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
      <motion.div className="bg-purple-500 py-6 w-full"
        initial="hidden"
        animate={controls}
        variants={animationVariants}
        ref={ref}>
        <ul className="text-white overflow-x-auto whitespace-nowrap flex flex-row justify-between items-center text-sm md:text-xl md:mx-16 lg:text-3xl  " >
          <Link href={'#exp'} className="transition-all delay-0 duration-1000 ease-in-out hover:underline hover:underline-offset-4">
            <li>Our Expertise</li>
          </Link>
          <Link href={'#app'} className="transition-all delay-0 duration-1000 ease-in-out hover:underline hover:underline-offset-4">
            <li>Our Approach</li>
          </Link>
          <Link href={'#vis'} className="transition-all delay-0 duration-1000 ease-in-out hover:underline hover:underline-offset-4">
            <li>Our Vision</li>
          </Link>
          <Link href={'#val'} className="transition-all delay-0 duration-1000 ease-in-out hover:underline hover:underline-offset-4">
            <li>Our Values</li>
          </Link>
          <Link href={'#strn'} className="transition-all delay-0 duration-1000 ease-in-out hover:underline hover:underline-offset-4">
            <li>Our Strengths</li>
          </Link>
        </ul>
      </motion.div>
    </>
  )
}
