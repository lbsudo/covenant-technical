"use client"
import React from 'react'
import { motion, useAnimation } from 'framer-motion'
import Image from 'next/image';

type Props = {}

export default function AboutHero({ }: Props) {
  const controls = useAnimation();

  React.useEffect(() => {
    // Animate the div in the first section when the page loads
    controls.start({ opacity: 1, y: 0, transition: { duration: 1 } });
    // Fetch post metadata from the API route
  }, [controls]);
  return (
    <>
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/wrld.jpg"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <motion.div className='relative w-full text-white flex flex-col justify-center items-center '
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
      >
        <h1 className='text-6xl w-3/4 h-1/2 text-center mt-8'>Focused on a covenant with success</h1>
        <h4 className='text-4xl w-3/4 h-1/4 mt-16 mb-16 text-center'>We want to be the catalyst to drive digital growth in your business through the best technical practices and digital tools.</h4>
      </motion.div>
    </>
  )
}
