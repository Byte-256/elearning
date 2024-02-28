// components/FeaturedCourses.js
"use client"
import { useEffect, useState } from "react";
import CourseCard from "./coursecard";

import { ref, get, DataSnapshot, onValue } from 'firebase/database'
import { db } from "@/lib/fb.config";

const CourseRef = ref(db, "/Courses");
export default function FeaturedCourses() {

  const [courses, setCourses] = useState([
    {
      title: "Example 1",
      description: "Lorem ipsum "
    },
    {
      title: "Example 2",
      description: "Lorem ipsum"
    }
  ]);

  useEffect(() => {
    onValue(CourseRef, (snapshot: DataSnapshot) => {
      const coursesData = snapshot.val();
      if (coursesData) {
        // Convert the courses object into an array of courses
        const coursesArray = Object.keys(coursesData).map((key) => ({
          id: key,
          ...coursesData[key],
        }));
        // Set the courses array to the state
        setCourses(coursesArray);
      } else {
        // If no data available, set an empty array
        setCourses([]);
      }
    });

    // Clean up the listener when the component unmounts
    return () => {
      // Detach the listener
      // NOTE: This is optional but recommended to prevent memory leaks
      onValue(CourseRef, (snap: DataSnapshot)=>{  });
    };
  }, [])

    return (
      <section className="bg-neutralLightGrey py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkBlueGrey mb-10 text-center">Featured Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {
            courses.map((course, index) => (
                        <CourseCard key={index} courseName={course.title? course.title: ""} courseCover="/course1.jpg" description={course.description? course.description : ""}/>
              )
            )
          }
          </div>
        </div>
      </section>
    );
  }