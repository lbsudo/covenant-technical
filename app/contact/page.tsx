"use client"
import React, { useState } from "react";
import { Input } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";
import { baseButton } from "@/components/primitives";
import { Button } from "@nextui-org/button";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  message: string;
  source: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
    source: "",
  });



  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 200) {
        // Clear the form after submission
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          message: "",
          source: "",
        });

        alert("Message sent successfully!");
      } else {
        alert("Failed to send the message. Please try again later.");
      }
    } catch (error) {
      console.error("Error sending the message:", error);
      alert("Failed to send the message. Please try again later.");
    }
  };


  const sources = [
    {
      value: 1,
      label: "Youtube",
    },
  ];

  return (
    <div className="w-full">
      <form className="flex flex-col justify-center items-center w-full mb-8" onSubmit={handleSubmit}>
        <div className="flex w-full flex-wrap md:flex-nowrap gap-2 mb-2">
          <Input type="text" placeholder="First Name" name="firstName"
            value={formData.firstName}
            onChange={handleChange} />
          <Input type="text" placeholder="Last Name" name="lastName"
            value={formData.lastName}
            onChange={handleChange} />
        </div>
        <div className="flex w-full flex-wrap md:flex-nowrap gap-2">
          <Input type="text" placeholder="Enter your email" name="email"
            value={formData.email}
            onChange={handleChange} />
          <Input type="tel" placeholder="Phone Number" name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange} />
        </div>
        <Textarea
          placeholder="How can we help?"
          className="w-full"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
        <Select
          placeholder="How did you hear about us?"
          className="w-full"
          name="source"
          value={formData.source}
          onChange={handleChange}
        >
          {sources.map((source) => (
            <SelectItem key={source.value} value={source.value}>
              {source.label}
            </SelectItem>
          ))}
        </Select>
      </form>
      <Button
        color="secondary"
        className={baseButton({ color: 'primary' })}
        variant="ghost"
        type="submit"
      >
        DROP US A MESSAGE
      </Button>
    </div>
  );
}
