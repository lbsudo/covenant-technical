import React from 'react'
import AboutBar from "@/components/AboutBar";
import OurApproach from "@/components/OurApproach";
import OurExpertise from "@/components/OurExpertise";
import OurStrengths from "@/components/OurStrenghts";
import Values from "@/components/Values";
import Vision from "@/components/Vision";
import AboutHero from '@/components/AboutHero';


export async function generateMetadata() {
  return {
    title: "About",
  }
}


export default function AboutPage() {

  return (
    <>
      <section className='py-40 flex justify-center flex-col w-full relative z-0' >
        <AboutHero />
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
