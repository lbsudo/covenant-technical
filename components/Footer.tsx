"use client"
import React from 'react'
import Link from 'next/link'
import { baseButton } from "./primitives";
import { Button } from "@nextui-org/react";
import EmailListSub from './EmailListSub';

export default function Footer() {
  return (
    <>
      <div className=' flex flex-col items-center justify-center mt-1 pb-4 border-t-2 '>
        <h2 className='text-5xl font-bold mb-6 pt-4'>Keep In Touch</h2>
        <EmailListSub />
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
