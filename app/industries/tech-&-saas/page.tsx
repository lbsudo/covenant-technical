"use client"
import React from 'react';
import IndustryCta from "@/components/IndustryCta";
import IndustryInfo from "@/components/IndustryInfo";
import { motion, useAnimation } from 'framer-motion'
import Image from 'next/image';

export default function IndustriesPage() {

  const controls = useAnimation();

  React.useEffect(() => {
    // Animate the div in the first section when the page loads
    controls.start({ opacity: 1, y: 0, transition: { duration: 1 } });
    // Fetch post metadata from the API route
  }, [controls]);

  const List = [
    "End-to-end product development solutions",
    "Shorter software release cycles",
    "An enhanced value chain with the flexibility to implement agile and responsive processes",
    "Rapidly created POCs as and when required",
    "Proven testing methodologies across risk management, functional and compliance testing",
    "A team of expert design consultants with a mobile-first mantra",
    "Rapid prototyping of new ideas with a major focus on user experience",
  ]

  return (
    <div>
      <section className='py-40 flex justify-center flex-col w-full relative z-0' >
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/techcover.jpg"
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
          <h1 className='text-5xl lg:text-6xl w-3/4 h-1/2 text-center mt-8'>SaaS, HiTech, ISV & Communications</h1>
          <h4 className='text-4xl w-3/4 h-1/4 mt-16 mb-16 text-center'>Working with the latest technology and mainting foundational systems into the future and beyond to solve problem for businesses and consumers.</h4>
        </motion.div>
      </section>
      <section>
        <IndustryInfo
          Title="Adapting to Technology to Accelerate Business"
          Img="/codecover.jpg"
          Offerings={List}
        />
      </section>
      <section>
        <IndustryCta />
      </section>
    </div>
  );
}

