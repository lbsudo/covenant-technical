"use client"
import React from 'react'
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion'
import { Button } from '@nextui-org/button';
import { Link } from '@nextui-org/link';
import { baseButton } from './primitives';


export default function HomeHero() {
  const controls = useAnimation();

  useEffect(() => {
    // Animate the div in the first section when the page loads
    controls.start({ opacity: 1, y: 0, transition: { duration: 1 } });
    // Fetch post metadata from the API route
  }, [controls]);



  return (
    <div
    >
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 object-cover w-full h-full"
      >
        <source src="/WavessDark.mp4" type="video/mp4" />
      </video>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        className="relative inset-0 flex flex-col h-full justify-start items-center text-white"
      >
        <h1 className="text-6xl lg:text-8xl text-center w-full h-auto pt-36 pb-6">
          Design & <span className="underline decoration-white">Growth</span>
        </h1>
        <h4 className="text-lg lg:text-2xl text-center lg:text-left w-full lg:w-1/2 h-auto pb-12 ">
          We craft web platforms and user experices to help businesses attract and convert their ideal clients and boost performance.
        </h4>
        <Link href="/contact">
          <Button
            color="secondary"
            className={baseButton({ color: 'primary' })}
            variant="ghost"
          >
            Book a Free Discovery Call
          </Button>
        </Link>
      </motion.div>
    </div>
  )
}
