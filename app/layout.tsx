import type { Metadata } from "next";
import { Archivo, Archivo_Black, Inter } from "next/font/google";
import localFont from '@next/font/local';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const archivo = Archivo({
  subsets: ["latin"],
  
})
// const lotaFont = localFont({
//   src: './public/fonts/lota-grotesque-alt-1-cufonfonts/Los-Andes-Lota-Grotesque-Alt-2-Regular.otf', 

// });

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
      <body className={archivo.className}>
         <main className="max-w-[2400px]">{children}</main>
      </body>
    </html>
  );
}
