"use client"
import React from 'react'
import { Image } from "@nextui-org/react";

export default function HomeTechnologies() {

  const Wordpress = "https://cdn.simpleicons.org/Wordpress/white";
  const Drupal = "https://cdn.simpleicons.org/drupal/white";
  const Magento = "https://cdn.simpleicons.org/magento/white";
  const Sitecore = "https://cdn.simpleicons.org/sitecore/white";
  const Squarespace = "https://cdn.simpleicons.org/squarespace/white";
  const Bc = "https://cdn.simpleicons.org/bigcommerce/white";
  const Shopify = "https://cdn.simpleicons.org/shopify/white";
  const Contentful = "https://cdn.simpleicons.org/contentful/white";
  const Webflow = "https://cdn.simpleicons.org/webflow/white";
  const Microsoft = "https://cdn.simpleicons.org/microsoft/white";
  const Ibm = "https://cdn.simpleicons.org/ibm/white";
  const Linux = "https://cdn.simpleicons.org/linux/white";

  return (
    <>
      <h2 className='bg-black text-white text-4xl text-center py-10 flex justify-center items-center'>PLATFORMS WE WORK WITH</h2>
      <div className='bg-black flex justify-center items-center pb-8'>
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
