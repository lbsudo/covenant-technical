"use client"
import React from 'react'
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion'
import { Button } from '@nextui-org/button';
import { Link } from '@nextui-org/link';
import { heroButton } from './primitives';


export default function BlogHero() {
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
        <source src="/polygon.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-black via-black to-black opacity-50"></div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        className="relative inset-0 flex flex-col h-auto  items-center justify-between text-white"
      >
        <h1 className="text-5xl lg:text-6xl xl:text-8xl w-full lg:w-1/2 h-auto pt-16 md:pt-20 xl:pt-36 text-center">
          Blog
        </h1>
        <h4 className="text-2xl md:text-4xl w-3/4 h-1/4 mt-8 pb-7 text-center">
          Thought-leading views and insights on the latest industry trends for businesses through technology.
        </h4>
      </motion.div>
    </>
  )
}
