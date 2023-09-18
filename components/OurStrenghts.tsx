"use client"
import React from 'react'
import { Accordion, AccordionItem } from "@nextui-org/react";
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

export default function OurStrengths() {

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

  const itemClasses = {
    title: "font-normal text-3xl",
  };

  return (
    <motion.div
      initial="hidden"
      animate={controls}
      variants={animationVariants}>
      <div className='flex justify-center items-center' ref={ref}>
        <div className='text-foreground text-2xl text-left w-full flex flex-col justify-center mx-4 pb-1'>
          <h2 className='text-4xl py-4 w-full'>Covenant Cyber Strengths</h2>
          <p className='w-full pb-6 text-light xl:text-md'>Communication, collaboration, adaption: Dotlogics is committed to consistently delivering projects on time, within budget, and exceeding client expectations. Our expensive portfolio showcases our versatility and expertise across different industries to testify to our success.</p>
        </div>
      </div>
      <Accordion selectionMode="multiple" itemClasses={itemClasses} className='text-left'>
        <AccordionItem key="1" aria-label="Client Focused" title="Client Focused">
          We prioritize establishing a close and collaborative relationship with our clients. We understand the importance of active communication and regular engagement, ensuring that we are readily available to address any need, provide updates, and gather feedback throughout the project lifecycle. We aim to foster trust, understanding, and a shared vision, ultimately delivering tailored web solutions to digitally transcend.
        </AccordionItem>
        <AccordionItem key="2" aria-label="Constant Adaption" title="Constant Adaption">
          We embrace a culture of adaptation and openness, recognizing the ever-changing nature of the digital landscape. We proactively seek out new technologies, design trends, and industry best practices to stay at the forefront of our field. Our goal is to promise that the final product aligns perfectly with our clients’ evolving needs and objectives.
        </AccordionItem>
        <AccordionItem key="3" aria-label="Network of Expert" title="Network of Expert">
          With a global team spanning across continents, our diverse and talented professionals collaborate seamlessly to leverage their expertise and cultural insights, ensuring that our clients receive unparalleled support and solutions. We believe in the power of diversity, fostering an inclusive environment that encourages innovative thinking and drives success on a global scale.
        </AccordionItem>
      </Accordion>
    </motion.div>
  )

}
