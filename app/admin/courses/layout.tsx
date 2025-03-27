import "@/app/globals.css";
import "@/app/colors.css";

import { Inter } from "next/font/google";
import Navbar from "@/components/home/navbar";
import Footer from "@/components/home/footer";

import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";

import { ourFileRouter } from "@/app/api/uploadthing/core";

const inter = Inter({
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: {
  children: JSX.Element;
}) {
  return (
    <section className={`${inter.className} `}>
      <Navbar isCourse />
      <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
      {children}
      <Footer />
    </section>
  );
}
