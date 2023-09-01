import React from 'react'

export default function OurExpertise() {
  return (
    <>
      <div className='text-foreground w-full'>
        <div className='h-1/2 text-center text-6xl  pt-16'>
          <h1>Our Expertise</h1>
          <p className='text-lg mt-4 pb-4'>With a proven track record of successfully delivering high-quality web design solutions to a diverse range of clients, we’ve earned a reputation for reliability, professionalism and exceeding client expectations.</p>
        </div>
        <div className='flex flex-col text-white w-full md:flex-row text-xl '>
          <div className=' bg-no-repeat bg-cover w-full h-screen md:w-1/4 md:h-11/12' style={{ backgroundImage: `url('/analyze.jpg')` }}>
            <div className='relative w-full pl-3 mt-96'>
              <h3 className='text-4xl pb-3'>Analyze</h3>
              <p className='text-sm md:text-lg'>An immersive experience where we delve deep into your vision.</p>
            </div>
          </div>
          <div className=' bg-no-repeat bg-cover w-full h-screen md:w-1/4 md:h-11/12' style={{ backgroundImage: `url('/stratagize.jpg')` }}>
            <div className='relative w-full pl-3 mt-96'>
              <h3 className='text-4xl pb-3'>Strategize</h3>
              <p className='text-sm md:text-lg'>Capturing the essence of your brand for a digital masterpiece.</p>
            </div>
          </div>
          <div className=' bg-no-repeat bg-cover w-full h-screen md:w-1/4 md:h-11/12' style={{ backgroundImage: `url('/develop.jpg')` }}>
            <div className='relative w-full pl-3 mt-96'>
              <h3 className='text-4xl pb-3'>Develop</h3>
              <p className='text-sm md:text-lg'>Combining coding and advanced technologies to bring your website to life.</p>
            </div>
          </div>
          <div className=' bg-no-repeat bg-cover w-full h-screen md:w-1/4 md:h-11/12' style={{ backgroundImage: `url('/deply.jpg')` }}>
            <div className='relative w-full pl-3 mt-96'>
              <h3 className='text-4xl pb-3'>Deploy</h3>
              <p className='text-sm md:text-lg'>Launching your website into the digital realm and ready to make a lasting impact.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
} 