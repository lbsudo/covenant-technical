import { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: {
    default: `Technologies - ${siteConfig.name}`,
    template: `%s - ${siteConfig.name}`,
  },
  description: `We with some of the best technologies out there and are constanly adapting to new developments as well. This is a sense of some of the larger platforms and technology we are able to create and work in coordination with you to reach your business goals`,
};

export default function TechnologiesLayout({
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
