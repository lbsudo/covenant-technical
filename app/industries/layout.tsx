export default function IndustriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col w-full items-center justify-center gap-4">
      <div className="inline-block max-w-full text-center justify-center">
        {children}
      </div>
    </section>
  );
}
