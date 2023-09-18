"use client"
import React from 'react'
import Link from 'next/link'
import { footerButton } from "./primitives";
import { Button } from "@nextui-org/react";
import EmailListSub from './EmailListSub';

export default function Footer() {
  return (
    <>
      <div className=' flex flex-col items-center justify-center  pb-4 border-t-2 '>
        <h2 className='text-2xl lg:text-4xl font-bold mb-6 pt-2'>Keep In Touch</h2>
        <EmailListSub />
      </div>
      <div className='text-lg flex flex-col justify-center items-center'>
        <div className='flex justify-between items-center w-11/12'>
          <div className='flex flex-col'>
            <p className='hidden md:block'>contact@currencycovenant.com</p>
          </div>
          <Link href="https://calendly.com/currencycovenant/free-consultation-call" target='_blank'>
            <Button
              color="secondary"
              className={footerButton({ color: 'primary' })}
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
