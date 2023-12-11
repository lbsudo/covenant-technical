"use client"
import React from 'react'
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';


const words = [
  '1.Strategy & Research',
  '2.Art Direction',
  '3.Content Strategy',
  '4.Prototypes',
  '5.Graphic Editing',
  '6.Cyber Security'
];
const words2 = [
  '7.Responsive Web Design',
  '8.User Experience',
  '9.Web Development',
  '10.ECommerce',
  '11.Mobile Apps',
  '12.Data Solutions'
];

export default function MotionBar() {

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
      <div className="motion-bars-container py-12" ref={ref}>
        <div className="text-6xl pb-6 font-light flex">
          <ul className="motion-bar1a text-3xl lg:text-6xl pb-6 font-light list-decimal">
            {words.map((word, index) => (
              <li key={index} className="inline-block whitespace-nowrap pr-6">
                <p className=" flex flex-row ">
                  {word}
                </p>
              </li>
            ))}
          </ul>
          <ul className="motion-bar1b text-3xl lg:text-6xl pb-6 font-light list-decimal">
            {words.map((word, index) => (
              <li key={index} className="inline-block whitespace-nowrap pr-6">
                <p className="inline-block whitespace-nowrap ">
                  {word}
                </p>
              </li>
            ))}
          </ul>
        </div>


        <div className="text-6xl pb-6 font-light flex">
          <ul className="motion-bar2a text-3xl lg:text-6xl pb-6 font-light list-decimal">
            {words2.map((word, index) => (
              <li key={index} className="inline-block whitespace-nowrap pr-6">
                <p className="inline-block whitespace-nowrap">
                  {word}
                </p>
              </li>
            ))}
          </ul>
          <ul className="motion-bar2b text-3xl lg:text-6xl  font-light list-decimal">
            {words2.map((word, index) => (
              <li key={index} className="inline-block whitespace-nowrap pr-6">
                <p className="inline-block whitespace-nowrap">
                  {word}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  )
}
