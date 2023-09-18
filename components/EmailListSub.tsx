"use client"
import React, { useState } from 'react';
import { footerButton } from "./primitives";
import { Input } from "@nextui-org/react";
import { Checkbox } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import axios from 'axios';

export default function EmailListSub() {
  const [email, setEmail] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email) {
      alert("Email is required");
      return;
    }

    if (!isChecked) {
      alert("Please agree to the Privacy Policy");
      return;
    }

    try {
      const response = await axios.post("/api/subscribe", { email }, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        alert("Subscribed successfully!");
        setEmail("");
      } else {
        alert("Subscription failed. Please try again later.");
      }
    } catch (error) {
      console.error("Error subscribing:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <>
      <form className='w-11/12 flex flex-col justify-center items-center' onSubmit={handleSubmit}>
        <Input
          type="email"
          aria-label='email'
          placeholder="Enter your email"
          radius='full'
          variant='underlined'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Checkbox
          className='text-center text-sm mt-1'
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
        >
          <span className='text-red-500'>*</span>I have read the Privacy Policy and agree to its terms.
        </Checkbox>
        <Button color="secondary" variant="ghost" className={footerButton({ color: 'primary' })} type="submit">
          Subscribe
        </Button>
      </form>
    </>
  );
}
