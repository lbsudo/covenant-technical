import React from 'react'
import Desk from '../public/deskwork.jpg'
import Image from 'next/image'
import { baseButton } from "./primitives";
import { largeButton } from './primitives';
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

export default function ContactCTA() {

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
    >
      <div className='block w-full bg-black mt-6' ref={ref}>
        <div className='flex flex-col justify-center items-center'>
          <Image src={Desk} alt='DeskCTA' height={4000} width={6000} priority className='w-full' />
          <div className='absolute w-3/4 md:mb-16  text-center text-white text-lg md:text-4xl lg:text-6xl flex flex-col items-center justify-center z-10'>
            <p className=' w-full mb-10 '>
              Proudly American business that is ambitious to lead in the digital space by working with great companies
            </p>
            <Link href='/contact'>
              <Button
                color="secondary"
                className={largeButton({ color: 'primary' })}
                variant="ghost"
              >
                GET IN TOUCH WITH US
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
