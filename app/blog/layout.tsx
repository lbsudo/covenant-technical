export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center gap-4 w-full ">
      <div className="inline-block max-w-screen-2xl text-center justify-center">
        {children}
      </div>
    </section>
  );
}
