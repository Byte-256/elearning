"use client";
import CourseCard from "@/components/home/coursecard";
import React, { useEffect, useState } from "react";

import Loading from "@/components/ui/Loading";
import { getCourses } from "@/app/_utils/courses";

interface CourseProps {
  id: string;
  courseName: string;
  courseDescription: string;
  createdAt: string;
  courseCover: {
    url: string;
  };
}

export default function CoursePage() {
  const [courses, setCourses] = useState<CourseProps[]>();
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const res = getCourses();
    res
      .then((courseLists) => {
        setCourses(courseLists);
        setLoading(false);
      })
      .catch((e) => {
        console.error(e);
        setLoading(false);
      });
  }, []);

  return (
    <section className="flex flex-auto h-full w-screen flex-wrap justify-center items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {isLoading ? (
          <Loading />
        ) : (
          courses?.map((course, index) => (
            <CourseCard
              key={index}
              courseName={course.courseName || ""}
              courseCover={
                course.courseCover?.url
                  ? course.courseCover.url
                  : "/course1.jpg"
              }
              description={course.courseDescription || ""}
            />
          ))
        )}
      </div>
    </section>
  );
}
