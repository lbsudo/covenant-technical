"use client"
import React from 'react'
import IndustryGrid from "@/components/IndustryGrid";
import { motion, useAnimation } from 'framer-motion'
import Image from 'next/image';

export default function IndustriesPage() {

  const controls = useAnimation();

  React.useEffect(() => {
    // Animate the div in the first section when the page loads
    controls.start({ opacity: 1, y: 0, transition: { duration: 1 } });
    // Fetch post metadata from the API route
  }, [controls]);

  return (
    <div className="mb-16">
      <section className='py-40 flex justify-center flex-col w-full relative z-0' >
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/industry.jpg"
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
          <h1 className='text-6xl w-3/4 h-1/2 text-center mt-8'>Industries We Work With</h1>
          <h4 className='text-4xl w-3/4 h-1/4 mt-16 mb-16 text-center'>We work with a wide ranges of businesses that face similar problems but need specialized solutions that fit their needs these are just some of the industries we work with.</h4>
        </motion.div>
      </section>
      <section>
        <IndustryGrid />
      </section>
    </div>
  );
}

