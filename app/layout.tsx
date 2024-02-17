import type { Metadata } from "next";
import { Inter,Poppins } from "next/font/google";
import "./globals.css";



// Fonts
const inter = Inter({ 
  subsets: ["latin"]
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: "400"
})

export const metadata: Metadata = {
  title: "E-learning App",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
