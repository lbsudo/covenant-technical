import React from 'react'
import AboutBar from "@/components/about/AboutBar";
import OurApproach from "@/components/about/OurApproach";
import OurExpertise from "@/components/about/OurExpertise";
import OurStrengths from "@/components/about/OurStrenghts";
import Values from "@/components/about/Values";
import Vision from "@/components/about/Vision";
import AboutHero from '@/components/about/AboutHero';


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
