import { Button } from "../ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="bg-blue-500/20">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-darkBlueGrey sm:text-4xl">
            Welcome to E-Learning Platform
          </h1>
          <p className="mt-4 text-lg text-darkBlueGrey">
            Start your learning journey today!
          </p>
          <div className="mt-6">
            <Link href="/register">
              <Button className="px-6 py-3 bg-primary text-neutralWhite rounded-lg font-semibold text-sm uppercase tracking-wide hover:bg-accent focus:outline-none focus:bg-accent">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
