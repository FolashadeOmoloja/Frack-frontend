export default function HireTalentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="max-w-[2400px] mx-auto bg-[#F4F5F7] h-[200vh]">
      {children}
    </main>
  );
}
