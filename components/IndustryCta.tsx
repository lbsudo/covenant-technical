"use client"
import React from 'react'
import Link from 'next/link';
import { Button } from "@nextui-org/react";
import { ctaButton } from "./primitives";
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';


export default function IndustryCta() {
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
    <motion.div
      initial="hidden"
      animate={controls}
      variants={animationVariants}
    >
      <hr className='my-2 ' ref={ref} />
      <div className='bg-background w-full flex flex-col justify-center items-center py-6'>
        <h3 className='text-foreground text-4xl lg:text-5xl flex flex-col items-center font-bold mb-6'>Lets Get Started<span className='text-primary font-bold'> Today</span></h3>
        {/* <p className='text-sm lg:text-xl text-center text-foreground font-bold uppercase mb-2'>Let us use our expertise to be the digital service suit that <br />brings you from just a vision to market growth</p> */}
        <Link href="/contact">
          <Button
            color="secondary"
            className={ctaButton({ color: 'primary' })}
            variant="ghost"
          >
            Let&apos;s Chat
          </Button>
        </Link>

      </div>
    </motion.div>
  )
}
