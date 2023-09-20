import { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: {
    default: `Services - ${siteConfig.name}`,
    template: `%s - ${siteConfig.name}`,
  },
  description: `We provide some of the best services in the digital space including digital platform work, graphic design, cyber security, and more. Take a look at the services we have to offer as well as some of the best in class technologies we work with.`,
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center gap-4">
      <div className="inline-block max-w-full text-center justify-center">
        {children}
      </div>
    </section>
  );
}
