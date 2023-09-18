"use client"
import React from 'react';
import IndustryCta from "@/components/IndustryCta";
import IndustryInfo from "@/components/IndustryInfo";
import { motion, useAnimation } from 'framer-motion'

export default function IndustriesPage() {
  const controls = useAnimation();

  React.useEffect(() => {
    // Animate the div in the first section when the page loads
    controls.start({ opacity: 1, y: 0, transition: { duration: 1 } });
    // Fetch post metadata from the API route
  }, [controls]);




  const List = [
    "Artificial Intelligence (AI) tailored recommendations for travelers ",
    "Blockchain’s removing the layers between consumers and sellers.",
    "Internet of Things",
  ]

  return (
    <div>
      <section className='py-36 mb-12 flex justify-center w-full flex-col bg-cover bg-no-repeat bg-center relative' style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/travelcover2.jpg')` }}>
        <motion.div className='w-full text-white flex flex-col justify-center items-center relative z-10'
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
        >
          <h1 className='text-4xl md:text-6xl w-3/4 h-1/2 text-center mt-8'>Logistics, Travel, & Hospitality</h1>
          <h4 className='text-2xl md:text-4xl w-3/4 h-1/4 mt-16 mb-16 text-center'>Unravel the art and science of converting travelers with comprehensive travel technology</h4>
        </motion.div>
      </section>
      <section>
        <IndustryInfo
          Title="Innovation in Hospitality"
          Img="/travelcover.jpg"
          Offerings={List}
        />
      </section>
      <section>
        <IndustryCta />
      </section>
    </div>
  );
}

