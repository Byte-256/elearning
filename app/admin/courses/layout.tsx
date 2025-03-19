import "@/app/globals.css";
import "@/app/colors.css";

import { Inter } from "next/font/google";
import Navbar from "@/components/home/navbar";
import Footer from "@/components/home/footer";

const inter = Inter({
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: {
  children: JSX.Element;
}) {
  return (
    <html>
      <head />
      <body className={`${inter.className} `}>
        <Navbar isCourse />
        {children}
        <Footer />
      </body>
    </html>
  );
}
