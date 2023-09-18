"use client"

import React from 'react';
import Link from 'next/link';
import { Button } from '@nextui-org/react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import { baseButton } from './primitives';

export default function HomeCta() {
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
    <div className="w-full flex flex-col justify-center items-center pt-4 pb-12" ref={ref}>
      <motion.h3
        className="text-foreground text-4xl lg:text-5xl flex flex-col items-center font-bold mb-2"
        initial="hidden"
        animate={controls}
        variants={animationVariants}
      >
        BRANDS THAT<span className="text-[#602AF2] font-bold"> EXPAND</span>
      </motion.h3>
      <motion.p
        className="text-sm lg:text-xl text-center text-foreground font-bold uppercase mb-2"
        initial="hidden"
        animate={controls}
        variants={animationVariants}
      >
        Let us use our expertise to craft strategic user experiences
        <br />
        that target the perfect customers for you
      </motion.p>
      <motion.div
        initial="hidden"
        animate={controls}
        variants={animationVariants}
      >
        <Link href="/contact">
          <Button
            color="secondary"
            className={baseButton({ color: 'primary' })}
            variant="ghost"
          >
            Let&apos;s Chat
          </Button>
        </Link>
      </motion.div>
    </div>
  );
}

