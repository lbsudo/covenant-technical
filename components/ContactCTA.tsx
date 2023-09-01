import React from 'react'
import Desk from '../public/deskwork.jpg'
import Image from 'next/image'
import { baseButton } from "./primitives";
import { largeButton } from './primitives';
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";

export default function ContactCTA() {
  return (
    <>
      <div className='hidden md:block w-full bg-black mt-6'>
        <div className='flex flex-col justify-center items-center'>
          <Image src={Desk} alt='' height={4000} width={6000} className='w-full' />
          <div className='absolute w-3/4 mb-16  text-center text-white text-7xl flex flex-col items-center justify-center z-10'>
            <p className=' w-full mb-10 '>
              Proudly American business that is ambitious to lead in the digital space by working with great companies
            </p>
            <Link href='/contact'>
              <Button
                color="secondary"
                className={largeButton({ color: 'primary' })}
                variant="ghost"
              >
                GET TO KNOW MORE ABOUT US
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className='md:hidden'>
        <Image src={Desk} alt='' height={4000} width={6000} className='w-full' />
        <div className='bg-purple-500 flex flex-col items-center justify-center pb-6'>
          <h3 className='text-white text-2xl text-center p-6'>Proudly American business that is ambitious to lead in the digital space by working with great companies</h3>
          <Link href='/contact'>
            <Button
              color="secondary"
              className={baseButton({ color: 'primary' })}
              variant="ghost"
            >
              DROP US A LINE
            </Button>
          </Link>
        </div>
      </div>
    </>
  )
}
