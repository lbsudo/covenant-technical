"use client"
import React from 'react'
import { Image } from "@nextui-org/react"
import { useTheme as ThemeContext, } from 'next-themes'

export default function HomeTechnologies() {
  const { resolvedTheme } = ThemeContext();
  const imageColor = resolvedTheme === 'dark' ? 'white' : 'black';


  const Wordpress = `https://cdn.simpleicons.org/Wordpress/${imageColor}`;
  const Drupal = `https://cdn.simpleicons.org/drupal/${imageColor}`;
  const Magento = `https://cdn.simpleicons.org/magento/${imageColor}`;
  const Sitecore = `https://cdn.simpleicons.org/sitecore/${imageColor}`;
  const Squarespace = `https://cdn.simpleicons.org/squarespace/${imageColor}`;
  const Bc = `https://cdn.simpleicons.org/bigcommerce/${imageColor}`;
  const Shopify = `https://cdn.simpleicons.org/shopify/${imageColor}`;
  const Contentful = `https://cdn.simpleicons.org/contentful/${imageColor}`;
  const Webflow = `https://cdn.simpleicons.org/webflow/${imageColor}`;
  const Microsoft = `https://cdn.simpleicons.org/microsoft/${imageColor}`;
  const Ibm = `https://cdn.simpleicons.org/ibm/${imageColor}`;
  const Linux = `https://cdn.simpleicons.org/linux/${imageColor}`;

  return (
    <>
      <h2 className='bg-background text-foreground text-4xl text-center py-10 flex justify-center items-center'>PLATFORMS WE WORK WITH</h2>
      <div className='bg-background flex justify-center items-center pb-8 mb-8'>
        <div className='w-4/5 grid grid-cols-2 md:grid-cols-4 gap-10 gap-x-0 md:gap-10'>
          <div className='flex justify-center items-center'>
            <Image alt="wordpress" src={Wordpress} className='h-20 w-20' height={150} width={150} />
          </div>
          <div className='flex justify-center items-center'>
            <Image alt="styled-components" src={Drupal} className='h-20 w-20' height={150} width={150} />
          </div>
          <div className='flex justify-center items-center'>
            <Image alt="styled-components" src={Magento} className='h-20 w-20' height={150} width={150} />
          </div>
          <div className='flex justify-center items-center'>
            <Image alt="styled-components" src={Sitecore} className='h-20 w-20' height={150} width={150} />
          </div>
          <div className='flex justify-center items-center'>
            <Image alt="styled-components" src={Squarespace} className='h-20 w-20' height={150} width={150} />
          </div>
          <div className='flex justify-center items-center'>
            <Image alt="styled-components" src={Bc} className='h-20 w-20' height={150} width={150} />
          </div>
          <div className='flex justify-center items-center'>
            <Image alt="styled-components" src={Shopify} className='h-20 w-20' height={150} width={150} />
          </div>
          <div className='flex justify-center items-center'>
            <Image alt="styled-components" src={Contentful} className='h-20 w-20' height={150} width={150} />
          </div>
          <div className='flex justify-center items-center'>
            <Image alt="styled-components" src={Webflow} className='h-20 w-20' height={150} width={150} />
          </div>
          <div className='flex justify-center items-center'>
            <Image alt="styled-components" src={Microsoft} className='h-20 w-20' height={150} width={150} />
          </div>
          <div className='flex justify-center items-center'>
            <Image alt="styled-components" src={Ibm} className='h-20 w-20' height={150} width={150} />
          </div>
          <div className='flex justify-center items-center'>
            <Image alt="styled-components" src={Linux} className='h-20 w-20' height={150} width={150} />
          </div>
        </div>
      </div>
    </>
  )
}
