// pages/admin/AddCourse.tsx
"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AuthContext } from "@/lib/AuthContext";
import { db } from "@/lib/fb.config";
import { ref, set } from "firebase/database";
// pages/admin/AddCourse.tsx

import React, { useContext, useState } from "react";

function generateUniqueId() {
  const timestamp = Date.now().toString(36); // Convert timestamp to base-36 string
  const randomString = generateRandomString(6); // Generate a random string of length 6
  return timestamp + randomString;
}

function generateRandomString(length: number) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

const AddCourse: React.FC = () => {
  const [courseData, setCourseData] = useState({
    title: "",
    description: "",
    // Add more fields as needed
  });
  const { user } = useContext(AuthContext);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setCourseData({
      ...courseData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Logic to handle form submission (e.g., sending data to backend)
    set(ref(db, `Courses/${generateUniqueId()}`), courseData);

    // Reset form fields after submission if needed
    setCourseData({
      title: "",
      description: "",
    });
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Add New Course</h1>
      <form onSubmit={handleSubmit} className="max-w-md">
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Title
          </label>
          <Input
            type="text"
            id="title"
            name="title"
            value={courseData.title}
            onChange={handleInputChange}
            className="mt-1 "
          />
        </div>
        <div className="mb-4">
          <Label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </Label>
          <textarea
            id="description"
            name="description"
            value={courseData.description}
            onChange={handleInputChange}
            rows={3}
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-[2px] border-gray-400 rounded-md"
          ></textarea>
        </div>
        {/* Add more fields for course data */}
        <Button
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Add Course
        </Button>
      </form>
    </div>
  );
};

export default AddCourse;
