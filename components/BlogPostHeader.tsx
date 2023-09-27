'use client'
import React from 'react'
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion'

interface PostHeaderProps {
  title: string;
  overview: string;
  category: string;
  cover: string;
}

export default function BlogPostHeader({ title, category, overview, cover }: PostHeaderProps) {

  const controls = useAnimation();

  React.useEffect(() => {
    // Animate the div in the first section when the page loads
    controls.start({ opacity: 1, y: 0, transition: { duration: 1 } });
    // Fetch post metadata from the API route
  }, [controls]);


  return (
    <>
      <section className='py-40 flex justify-center flex-col w-full relative z-0' >
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={cover}
            alt="Background Image"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
        <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-black via-black to-black opacity-50"></div>
        <motion.div className='relative w-full text-white flex flex-col justify-center items-center '
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
        >
          <h1 className='text-5xl lg:text-6xl w-3/4 h-1/2 text-center mt-8'>{title}</h1>
          <h4 className='text-4xl w-3/4 h-1/4 mt-16 mb-16 text-center'>{overview}</h4>
          <p className='text-white'>{category}</p>
        </motion.div>
      </section>

    </>
  )
}
