"use client"
import React from 'react'
import Link from 'next/link';
import { Button } from "@nextui-org/react";
import { baseButton } from "./primitives";


export default function HomeCta() {
  return (
    <>
      <div className='w-full flex flex-col justify-center items-center my-3'>
        <h3 className='text-foreground text-4xl lg:text-5xl flex flex-col items-center font-bold mb-2'>BRANDS THAT<span className='text-[#8069DD] font-bold'> EXPAND</span></h3>
        <p className='text-sm lg:text-xl text-center text-foreground font-bold uppercase mb-2'>Let us use our expertise to be the digital service suit that <br />brings you from just a vision to market growth</p>
        <Link href="/contact">
          <Button
            color="secondary"
            className={baseButton({ color: 'primary' })}
            variant="ghost"
          >
            Let's Chat
          </Button>
        </Link>

      </div>
    </>
  )
}
