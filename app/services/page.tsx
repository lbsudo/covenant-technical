"use client"
import React from 'react'
import HomeTechnologies from "@/components/home/HomeTechnologies";
import TechServices from "@/components/home/TechServices";
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import ServiceCard from '@/components/services/ServiceCard';
import { FaWordpress, FaCode, FaMobileScreen } from 'react-icons/fa6';
import PackageCard from '@/components/services/PackageCard';
import PlanCard from '@/components/services/PlanCard';

export default function ServicesPage() {

  const controls = useAnimation();

  React.useEffect(() => {
    // Animate the div in the first section when the page loads
    controls.start({ opacity: 1, y: 0, transition: { duration: 1 } });
    // Fetch post metadata from the API route
  }, [controls]);

  return (
    <div>
      <section className='py-40 flex justify-center flex-col w-full relative z-0' >
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/serv.jpg"
            alt="Background Image"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
        <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-black via-black to-black opacity-50"></div>
        <motion.div className='relative w-full text-white flex flex-col justify-center items-center '
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
        >
          <h1 className='text-5xl lg:text-6xl w-3/4 h-1/2 text-center mt-8'>Our Services</h1>
          <h4 className='text-4xl w-3/4 h-1/4 mt-16 mb-16 text-center'>We provide a full suit of skills and services tailored to your business to help you attract, convert, and process your perfect client.</h4>
        </motion.div>
      </section>
      <section className='px-12'>
        <h1 className='text-5xl lg:text-6xl w-full text-center font-medium mt-8 flex justify-center items-center pb-4'>Product Types</h1>
        <div className='flex flex-col justify-center items-center'>
          <div className='flex flex-col md:flex-row justify-between items-center h-1/2 text-center gap-4 py-4'>
            <ServiceCard title="WordPress" message="For years, WordPress has been the go-to publishing solution for millions of people, from individuals to small businesses to large enterprises. We'll create your fast-loading, mobile-ready website, set up your initial content and train you in the use of the world's most popular Content Management System. With thousands of add-ons available to you, the possibilities are endless." Icon={FaWordpress} className='w-full md:w-1/2 h-auto md:h-60 text-center' />
            <ServiceCard title="Web Apps" message="If you need more than a basic website, and there are specific tasks you want your site to handle, talk to us about creating a web application.

We start from scratch and build a tool that meets your specific requirements." Icon={FaCode} className='w-full md:w-1/2 h-auto md:h-60 ' />
          </div>
          <ServiceCard title="Mobile Apps" message="Our custom-designed mobile apps are built from the ground up to meet your exact specifications. We will create your app for you and  submit it to the app stores, and, if desired, we can also offer technical support to your users, so, instead of spending your time answering technical questions, you can spend your time running your company." Icon={FaMobileScreen} className='w-full md:w-3/4 mb-4 h-auto md:h-56' />
        </div>
      </section>


      <section className='px-12 pb-8'>
        <h1 className='text-5xl lg:text-6xl w-full text-center font-medium mt-8 flex justify-center items-center pb-4'>Packages</h1>
        <div className='flex flex-col md:flex-row justify-between items-center gap-4 font-medium pb-4'>
          <PackageCard title='Dash' price='$150' message='One page' className="w-full md:w-1/3" />
          <PackageCard title='Jog' price='$650' message='Three pages' className="w-full md:w-1/3" />
          <PackageCard title='Sprint' price='$1000' message='Five pages' className="w-full md:w-1/3" />
        </div>
        <div className='flex flex-col md:flex-row justify-between items-center gap-4 font-medium'>
          <PackageCard title='Marathon' price='$2500' message='Twelves page' className="w-full md:w-1/3 h-64" />
          <ServiceCard title='Complete Web Marketing Package or Mobile App' message='We can design and develop a custom mobile app for you, from start to finish. We can also create a comprehensive marketing package. Our services include content development, and the recurring maintenance required to keep you visible on the search engines, and in Google My Business listings. Since these are 100% custom projects, we will need information so we can quote out a custom solution for you, so please...' className="w-full h-auto md:w-2/3 md:h-64" link='/contact' />
        </div>
      </section>
      <section className='px-12 pb-8'>
        <h1 className='text-5xl lg:text-6xl w-full text-center font-medium mt-8 flex justify-center items-center pb-4'>Maintenance Plans</h1>
        <p className='text-md text-center'>The perfect solution for small and medium-sized businesses who have regular updates to their websites, mobile apps, or other software we've created for them.</p>
        <div className='flex flex-col md:flex-row justify-center items-center gap-4 pb-4'>
          <PlanCard title='Copper' time='2 hours/month' price='$150/month' addy='$75' className='w-full md:w-1/3' />
          <PlanCard title='Bronze' time='5 hours/month' price='$375/month' addy='$75' className='w-full md:w-1/3' />
          <PlanCard title='Silver' time='10 hours/month' price='$700/month' addy='$70' className='w-full md:w-1/3' />
        </div>
        <div className='flex flex-col md:flex-row justify-center items-center gap-4'>
          <PlanCard title='Gold' time='15 hours/month' price='$975/month' addy='65' className='w-full md:w-1/3 h-64' />
          <ServiceCard title='Custom Maintenance Plans' message='' className="hidden w-1/3 h-64 md:flex justify-center items-center text-center" link='/contact' />
          {/* <PlanCard title='Bronze' time='2 hours/month' price='$150/month' addy='$75' className='w-1/3' /> */}
        </div>
      </section>
      {/* <section className="w-full"> */}
      {/*   <HomeTechnologies /> */}
      {/* </section> */}
      {/* <section className="w-full"> */}
      {/*   <TechServices /> */}
      {/* </section> */}
    </div>
  );
}
