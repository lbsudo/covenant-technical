"use client"
import React, { useState } from 'react';
import { Input } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";
import { contactButton } from "@/components/primitives";
import { Button } from "@nextui-org/button";
import { toast } from "react-hot-toast"
import axios from 'axios';

interface FormData {
  firstNameLastName: string;
  email: string;
  phoneNumber: string;
  companyName: string;
  websiteUrl: string;
  message: string;
  funnel: string; // You can define a more specific type if needed
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    firstNameLastName: '',
    email: '',
    phoneNumber: '',
    companyName: '',
    websiteUrl: '',
    message: '',
    funnel: '',
  });

  const funnels = [
    {
      value: 'Web Search',
      place: 'Web Search',
    },
    {
      value: 'LinkedIn',
      place: 'LinkedIn',
    },
    {
      value: 'Social Media',
      place: 'Social Media',
    },
    {
      value: 'Recommendation',
      place: 'Recommendation',
    },
    {
      value: 'Other',
      place: 'Other',
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await axios.post('/api/send-email', formData); // Updated URL
      console.log("Email sent successfully");
      setFormData({
        firstNameLastName: '',
        email: '',
        phoneNumber: '',
        companyName: '',
        websiteUrl: '',
        message: '',
        funnel: '',
      });
      toast.success("Email sent successfully");
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="w-full md:px-12">
      <form className="flex flex-col justify-center items-center w-full h-auto mb-8" onSubmit={handleSubmit}>
        <div className="flex w-full h-auto flex-wrap md:flex-nowrap gap-2 mb-2">
          <Input type="text" variant='underlined' name="firstNameLastName" aria-label="First Name Last Name" placeholder="Enter Full Name" isRequired value={formData.firstNameLastName} onChange={handleChange} />
        </div>
        <div className="flex w-full flex-wrap md:flex-nowrap gap-2">
          <Input type="email" variant='underlined' name="email" aria-label="Email" isRequired placeholder="Enter Email Address" value={formData.email} onChange={handleChange} />
          <Input type="tel" variant='underlined' name="phoneNumber" aria-label="Phone Number" placeholder="Enter Phone Number" value={formData.phoneNumber} onChange={handleChange} />
        </div>
        <div className="flex w-full flex-wrap md:flex-nowrap gap-2">
          <Input type="text" variant='underlined' name="companyName" aria-label="Company Name" placeholder="Enter Company Name" value={formData.companyName} onChange={handleChange} />
          <Input type="url" variant='underlined' name="websiteUrl" aria-label="Website URL" placeholder="Enter Website URL(optional)" value={formData.websiteUrl} onChange={handleChange} />
        </div>
        <Textarea
          variant='underlined'
          placeholder="Let us know how we can help your business"
          className="w-full"
          aria-label="Message"
          label="How can we help you?"
          labelPlacement='inside'
          name="message"
          isRequired
          value={formData.message}
          onChange={handleChange}
        />
        <div className='w-full flex flex-col md:flex-row justify-center items-center'>
          <Select
            variant='underlined'
            placeholder="How did you hear about us ?"
            className="w-full pr-9 pb-6"
            aria-label="How did you hear about us?"
            name="funnel"
            value={formData.funnel}
            onChange={handleChange}
          >
            {funnels.map((funnel) => (
              <SelectItem key={funnel.value} value={funnel.value}>
                {funnel.place}
              </SelectItem>
            ))}
          </Select>
          <Button
            type="submit"
            color="secondary"
            className={contactButton({ color: 'primary' })}
            variant="ghost"
            aria-label="Submit"
          >
            DROP US A MESSAGE
          </Button>
        </div>
      </form>
    </div >
  );
}

