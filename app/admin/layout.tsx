import "@/app/globals.css";
// Import your globals here

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Admin panel",
  description: "Admin Panel for Admin",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
