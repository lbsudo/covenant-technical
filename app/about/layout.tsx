import { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: {
    default: `About - ${siteConfig.name}`,
    template: `%s - ${siteConfig.name}`,
  },
  description: `Providing digital services to businesses to help them reach their goals is our mission ,learn more about our work process to achieve those goals. From our design and development approach, communication practices with clients, and our values.`,
};

export default function AboutLayout({
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
