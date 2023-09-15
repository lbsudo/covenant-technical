import React from 'react'
import Image from 'next/image'

type Props = {
  Title: string
  Img: string
  Offerings: string[]
}

export default function IndustryInfo({ Title, Img, Offerings }: Props) {
  return (
    <>
      <h2 className='bg-background text-foreground text-5xl font-semibold text-center py-10 flex justify-center items-center'>{Title}</h2>
      <div className='bg-background flex justify-center items-start pb-8 mb-8'>
        <div className='w-1/3'>
          <Image src={Img} alt='Industry Image' height={800} width={400} className='mt-6' />
        </div>
        <div className='w-1/3'>
          <ul>
            {Offerings.map((offering, index) => (
              <li key={index} className='text-left text-xl'>
                <p className='my-6'>
                  {offering}
                </p>
                {index < Offerings.length - 1 && <hr className='my-2' />}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

