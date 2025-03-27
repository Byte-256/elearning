"use client";
import { useAuth } from "@/lib/AuthProvider";
import { Button } from "@heroui/react";
import Link from "next/link";

export default function Hero() {
  const isAdmin = useAuth()?.isAdmin;
  return (
    <div className="relative w-full h-screen bg-black text-white flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/bg.png')] bg-cover bg-center opacity-50"></div>

      {/* Top Left - Login & Signup Buttons */}
      <div className="absolute top-10 left-10 flex space-x-4">
        {["LOG IN", "SIGN UP"].map((text, index) => (
          <Link key={index} href={text === "LOG IN" ? "/login" : "/signup"}>
            <button className="bg-focus hover:bg-teal-600 text-white font-bold py-2 px-6 rounded">
              {text}
            </button>
          </Link>
        ))}
        {isAdmin && (
          <Link href={"/admin"}>
            <Button>Admin</Button>
          </Link>
        )}
      </div>

      {/* Top Right - Title and Welcome */}
      <div className="absolute right-48 top-24 text-right">
        <h3 className="text-6xl italic font-thin font-serif">
          Someone{"'"}s E Learning Platform
        </h3>
        <h1 className="text-9xl font-bold mt-2">Welcome</h1>
      </div>

      {/* Bottom Right - Description & About Us */}
      <div className="absolute bottom-24 right-48 text-right">
        <p className="text-xl">Move your Day-to-Day Words with help of us</p>
        <p className="text-sm opacity-80 mb-4">
          A Growing Student Community of generosity
        </p>
        <Link href="/about">
          <button className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-6 rounded">
            ABOUT US →
          </button>
        </Link>
      </div>
    </div>
  );
}
