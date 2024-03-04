import { cn } from "@/lib/utils";
// import Link from "next/link";
import React from "react";
import {
  Navbar as Navbar1,
  NavbarItem,
  NavbarContent,
} from "@nextui-org/navbar";

import { Link } from "@nextui-org/link";

export default function sidebar({ className }: { className: string }) {
  return (
    <Navbar1
      className={cn(
        className,
        "fixed inset-y-0 left-0 w-64 bg-blue-300/20 z-20 p-4 top-16"
      )}
    >
      <NavbarContent className="flex flex-col justify-center h-full">
        <NavbarItem className="my-4">
          <Link
            href="#"
            className="block text-center px-4 py-2 rounded-xl bg-white/80 text-blue-600 hover:bg-blue-600 hover:text-white "
          >
            New Courses
          </Link>
        </NavbarItem>
        <NavbarItem className="my-4">
          <Link
            href="#"
            className="block text-center px-4 py-2 rounded-xl bg-white text-blue-600 hover:bg-blue-600 hover:text-white"
          >
            Enrolled Courses
          </Link>
        </NavbarItem>
        <NavbarItem className="my-4">
          <Link
            href="#"
            className="block text-center px-4 py-2 rounded-xl bg-white text-blue-600 hover:bg-blue-600 hover:text-white"
          >
            Completed Courses
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar1>
  );
}
