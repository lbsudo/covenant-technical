"use client"
import React from 'react'
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion'
import { Button } from '@nextui-org/button';
import { Link } from '@nextui-org/link';
import { heroButton } from './primitives';


export default function HomeHero() {
  const controls = useAnimation();

  useEffect(() => {
    // Animate the div in the first section when the page loads
    controls.start({ opacity: 1, y: 0, transition: { duration: 1 } });
    // Fetch post metadata from the API route
  }, [controls]);



  return (
    <>
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
        className="relative inset-0 flex flex-col h-full items-center justify-center text-white"
      >
        <h1 className="text-3xl lg:text-6xl w-full lg:w-1/2 h-auto pt-12 pb-4  lg:pb-6 text-center">
          Design & <span className="underline decoration-white">Growth</span>
        </h1>
        <h4 className="text-sm lg:text-lg w-full lg:w-1/2 h-auto pb-6 lg:pb-12 text-center">
          We craft web platforms and user experiences to help businesses attract and convert their ideal clients and boost performance.
        </h4>
        <Link href="/contact">
          <Button
            color="secondary"
            className={heroButton({ color: 'primary' })}
            variant="ghost"
          >
            Book a Free Discovery Call
          </Button>
        </Link>
      </motion.div>
    </>
  )
}
