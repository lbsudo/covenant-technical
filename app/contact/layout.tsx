import { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: {
    default: `Contact - ${siteConfig.name}`,
    template: `%s - ${siteConfig.name}`,
  },
  description: `Get in touch with us. We'd love to talk more about how we can assist your business in increasing traffic, conversion, and growth. Reach out today and schedule a free discovery call to find out how we can help you solve the pain points in your business.`,
};


export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col w-full items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-full text-center justify-center">
        {children}
      </div>
    </section>
  );
}
