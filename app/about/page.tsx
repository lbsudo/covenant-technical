"use client"
import React from 'react'
import AboutBar from "@/components/AboutBar";
import OurApproach from "@/components/OurApproach";
import OurExpertise from "@/components/OurExpertise";
import OurStrengths from "@/components/OurStrenghts";
import Values from "@/components/Values";
import Vision from "@/components/Vision";
import { motion, useAnimation } from 'framer-motion'
import Image from 'next/image';

export default function AboutPage() {
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
            src="/wrld.jpg"
            alt="Background Image"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <motion.div className='relative w-full text-white flex flex-col justify-center items-center '
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
        >
          <h1 className='text-6xl w-3/4 h-1/2 text-center mt-8'>Focused on a covenant with success</h1>
          <h4 className='text-4xl w-3/4 h-1/4 mt-16 mb-16 text-center'>We want to be the catalyst to drive digital growth in your business through the best technical practices and digital tools.</h4>
        </motion.div>
      </section>
      <section>
        <AboutBar />
      </section>
      <section id='exp'>
        <OurExpertise />
      </section>
      <section id='app'>
        <OurApproach />
      </section>
      <section id='vis'>
        <Vision />
      </section>
      <section id='val'>
        <Values />
      </section>
      <section id='strn'>
        <OurStrengths />
      </section>
    </>
  );
}
