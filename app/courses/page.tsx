"use client";

import "@/app/globals.css";
import Navbar from "@/components/home/navbar";
import CoursePage from "./_components/coursePage";
import Footer from "@/components/home/footer";
import { Label } from "@/components/ui/label";

interface CoursesProps {}

const Courses = ({}: CoursesProps) => {
  return (
    <main className=" min-h-screen">
      <Navbar isCourse />
      <Label className=" flex justify-center items-center mt-4 font-bold animate-pulse text-xl">
        Top Courses
      </Label>
      <CoursePage />
      <Footer />
    </main>
  );
};

export default Courses;
