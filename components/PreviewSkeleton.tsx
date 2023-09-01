"use client"

import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { PostMetadata } from "@/types";
import Link from "next/link";

interface PreviewSkeletonProps {
  list: PostMetadata[];
}

export default function PreviewSkeleton({ list }: PreviewSkeletonProps) {


  return (
    <div className="mx-4 gap-2 grid grid-cols-2 sm:grid-cols-4">
      {list.map((item, index) => (
        <Card shadow="sm" key={index} >
          <CardBody className="overflow-visible p-0">
            <Link href={`/blog/${item.slug}`}>

              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                alt={item.title}
                className="w-full object-cover h-[140px] lg:h-[250px]"
                src={item.cover}
              />
            </Link>
          </CardBody>
          <CardFooter className=" flex flex-col text-center text-small items-center">
            <Link href={`/blog/${item.slug}`}>
              <p className="text-md">{item.category}</p>
              <b className="text-lg">{item.title}</b>
              <p className="text-md">{item.date}</p>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

