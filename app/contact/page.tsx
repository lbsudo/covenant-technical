import React from "react";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {


  return (
    <>
      <section className="mb-12">
        <div>
          <h3 className="text-currentColor text-3xl font-semibold">Drop Us A Line</h3>
        </div>
      </section>
      <section>
        <ContactForm />
      </section>
    </>
  );
}
