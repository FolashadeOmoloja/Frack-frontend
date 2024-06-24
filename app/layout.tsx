import type { Metadata } from "next";
import { Archivo, Archivo_Black, Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/LandingPage/Offer/Footer";

const inter = Inter({ subsets: ["latin"] });
const archivo = Archivo({
  subsets: ["latin"],
  
})


export const metadata: Metadata = {
  title: "Frack",
  description: "Frack aims to revolutionize the way companies and fractional professionals connect",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${archivo.className} `}>
         <main className="max-w-[2400px] mx-auto">
          {children}
          <Footer/>
          </main>
      </body>
    </html>
  );
}
