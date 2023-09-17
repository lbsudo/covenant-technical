"use client"
import React, { useState } from 'react';
import { Input } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";
import { baseButton } from "@/components/primitives";
import { Button } from "@nextui-org/button";
import { toast } from "react-hot-toast"
import axios from 'axios';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  message: string;
  funnel: string; // You can define a more specific type if needed
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: '',
    funnel: '',
  });

  const funnels = [
    {
      value: 'Youtube',
      place: 'Youtube',
    },
    {
      value: 'AD',
      place: 'AD',
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await axios.post('/api/send-email', formData); // Updated URL
      console.log("Email sent successfully");
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
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
    <div className="w-full">
      <form className="flex flex-col justify-center items-center w-full mb-8" onSubmit={handleSubmit}>
        {/* Add input fields with appropriate name attributes */}
        <div className="flex w-full flex-wrap md:flex-nowrap gap-2 mb-2">
          <Input type="text" name="firstName" aria-label="First Name" placeholder="First Name" value={formData.firstName} onChange={handleChange} />
          <Input type="text" name="lastName" aria-label="Last Name" placeholder="Last Name" value={formData.lastName} onChange={handleChange} />
        </div>
        {/* Add other input fields and select with name attributes */}
        <div className="flex w-full flex-wrap md:flex-nowrap gap-2">
          <Input type="text" name="email" aria-label="Email" placeholder="Enter your email" value={formData.email} onChange={handleChange} />
          <Input type="text" name="phoneNumber" aria-label="Phone Number" placeholder="Phone Number" value={formData.phoneNumber} onChange={handleChange} />
        </div>
        <Textarea
          placeholder="How can we help?"
          className="w-full"
          aria-label="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
        <Select
          placeholder="How did you hear about us?"
          className="w-full"
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
          className={baseButton({ color: 'primary' })}
          variant="ghost"
          aria-label="Submit"
        >
          DROP US A MESSAGE
        </Button>
      </form>
    </div >
  );
}

