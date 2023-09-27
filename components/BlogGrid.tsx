"use client"
import React from 'react'
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import Link from "next/link";

export default function BlogGrid({ post }: any) {
  return (
    <>
      <Link href={`/blog/${post.slug}`} prefetch>
        <Card shadow="sm" key={post._id} isPressable onPress={() => console.log("item pressed")}>
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={post.title}
              className="w-full object-cover h-[140px]"
              src={post.cover}
            />
          </CardBody>
          <CardFooter className="text-small text-current flex flex-col items-start justify-between">
            <b className=''>{post.title}</b>
            <p className="">{post.overview}</p>
          </CardFooter>
        </Card>
      </Link>

    </>
  )
}
