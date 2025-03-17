// components/FeaturedCourses.js
"use client";
import { useEffect, useState } from "react";
import CourseCard from "@/components/coursecard";

import { db } from "@/lib/firebase";
import Loading from "../ui/Loading";


export default function FeaturedCourses() {
  const [isLoading, setIsLoading] = useState(false);

  if (isLoading) {
    return <section className="min-h-screen flex items-center justify-center py-12"><Loading /></section>;
  }

  return (
    <section className=" py-20 min-h-[450px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-darkBlueGrey mb-10 text-center">
          Featured Courses
        </h2>
        Get the most popular courses from our community.
        But Wait til we have some courses to show you.
      </div>
    </section>
  );
}
