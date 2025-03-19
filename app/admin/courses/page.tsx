"use client";

import "@/app/globals.css";
import Navbar from "@/components/home/navbar";
import CourseList from "./_components/coursesList";
import Footer from "@/components/home/footer";
import { Label } from "@/components/ui/label";

const Courses = () => {
  return (
    <>
      <main className="bg-[#1a1a1a]">
        <h2 className=" flex justify-center font-serif font-bold text-4xl text-[#c1e140] pt-20">
          Courses
        </h2>
        <CourseList />
      </main>
    </>
  );
};

export default Courses;
