"use client"
import React from 'react'
import Link from 'next/link';
import { Button } from "@nextui-org/react";
import { ctaButton } from "./primitives";


export default function IndustryCta() {
  return (
    <>
      <hr className='my-2 ' />
      <div className='bg-background w-full flex flex-col justify-center items-center py-6'>
        <h3 className='text-foreground text-4xl lg:text-5xl flex flex-col items-center font-bold mb-12'>Lets Get Started<span className='text-[#8069DD] font-bold'> Today</span></h3>
        {/* <p className='text-sm lg:text-xl text-center text-foreground font-bold uppercase mb-2'>Let us use our expertise to be the digital service suit that <br />brings you from just a vision to market growth</p> */}
        <Link href="/contact">
          <Button
            color="secondary"
            className={ctaButton({ color: 'primary' })}
            variant="ghost"
          >
            Let&apos;s Chat
          </Button>
        </Link>

      </div>
    </>
  )
}
