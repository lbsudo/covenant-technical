"use client"
import React from 'react'
import Link from 'next/link'
import { baseButton } from "./primitives";
import { Input } from "@nextui-org/react";
import { Checkbox } from "@nextui-org/react";
import { Button } from "@nextui-org/react";

export default function Footer() {
  return (
    <>
      <div className=' flex flex-col items-center justify-center mt-4 pb-4 border-t-2 '>
        <h2 className='text-5xl mb-6'>Keep In Touch</h2>
        <form className='w-11/12 flex flex-col justify-center items-center'>
          <Input isRequired type="email" placeholder="Enter your email" radius='full' variant='underlined' />
          <Checkbox isRequired className='text-center mt-1'>
            <span className='text-red-500'>*</span>I have read the
            Privacy Policy
            and agree to its terms.</Checkbox>
          <Button color="secondary" variant="ghost" className={baseButton({ color: 'primary' })}>
            Subscribe
          </Button>
        </form>
      </div>
      <div className='text-lg flex flex-col justify-center items-center'>
        <div className='flex justify-between items-center w-11/12'>
          <div className='flex flex-col'>
            <p>760-605-1311</p>
            <p className='hidden md:block'>contact@covenantTech.com</p>
          </div>
          <Link href="/contact">
            <Button
              color="secondary"
              className={baseButton({ color: 'primary' })}
              variant="ghost"
            >
              BOOK A CALL
            </Button>
          </Link>
        </div>
      </div>
      <span className="text-default-600 flex justify-center items-center mt-2">&copy; 2024 CurrencyCovenantLLC. All Rights Reserved.</span>
    </>
  )
}
