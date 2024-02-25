// components/FeaturedCourses.js
"use client"
import CourseCard from "./coursecard";

export default function FeaturedCourses() {
    return (
      <section className="bg-neutralLightGrey py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkBlueGrey mb-10 text-center">Featured Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Featured course cards */}
            <CourseCard courseName="Example 1" courseCover="/course1.jpg" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suscipit tellus mauris a diam maecenas sed."/>
            {/* Repeat similar cards for other featured courses */}
          </div>
        </div>
      </section>
    );
  }
  