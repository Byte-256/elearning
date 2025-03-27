import "@/app/globals.css";
import { Button } from "@heroui/react";
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
  return (
    <>
      <div className="absolute top-10 left-10 flex ">
        <Button>Admin</Button>
        <Button>Home</Button>
      </div>
      {children}
    </>
  );
}
