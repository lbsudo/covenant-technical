"use client"
import React from 'react'
import { Accordion, AccordionItem } from "@nextui-org/react";

export default function OurServices() {
  return (
    <>
      <div className='flex flex-col justify-center pb-3'>
        <h2 className='text-white text-4xl lg:text-6xl py-10 flex justify-center items-center'>OUR SERVICES</h2>
        <Accordion selectionMode="multiple">
          <AccordionItem key="1" aria-label="Accordion 1" title="Accordion 1">

          </AccordionItem>
          <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2">

          </AccordionItem>
          <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">

          </AccordionItem>
        </Accordion>
      </div>
    </>
  )
}
