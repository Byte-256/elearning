// Import your globals here
import "@/app/globals.css";
import "@/app/colors.css";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Isaac Academy",
  description: "You don't need if you know",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <div
        id="root"
        className="loginbody h-svh flex items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-500 to-blue-600"
      >
        {children}
      </div>
    </html>
  );
}
