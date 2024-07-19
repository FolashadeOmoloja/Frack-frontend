import type { Metadata } from "next";
import { Archivo, Archivo_Black, Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const archivo = Archivo({
  subsets: ["latin"],
});

export default function HireTalentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="max-w-[2400px] mx-auto">{children}</main>;
}
