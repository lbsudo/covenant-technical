import React from 'react'
import Image from 'next/image'
import Process from '../public/process.png'

export default function OurApproach() {
  return (
    <>
      <div className='text-foreground bg-background w-full'>
        <div className='h-1/2 text-center text-6xl m-4 pt-16'>
          <h1>Our Approach</h1>
          <p className='text-lg mt-4 pb-8'>With a proven track record of successfully delivering high-quality web design solutions to a diverse range of clients, we’ve earned a reputation for reliability, professionalism and exceeding client expectations.</p>
        </div>
        <div className='flex flex-col w-full justify-center items-center text-xl pb-12'>
          <Image src={Process} alt={'/'} height={500} width={250} />
        </div>
      </div>
    </>
  )
} 
