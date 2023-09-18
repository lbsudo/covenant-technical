"use client"
import React from 'react'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion'

type Props = {
  Title: string
  Img: string
  Offerings: string[]
}

export default function IndustryInfo({ Title, Img, Offerings }: Props) {

  const controls = useAnimation();
  const [ref, inView] = useInView();

  // Define the animation properties
  const animationVariants = {
    hidden: { opacity: 0, y: 30 }, // Start hidden below and with 0 opacity
    visible: { opacity: 1, y: 0, transition: { duration: 1 } }, // End visible with 1 opacity
  };

  // Animate when the element is in view
  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      initial="hidden"
      animate={controls}
      variants={animationVariants}
      ref={ref}>
      <h2 className='text-foreground text-3xl md:text-5xl font-semibold text-center mb-6'>{Title}</h2>
      <div className='flex flex-col items-center md:flex-row md:items-start mx-6 md:mx-28 pb-8 mb-8'>
        <div className='w-full md:w-1/2 flex justify-center items-center md:mr-4 xl:mr-0 md:mt-6'>
          <Image src={Img} alt='Industry Image' height={800} width={400} priority />
        </div>
        <div className='w-full md:w-1/2 mt-4 md:mt-0'>
          <ul>
            {Offerings.map((offering, index) => (
              <li key={index} className='text-left text-xl'>
                <p className='my-6'>
                  {offering}
                </p>
                {index < Offerings.length - 1 && <hr className='my-2' />}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  )
}

