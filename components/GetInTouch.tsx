import React from 'react'
import Link from 'next/link';
import { Button } from "@nextui-org/button";
import { baseButton } from "@/components/primitives";


export default function GetInTouch() {
  return (
    <>
      <div className="w-full flex flex-col ">
        <h1 className="text-3xl lg:text-4xl text-center font-semibold mb-4">Get In Touch</h1>
        <div className="flex justify-between items-center w-full">
          <div className="flex flex-col items-start">
            <h6 className="text-md lg:text-xl">Email</h6>
            <h6 className="text-md lg:text-xl">Connect</h6>
          </div>
          <div className="flex flex-col items-start">
            <h6 className="text-sm lg:text-lg font-bold">contact@currencycovenant.com</h6>
            <Link href={'https://www.linkedin.com/in/lbsudo/'} target='_blank' className='text-sm lg:text-lg font-bold underline'>LinkedIn</Link>
          </div>
        </div>
        <div className="mb-4 mt-8">
          <h6 className="text-lg lg:text-xl text-left">Lets hop on a call and talk about how we can provide solutions to grow your business.</h6>
        </div>
        <Link href={'https://calendly.com/currencycovenant/free-consultation-call'} target='_blank'>
          <Button
            color="secondary"
            className={baseButton({ color: 'primary' })}
            variant="ghost"
            aria-label="Schedule A Call"
          >
            Book A Discovery Call
          </Button>
        </Link>
      </div>
    </>
  )
} 
