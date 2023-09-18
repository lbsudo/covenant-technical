"use client"
import React from 'react'
import AllServices from "@/components/AllServices";
import { motion, useAnimation } from 'framer-motion';

export default function TechnologiesPage() {

  const controls = useAnimation();

  React.useEffect(() => {
    // Animate the div in the first section when the page loads
    controls.start({ opacity: 1, y: 0, transition: { duration: 1 } });
    // Fetch post metadata from the API route
  }, [controls]);


  return (
    <div>
      <section className='py-32 flex justify-center flex-col w-full bg-cover bg-no-repeat bg-top z-0' style={{ backgroundImage: `url('/laptopcover.jpg')` }}>
        <motion.div className='relative w-full text-white flex flex-col justify-center items-center '
          initial={{ opacity: 0, y: 50 }}
          animate={controls}>
          <h1 className='text-6xl w-3/4 h-1/2 text-center mt-8'>Technologies We Work with</h1>
          <h4 className='text-4xl w-3/4 h-1/4 mt-16 mb-16 text-center'>Working with the best tech in the business to get the best results for out clients.</h4>
        </motion.div>
      </section>
      <section className="w-full">
        <AllServices />
      </section>
    </div>
  );
}
