"use client"
import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import Link from "next/link";

export default function IndustryGrid() {
  const list = [
    {
      title: "Trades & Services",
      img: "/industries/trades.jpg",
      href: "/"
    },
    {
      title: "Retail & eCommerce",
      img: "/industries/retail.jpg",
      href: "/"
    },
    {
      title: "Manufacturing",
      img: "/industries/manufacturing.jpg",
      href: "/"
    },
    {
      title: "Tech & Saas",
      img: "/industries/tech.jpg",
      href: "/"
    },
    {
      title: "Oil & Gas",
      img: "/industries/oil.jpg",
      href: "/"
    },
    {
      title: "Travel",
      img: "/industries/travel.jpg",
      href: "/"
    },
    {
      title: "Healthcare",
      img: "/industries/healthcare.jpg",
      href: "/"
    },
    {
      title: "Banking & Finance",
      img: "/industries/banking.jpg",
      href: "/"
    },
    {
      title: "Education",
      img: "/industries/education.jpg",
      href: "/"
    },
  ];

  return (
    <div className="mx-8 gap-2 grid grid-cols-2 sm:grid-cols-4">
      {list.map((item, index) => (
        <Card shadow="sm" key={index} >
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.title}
              className="w-full object-cover h-[200px]"
              src={item.img}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            {/* <Link href={item.href}> */}
            <b>{item.title}</b>
            {/* </Link> */}
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
