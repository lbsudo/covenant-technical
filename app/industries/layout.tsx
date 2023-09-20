import { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: {
    default: `Industries - ${siteConfig.name}`,
    template: `%s - ${siteConfig.name}`,
  },
  description: `Many insdustries share pain points when growing their business but also face individual challenges as well, thats why we provide comprhensive solutions to your industries needs to help you excel in your market`,
};

export default function IndustriesLayout({
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
