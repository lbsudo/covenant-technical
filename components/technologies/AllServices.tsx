"use client"
import React from 'react'
import { Image } from "@nextui-org/react";
import { useTheme as ThemeContext, } from 'next-themes'
import { FaCode } from "react-icons/fa6";
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

export default function AllServices() {

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
  const imageColor = resolvedTheme === 'dark' ? 'ffffff' : '000000';


  const Kali = `https://cdn.simpleicons.org/Kalilinux/${imageColor}`;
  const Adobe = `https://cdn.simpleicons.org/adobe/${imageColor}`;
  const Hubspot = `https://cdn.simpleicons.org/hubspot/${imageColor}`;
  const Wordpress = `https://cdn.simpleicons.org/Wordpress/${imageColor}`;
  const Drupal = `https://cdn.simpleicons.org/drupal/${imageColor}`;
  const Magento = `https://cdn.simpleicons.org/magento/${imageColor}`;
  const Sitecore = `https://cdn.simpleicons.org/sitecore/${imageColor}`;
  const Squarespace = `https://cdn.simpleicons.org/squarespace/${imageColor}`;
  const Bc = `https://cdn.simpleicons.org/bigcommerce/${imageColor}`;
  const Shopify = `https://cdn.simpleicons.org/shopify/${imageColor}`;
  const Contentful = `https://cdn.simpleicons.org/contentful/${imageColor}`;
  const Microsoft = `https://cdn.simpleicons.org/microsoft/${imageColor}`;
  const Linux = `https://cdn.simpleicons.org/linux/${imageColor}`;

  return (
    <>
      <motion.div className='bg-background text-foreground pb-12'
        initial="hidden"
        animate={controls}
        variants={animationVariants}>
        <h2 className='text-4xl text-center py-10 flex justify-center items-center' ref={ref}>PLATFORMS WE WORK WITH</h2>
        <div className='flex justify-center items-center mx-4'>
          <div className='text-center h-full w-full grid grid-cols-2 md:grid-cols-4 gap-10 '>

            <div className='flex flex-col justify-center items-center'>
              <FaCode style={{ color: `${imageColor}`, }} height={50} width={50} className='h-full w-20 mb-3' />
              <p className='h-1/2'>We provide custom code for complex web applications and platforms where simple web builders will not cut it. We develop this software from the ground up to meet the needs of your business.</p>
            </div>

            <div className='flex flex-col justify-center items-center'>
              <Image alt="wordpress" src={Kali} height={150} width={150} className='h-full w-20 mb-3' />
              <p className='h-1/2'>Kali Linux is instrumental in our approach to cyber security in pen testing and crafting defensive measures. Kali is the industry standard for hacking operating systems. We use Kali to fortify platforms against malicious attacks against your businesses platforms and data.</p>
            </div>



            <div className='flex flex-col justify-center items-center'>
              <Image alt="wordpress" src={Wordpress} height={150} width={150} className='h-full w-20 mb-3' />
              <p className='h-1/2'>We provide a comprehensive set of solutions for all your WordPress needs, specializing in a variety of industry applications. From bookings, accepting payments, theme customization, and presenting media to showcase your business we have a wordpress tool kit for all your wordpress needs.</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <Image alt="styled-components" src={Drupal} height={150} width={150} className='h-full w-20 mb-3' />
              <p className='h-1/2'>A great choice for creating integrated digital frameworks with thousands of add-ons. Our Drupal experts, can build a solution for your business that gets the results you need.</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <Image alt="styled-components" src={Magento} height={150} width={150} className='h-full w-20 mb-3' />
              <p className='h-1/2'>Our talented developers are experienced Magento Enterprise and can launch multiple B2B & B2C ecommerce solutions for your business.</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <Image alt="styled-components" src={Sitecore} height={150} width={150} className='h-full w-20 mb-3' />
              <p className='h-1/2'>We offer ﬁrst-class expertise, enabling customers to get the most out of Sitecores capabilities.</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <Image alt="styled-components" src={Squarespace} height={150} width={150} className='h-full w-20 mb-3' />
              <p className='h-1/2'>Squarespace can be a great entry solution for a digital business platform and out team of developers can utilize the true power of the platform to get the most out of Squarespace for your business</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <Image alt="styled-components" src={Bc} height={150} width={150} className='h-full w-20 mb-3' />
              <p className='h-1/2'>Our developers have years of experience with Big commerce and is a great option for ecommerce to scale your digital business.</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <Image alt="styled-components" src={Shopify} height={150} width={150} className='h-full w-20 mb-3' />
              <p className='h-1/2'>Let us help with all of the ecommerce & point of sale features you need to start, run & grow your business on the Shopify platform considered the standard for many in ecommerce CMS systems.</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <Image alt="styled-components" src={Contentful} height={150} width={150} className='h-full w-20 mb-3' />
              <p className='h-1/2'>Allow us to help you create amazing digital experiences with Contentful - a content platform that sits at the heart of many modern tech stacks.</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <Image alt="styled-components" src={Hubspot} height={150} width={150} className='h-full w-20 mb-3' />
              <p className='h-1/2'>A full suit CRM that can help you reach marketing success and sales efficiency for customers in a variety of industries.</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <Image alt="wordpress" src={Adobe} height={150} width={150} className='h-full w-20 mb-3' />
              <p className='h-1/2'>Our team works with the full range of Adobe creative products from Photoshop, Illustrator, Premiere and more to help bring your creative ideas to life and make your platform rich with multi-media.</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <Image alt="styled-components" src={Microsoft} height={150} width={150} className='h-full w-20 mb-3' />
              <p className='h-1/2'>Our development teams are experienced microsoft consumer and Enterprise users that can bring you microsoft ecommerce and opperations solutions.</p>
            </div>

            <div className='flex flex-col justify-center items-center'>
              <Image alt="styled-components" src={Linux} height={150} width={150} className='h-full w-20 mb-3' />
              <p className='h-1/2'>As a linux operating organization and linux being our OS of choice, we provide a range of enterprise linux solutions to customize your business capability and workflow</p>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  )
}
