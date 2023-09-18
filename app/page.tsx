"use client"
import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import HomeCta from "@/components/HomeCta";
import MotionBar from "@/components/MotionBar";
import TechServices from "@/components/TechServices";
import HomeTechnologies from "@/components/HomeTechnologies";
import BlogPreview from "@/components/BlogPreview";
import ContactCTA from "@/components/ContactCTA";
import HomeHero from '@/components/HomeHero';


export default function Home() {

  const controls = useAnimation();

  useEffect(() => {
    // Animate the div in the first section when the page loads
    controls.start({ opacity: 1, y: 0, transition: { duration: 1 } });
    // Fetch post metadata from the API route
  }, [controls]);

  return (
    <div>
      <section className="relative w-full h-screen overflow-hidden">
        <HomeHero />
      </section>
      <section>
        <HomeCta />
      </section>
      <section>
        <TechServices />
      </section>
      <section>
        <MotionBar />
      </section>
      <section>
        <HomeTechnologies />
      </section>
      {/* <section> */}
      {/*   <BlogPreview list={postMetadata} /> */}
      {/* </section> */}
      <section>
        <ContactCTA />
      </section>
    </div>
  );
}
