"use client"
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

export default function TechServices() {
  const itemClasses = {
    title: "font-normal text-3xl",
  };

  return (
    <Accordion selectionMode="multiple" itemClasses={itemClasses}>
      <AccordionItem key="1" aria-label="Web & Software Development" title="Digital Platform Development">
        <div className='flex flex-col md:flex-row w-full justify-between '>
          <div className='text-left md:w-1/2 md:text-2xl'>
            <p>We employ the latest technologies to boldly design and reimagine your software platform interface, media graphics, and customer experience (CX) whether on web or native systems to accelerate your business.</p>
          </div>
          <div className='px-4'></div>
          <div className='text-center md:text-left md:w-1/2 md:flex md:flex-col md:justify-center'>
            <p className='text-[#8069DD] md:text-3xl'>What we provide</p>
            <ul className='list-disc list-inside text-left md:text-lg'>
              <li key={1}>Web design & development</li>
              <li key={2}>Customer experience(CX)</li>
              <li key={3}>Employee experience and enablement design (EX)</li>
              <li key={4}>Information architecture</li>
              <li key={5}>Platform personalization and customization</li>
              <li key={6}>Platform strategy, advisory, & implementation</li>
              <li key={7}>Digital and enablement strategy</li>
              <li key={11}>Digital and enablement strategy</li>
              <li key={12}>Usability testing</li>
            </ul>
          </div>
        </div>
      </AccordionItem>

      <AccordionItem key="2" aria-label="Cyber Security" title="Cyber Security">
        <div className='flex flex-col md:flex-row w-full justify-between '>
          <div className='text-left md:w-1/2 md:text-2xl'>
            <p>Providing leading methods, standards, and protocols to secure your cyber platforms and protect your digital assets.</p>
          </div>
          <div className='px-4'></div>
          <div className='text-center md:text-left md:w-1/2 md:flex md:flex-col md:justify-center'>
            <p className='text-[#8069DD] md:text-3xl'>What we provide</p>
            <ul className='list-disc list-inside text-left md:text-lg'>
              <li key={1}>Cyber Assesment</li>
              <li key={2}>Pen Testing</li>
              <li key={3}>Organizational Cyber Protocols</li>
              <li key={4}>Digital Backups</li>
              <li key={5}>Disaster Protocols</li>
              <li key={6}>IT Security Consultations</li>
            </ul>
          </div>
        </div>
      </AccordionItem>

      <AccordionItem key="3" aria-label="Graphic Design & Media" title="Graphic Design & Digital Media">
        <div className='flex flex-col md:flex-row w-full justify-between '>
          <div className='text-left md:w-1/2 md:text-2xl'>
            <p>Creating digital graphics and media for a variety of uses. From video editing to logo design we have the skills to help make your digital-platforms rich with multi-media</p>
          </div>
          <div className='px-4'></div>
          <div className='text-center md:text-left md:w-1/2 md:flex md:flex-col md:justify-center'>
            <p className='text-[#8069DD] md:text-3xl'>What we provide</p>
            <ul className='list-disc list-inside text-left md:text-lg'>
              <li key={1}>Logo Design</li>
              <li key={2}>Photo Editing</li>
              <li key={3}>Video Editng</li>
              <li key={4}>Ad Creation</li>
              <li key={5}>Social media assets</li>
              <li key={6}>Brand Graphics</li>
            </ul>
          </div>
        </div>
      </AccordionItem>

      <AccordionItem key="4" aria-label="Digital Marketing" title="Digital Marketing">
        <div className='flex flex-col md:flex-row w-full justify-between '>
          <div className='text-left md:w-1/2 md:text-2xl'>
            <p>Giving you the abilitiy to measure everything form brand awareness to conversion rate down to a single ad.</p>
          </div>
          <div className='px-4'></div>
          <div className='text-center md:text-left md:w-1/2 md:flex md:flex-col md:justify-center'>
            <p className='text-[#8069DD] md:text-3xl'>What we provide</p>
            <ul className='list-disc list-inside text-left md:text-lg'>
              <li key={1}>Media strategy</li>
              <li key={2}>Search Engine Optimization (SEO)</li>
              <li key={3}>eRetail / Amazon</li>
              <li key={4}>Paid search</li>
              <li key={5}>Paid social</li>
              <li key={6}>Audience planning</li>
              <li key={7}>Media analytics</li>
              <li key={8}>Content marketing</li>
              <li key={8}>Brand strategy</li>
            </ul>
          </div>
        </div>
      </AccordionItem>

      <AccordionItem key="5" aria-label="Artificial Intelligence" title="Artificial Intelligence">
        <div className='flex flex-col md:flex-row w-full justify-between '>
          <div className='text-left md:w-1/2 md:text-2xl'>
            <p>We apply AI to problems to drive efficiency, disrupt the status quo, and uncover new opportunities, while minimizing risk.</p>
          </div>
          <div className='px-4'></div>
          <div className='text-center md:text-left md:w-1/2 md:flex md:flex-col md:justify-center'>
            <p className='text-[#8069DD] md:text-3xl'>What we provide</p>
            <ul className='list-disc list-inside text-left md:text-lg'>
              <li key={1}>Autonomous agents and conversational bots</li>
              <li key={2}>AI and data operations and governance</li>
              <li key={3}>Generative AI and LLM applications</li>
              <li key={4}>Machine learning and deep learning</li>
              <li key={5}>Customer segmentation mapping</li>
              <li key={6}>Real-time trend trajectory and analysis</li>
            </ul>
          </div>
        </div>
      </AccordionItem>

      <AccordionItem key="6" aria-label="Continuous Care" title="Continuous Care">
        <div className='flex flex-col md:flex-row w-full justify-between '>
          <div className='text-left md:w-1/2 md:text-2xl'>
            <p>Providing dedicated support and experience to ensure that your site's performance is top-tier.</p>
          </div>
          <div className='px-4'></div>
          <div className='text-center md:text-left md:w-1/2 md:flex md:flex-col md:justify-center'>
            <p className='text-[#8069DD] md:text-3xl'>What we provide</p>
            <ul className='list-disc list-inside text-left md:text-lg'>
              <li key={1}>Managed services & hosting</li>
              <li key={2}>Analytics & data intelligence</li>
              <li key={3}>Managed MarCom</li>
              <li key={4}>Customer relationship management</li>
              <li key={5}>Assessments</li>
              <li key={6}>Optimization services</li>
              <li key={7}>Training services</li>
              <li key={8}>Troubleshooting services</li>
              <li key={9}>Replatforming services</li>
            </ul>
          </div>
        </div>
      </AccordionItem>

    </Accordion>
  );
}
