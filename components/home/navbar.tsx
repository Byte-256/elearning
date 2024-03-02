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
import { Button } from "@nextui-org/react";

export default function Navbar() {
  return (
    <Navbar1 className=" bg-blue-500/20 shadow-md">
      <NavbarBrand>
        <Image src="/logo.svg" alt="logo" width={45} height={45} />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Courses
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" color="foreground">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Contact us
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <UserProfile />
        </NavbarItem>
      </NavbarContent>
    </Navbar1>
  );
}
