"use client"
import React from 'react'
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion'
import ContactForm from "@/components/ContactForm";
import GetInTouch from "@/components/GetInTouch";

export default function ContactPage() {

  const controls = useAnimation();

  useEffect(() => {
    // Animate the div in the first section when the page loads
    controls.start({ opacity: 1, y: 0, transition: { duration: 1 } });
    // Fetch post metadata from the API route
  }, [controls]);

  return (
    <>
      <motion.div className="flex flex-col lg:flex-row justify-between items-start h-auto md:h-screen px-12"
        initial={{ opacity: 0, y: 50 }}
        animate={controls}>
        {/* Left half of the screen */}
        <section className="w-full lg:w-1/3 pb-8">
          <GetInTouch />
        </section>
        {/* Right half of the screen */}
        <section className="w-full lg:w-2/3 ">
          <div>
            <h3 className="text-currentColor text-3xl lg:text-4xl font-semibold">Drop Us A Line</h3>
          </div>
          <ContactForm />
        </section>
      </motion.div>
    </>
  );
}
