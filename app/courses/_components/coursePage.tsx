import CourseCard from "@/components/home/coursecard";
import Sidebar from "./sidebar";
import React, { useEffect, useState } from "react";
import { db } from "@/lib/fb.config";
import { DataSnapshot, onValue, ref } from "firebase/database";

import Loading from "@/components/ui/Loading";

export default function CoursePage() {
  const [courses, setCourses] = useState([
    {
      title: "",
      description: "",
    },
    {
      title: "",
      description: "",
    },
  ]);
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let courseRef = ref(db, "/Courses");
    onValue(courseRef, (snapshot: DataSnapshot) => {
      const coursesData = snapshot.val();
      if (coursesData) {
        const coursesArray = Object.keys(coursesData).map((key) => ({
          id: key,
          ...coursesData[key],
        }));
        setCourses(coursesArray);
        setLoading(false);
      } else {
        setCourses([]);
      }
    });

    return () => {
      onValue(courseRef, (snap: DataSnapshot) => {});
    };
  }, []);

  return (
    <section className="flex flex-auto h-full w-screen flex-wrap justify-center items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {isLoading ? (
          <Loading />
        ) : (
          courses.map((course, index) => (
            <CourseCard
              key={index}
              courseName={course.title ? course.title : ""}
              courseCover="/course1.jpg"
              description={course.description ? course.description : ""}
            />
          ))
        )}
      </div>
    </section>
  );
}
