"use client"
import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import Link from "next/link";
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

export default function IndustryGrid() {
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

  const list = [
    {
      title: "Trades & Services",
      img: "/industries/trades.jpg",
      href: "/industries/trades-&-services"
    },
    {
      title: "Retail & eCommerce",
      img: "/industries/retail.jpg",
      href: "/industries/retail-&-ecommerce"
    },
    {
      title: "Manufacturing",
      img: "/industries/manufacturing.jpg",
      href: "/industries/manufacturing"
    },
    {
      title: "Tech & Saas",
      img: "/industries/tech.jpg",
      href: "/industries/tech-&-saas"
    },
    {
      title: "Oil & Gas",
      img: "/industries/oil.jpg",
      href: "/industries/oil-&-gas"
    },
    {
      title: "Travel",
      img: "/industries/travel.jpg",
      href: "/industries/travel"
    },
    {
      title: "Healthcare",
      img: "/industries/healthcare.jpg",
      href: "/industries/healthcare"
    },
    {
      title: "Banking & Finance",
      img: "/industries/banking.jpg",
      href: "/industries/banking-&-finance"
    },
    {
      title: "Education",
      img: "/industries/education.jpg",
      href: "/industries/education"
    },
  ];

  return (
    <motion.div className="mx-8 pt-12 gap-2 grid grid-cols-2 sm:grid-cols-4"
      initial="hidden"
      animate={controls}
      variants={animationVariants}
      ref={ref}>
      {list.map((item, index) => (
        <Card shadow="sm" isPressable key={index} >
          <CardBody className="overflow-visible p-0">
            <Link href={item.href}>
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                alt={item.title}
                className="w-full object-cover h-[200px]"
                src={item.img}

              />
            </Link>
          </CardBody>
          <Link href={item.href}>
            <CardFooter className="text-small justify-between">
              <b>{item.title}</b>
            </CardFooter>
          </Link>
        </Card>
      ))}
    </motion.div>
  );
}
