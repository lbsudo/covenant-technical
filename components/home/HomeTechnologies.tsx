"use client"
import React, { useEffect } from 'react'
import { Image } from "@nextui-org/react"
import { useTheme as ThemeContext, } from 'next-themes'
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

export default function HomeTechnologies() {
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

  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }




  const { resolvedTheme } = ThemeContext();
  const imageColor = resolvedTheme === 'dark' ? 'FFFFFF' : '000000';


  const Wordpress = `https://cdn.simpleicons.org/Wordpress/${imageColor}`;
  const Drupal = `https://cdn.simpleicons.org/drupal/${imageColor}`;
  const Magento = `https://cdn.simpleicons.org/magento/${imageColor}`;
  const Sitecore = `https://cdn.simpleicons.org/sitecore/${imageColor}`;
  const Squarespace = `https://cdn.simpleicons.org/squarespace/${imageColor}`;
  const Bc = `https://cdn.simpleicons.org/bigcommerce/${imageColor}`;
  const Shopify = `https://cdn.simpleicons.org/shopify/${imageColor}`;
  const Contentful = `https://cdn.simpleicons.org/contentful/${imageColor}`;
  const Webflow = `https://cdn.simpleicons.org/webflow/${imageColor}`;
  const Microsoft = `https://cdn.simpleicons.org/microsoft/${imageColor}`;
  const Ibm = `https://cdn.simpleicons.org/ibm/${imageColor}`;
  const Linux = `https://cdn.simpleicons.org/linux/${imageColor}`;


  return (
    <motion.div
      initial="hidden"
      animate={controls}
      variants={animationVariants} >
      <h2 className='bg-background text-foreground text-4xl text-center py-10 flex justify-center items-center' ref={ref} >PLATFORMS WE WORK WITH</h2>
      <div className='bg-background flex justify-center items-center pb-8 mb-8'>
        <motion.div className='w-4/5 grid grid-cols-2 md:grid-cols-4 gap-10 gap-x-0 md:gap-10'
          initial="hidden"
          animate={controls}
          variants={animationVariants}
          ref={ref}>
          <div className='flex justify-center items-center'>
            <Image alt="wordpress" src={Wordpress} className='h-20 w-20' height={150} width={150} />
          </div>
          <div className='flex justify-center items-center'>
            <Image alt="styled-components" src={Drupal} className='h-20 w-20' height={150} width={150} />
          </div>
          <div className='flex justify-center items-center'>
            <Image alt="styled-components" src={Magento} className='h-20 w-20' height={150} width={150} />
          </div>
          <div className='flex justify-center items-center'>
            <Image alt="styled-components" src={Sitecore} className='h-20 w-20' height={150} width={150} />
          </div>
          <div className='flex justify-center items-center'>
            <Image alt="styled-components" src={Squarespace} className='h-20 w-20' height={150} width={150} />
          </div>
          <div className='flex justify-center items-center'>
            <Image alt="styled-components" src={Bc} className='h-20 w-20' height={150} width={150} />
          </div>
          <div className='flex justify-center items-center'>
            <Image alt="styled-components" src={Shopify} className='h-20 w-20' height={150} width={150} />
          </div>
          <div className='flex justify-center items-center'>
            <Image alt="styled-components" src={Contentful} className='h-20 w-20' height={150} width={150} />
          </div>
          <div className='flex justify-center items-center'>
            <Image alt="styled-components" src={Webflow} className='h-20 w-20' height={150} width={150} />
          </div>
          <div className='flex justify-center items-center'>
            <Image alt="styled-components" src={Microsoft} className='h-20 w-20' height={150} width={150} />
          </div>
          <div className='flex justify-center items-center'>
            <Image alt="styled-components" src={Ibm} className='h-20 w-20' height={150} width={150} />
          </div>
          <div className='flex justify-center items-center'>
            <Image alt="styled-components" src={Linux} className='h-20 w-20' height={150} width={150} />
          </div>
        </motion.div>
      </div>
    </motion.div >
  )
}
