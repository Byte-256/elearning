import "@/app/globals.css";
import "@/app/colors.css";

import { AuthProvider } from "@/lib/AuthProvider";
import { Inter } from "next/font/google";

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
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
