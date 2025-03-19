"use client";

import "@/app/globals.css";
import Navbar from "@/components/home/navbar";
import CoursePage from "./_components/coursePage";
import Footer from "@/components/home/footer";
import { Label } from "@/components/ui/label";

interface CoursesProps {}

const Courses = ({}: CoursesProps) => {
  return (
    <main className=" min-h-screen bg-[#1a1a1a]">
      <Navbar isCourse />
      <h1 className=" flex justify-center font-serif mt-4 font-bold text-4xl">
        Top Courses
      </h1>
      <CoursePage />
      <Footer />
    </main>
  );
};

export default Courses;
