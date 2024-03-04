// components/Navbar.js

import Image from "next/image";
import Link from "next/link";
import UserProfile from "./userProfile";
import {
  Navbar as Navbar1,
  NavbarBrand,
  NavbarItem,
  NavbarContent,
} from "@nextui-org/navbar";
import React from "react";

interface navbarProps {
  isHome?: boolean;
  isCourse?: boolean;
  isAbout?: boolean;
  isContact?: boolean;
  children: React.ReactNode;
}

export default function Navbar({
  isHome,
  isCourse,
  isAbout,
  isContact,
  children,
}: navbarProps) {
  return (
    <Navbar1 className=" bg-blue-500/20 shadow-md h-16">
      <NavbarItem>{children}</NavbarItem>
      <NavbarBrand>
        <Image src="/logo.svg" alt="logo" width={45} height={45} />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive={isHome}>
          <Link href="/" aria-current="page">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive={isCourse}>
          <Link href="/courses">Courses</Link>
        </NavbarItem>
        <NavbarItem isActive={isAbout}>
          <Link href="#" color="foreground">
            About
          </Link>
        </NavbarItem>
        <NavbarItem isActive={isContact}>
          <Link color="foreground" href="#">
            Contact us
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <UserProfile />
        </NavbarItem>
      </NavbarContent>
    </Navbar1>
  );
}
