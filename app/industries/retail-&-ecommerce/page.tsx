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
    "Automated Fraud Protection to Prevent Costly Chargebacks (AI)",
    "Blockchain Payments",
    "Supply Chain Managment",
    "Decentralized Marketplace",
    "Robotic Process Automation",
    "Native ECommerce Platforms",
  ]

  return (
    <div>
      <section className='py-40 flex justify-center flex-col w-full relative z-0' >
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/retailcover.jpg"
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
          <h1 className='text-5xl lg:text-6xl w-3/4 h-1/2 text-center mt-8'>Ecommerce Software & Custom Retail Solutions</h1>
          <h4 className='text-4xl w-3/4 h-1/4 mt-16 mb-16 text-center'>Ecommerce solutions built on digital intelligence to deliver higher levels of customer satisfaction and to convert shoppers into buyers.</h4>
        </motion.div>
      </section>
      <section>
        <IndustryInfo
          Title="Retail Innovation Through Tech"
          Img="/ecomcover.jpg"
          Offerings={List}
        />
      </section>
      <section>
        <IndustryCta />
      </section>
    </div>
  );
}

