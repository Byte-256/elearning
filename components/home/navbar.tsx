// components/Navbar.js

import Image from "next/image";
import Link from "next/link";
import UserProfile from "./userProfile";

export default function Navbar() {
  return (
    <nav className="bg-blue-500/20 shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0">
              {/* Your logo here */}
              <Image
                className="h-8 w-8"
                src="/logo.svg"
                alt="Logo"
                width={100}
                height={100}
              />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {/* Navigation links */}
                <Link
                  href="/courses"
                  className="text-darkBlueGrey hover:text-primary"
                >
                  Courses
                </Link>
                <Link
                  href="/about"
                  className="text-darkBlueGrey hover:text-primary"
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="text-darkBlueGrey hover:text-primary"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
          <div className="ml-4 flex items-center md:ml-6 relative">
            <UserProfile />
          </div>
        </div>
      </div>
    </nav>
  );
}
