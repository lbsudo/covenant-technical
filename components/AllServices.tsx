import React from 'react'
import Image from 'next/image'
import Brack from '../public/codeIcon.svg'


export default function AllServices() {
  return (
    <>
      <div className='bg-white text-black pb-12'>
        <h2 className='text-4xl text-center py-10 flex justify-center items-center'>PLATFORMS WE WORK WITH</h2>
        <div className='flex justify-center items-center'>
          <div className='text-center h-full w-full grid grid-cols-2 md:grid-cols-4 gap-10 '>

            <div className='flex flex-col justify-center items-center'>
              <Image alt="wordpress" src={Brack} height={150} width={150} className='h-1/2 w-20 mb-3' />
              <p className='h-1/2'>We provide a comprehensive set of solutions for all your WordPress needs, specializing in a variety of industries applications.</p>
            </div>

            <div className='flex flex-col justify-center items-center'>
              <Image alt="wordpress" src="https://cdn.simpleicons.org/Kalilinux/black" className='h-1/2 w-20 mb-3' />
              <p className='h-1/2'>We provide a comprehensive set of solutions for all your WordPress needs, specializing in a variety of industries applications.</p>
            </div>

            <div className='flex flex-col justify-center items-center'>
              <Image alt="wordpress" src="https://cdn.simpleicons.org/oracle/black" className='h-1/2 w-20 mb-3' />
              <p className='h-1/2'>We provide a comprehensive set of solutions for all your WordPress needs, specializing in a variety of industries applications.</p>
            </div>

            <div className='flex flex-col justify-center items-center'>
              <Image alt="wordpress" src="https://cdn.simpleicons.org/Wordpress/black" className='h-1/2 w-20 mb-3' />
              <p className='h-1/2'>We provide a comprehensive set of solutions for all your WordPress needs, specializing in a variety of industries applications.</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <Image alt="styled-components" src="https://cdn.simpleicons.org/drupal/black" className='h-1/2 w-20 mb-3' />
              <p className='h-1/2'>A great choice for creating integrated digital frameworks with thousands of add-ons. Our Drupal experts, can build a solution for your business that gets the results you need.</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <Image alt="styled-components" src="https://cdn.simpleicons.org/magento/black" className='h-1/2 w-20 mb-3' />
              <p className='h-1/2'>Our talented developers are experienced Magento Enterprise and can launch multiple B2B & B2C ecommerce solutions for your business.</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <Image alt="styled-components" src="https://cdn.simpleicons.org/sitecore/black" className='h-1/2 w-20 mb-3' />
              <p className='h-1/2'>We offer ﬁrst-class expertise, enabling customers to get the most out of Sitecores capabilities.</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <Image alt="styled-components" src="https://cdn.simpleicons.org/squarespace/black" className='h-1/2 w-20 mb-3' />
              <p className='h-1/2'>Squarespace can be a great entry solution for a digital business platform and out team of developers can utilize the true power of the platform to get the most out of Squarespace for your business</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <Image alt="styled-components" src="https://cdn.simpleicons.org/bigcommerce/black" className='h-1/2 w-20 mb-3' />
              <p className='h-1/2'>Our developers have years of experience with Big commerce and is a great option for ecommerce to scale your digital business.</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <Image alt="styled-components" src="https://cdn.simpleicons.org/shopify/black" className='h-1/2 w-20 mb-3' />
              <p className='h-1/2'>Let us help with all of the ecommerce & point of sale features you need to start, run & grow your business on the Shopify platform considered the standard for many in ecommerce CMS systems.</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <Image alt="styled-components" src="https://cdn.simpleicons.org/contentful/black" className='h-1/2 w-20 mb-3' />
              <p className='h-1/2'>Allow us to help you create amazing digital experiences with Contentful - a content platform that sits at the heart of many modern tech stacks.</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <Image alt="styled-components" src="https://cdn.simpleicons.org/hubspot/black" className='h-1/2 w-20 mb-3' />
              <p className='h-1/2'>A full suit CRM that can help you reach marketing success and sales efficiency for customers in a variety of industries.</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <Image alt="wordpress" src="https://cdn.simpleicons.org/adobe/black" className='h-1/2 w-20 mb-3' />
              <p className='h-1/2'>We provide a comprehensive set of solutions for all your WordPress needs, specializing in a variety of industries applications.</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <Image alt="styled-components" src="https://cdn.simpleicons.org/microsoft/black" className='h-1/2 w-20 mb-3' />
              <p className='h-1/2'>Our development teams are experienced microsoft Enterprise users that can bring you microsoft ecommerce solutions.</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <Image alt="styled-components" src="https://cdn.simpleicons.org/ibm/black" className='h-1/2 w-20 mb-3' />
              <p className='h-1/2'>Allow us to help you create amazing digital experiences with Contentful - a content platform that sits at the heart of the modern tech stack.</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <Image alt="styled-components" src="https://cdn.simpleicons.org/linux/black" className='h-1/2 w-20 mb-3' />
              <p className='h-1/2'>As a linux operating organization and linux being our OS kernel of choice we provide enterprise linux solutions</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
