"use client";
import CourseCard from "@/components/coursecard";
import React, { useEffect, useState } from "react";

import Loading from "@/components/ui/Loading";
import { CourseProps, getCourses } from "@/utils/course";

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
            <a href={`/courses/${course.id}`} key={index}>
              <CourseCard key={index} course={course} />
            </a>
          ))
        )}
      </div>
    </section>
  );
}
