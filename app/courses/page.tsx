"use client";

import "@/app/globals.css";
import Navbar from "@/components/home/navbar";
import { Button } from "@/components/ui/button";
import { SidebarCloseIcon, SidebarOpenIcon } from "lucide-react";
import { useEffect, useState } from "react";
import CoursePage from "./_components/coursePage";
import Sidebar from "./_components/sidebar";
import Footer from "@/components/home/footer";

interface CoursesProps {}

const Courses = ({}: CoursesProps) => {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  return (
    <div className="flex flex-col h-screen">
      <Button
        onClick={() => setShowSidebar(!showSidebar)}
        className=" bg-transparent block sm:hidden fixed top-3 left-4 z-50"
      >
        {!showSidebar && <SidebarOpenIcon />}
        {showSidebar && <SidebarCloseIcon />}
      </Button>
      <Navbar isCourse />
      <Sidebar
        className={`${
          showSidebar
            ? "block transition-transform ease-in-out duration-300 translate-x-0 transform"
            : "block transition-transform ease-in-out duration-300 -translate-x-full transform"
        }`}
      />
      <CoursePage />
      <Footer />
    </div>
  );
};

export default Courses;
