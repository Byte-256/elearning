// components/Hero.js
"use client";
import { redirect, useRouter } from "next/navigation";
import { Button } from "../ui/button";

export default function Hero() {
  const router = useRouter();
  return (
    <div className="bg-neutralWhite">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-darkBlueGrey sm:text-4xl">
            Welcome to E-Learning Platform
          </h1>
          <p className="mt-4 text-lg text-darkBlueGrey">
            Start your learning journey today!
          </p>
          <div className="mt-6">
            <Button
              onClick={(e) => router.push("/register")}
              className="px-6 py-3 bg-primary text-neutralWhite rounded-lg font-semibold text-sm uppercase tracking-wide hover:bg-accent focus:outline-none focus:bg-accent"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
