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
    "Create a secure and standardized record of medical data",
    "Ensure on-demand access to patient information",
    "Enable an integrated system of medical systems and applications to capture data",
    "Detect and analyze patterns across data in real-time to identify health conditions, potential treatment methods, and their outcomes (AI)",
  ]

  return (
    <div>
      <section className='py-32 mb-12 flex justify-center w-full flex-col bg-cover bg-no-repeat bg-center relative' style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/carecover.jpg')` }}>
        <motion.div className='w-full text-white flex flex-col justify-center items-center relative z-10'
          initial={{ opacity: 0, y: 50 }}
          animate={controls}>
          <h1 className='text-4xl md:text-6xl w-3/4 h-1/2 text-center mt-8'>Life Sciences, Pharma, & Healthcare</h1>
          <h4 className='text-2xl md:text-4xl w-3/4 h-1/4 mt-16 mb-16 text-center'>Leverage intelligent technologies to drive better care experiences and improved cost savings</h4>
        </motion.div>
      </section>
      <section>
        <IndustryInfo
          Title="Our Healthcare Technical Solutions"
          Img="/carecover2.jpg"
          Offerings={List}
        />
      </section>
      <section>
        <IndustryCta />
      </section>
    </div>
  );
}

