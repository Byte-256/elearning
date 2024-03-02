"use client";

import Navbar from "@/components/home/navbar";
import "@/app/globals.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface CoursesProps {}

const Courses = ({}: CoursesProps) => {
  return (
    <div>
      <Navbar />
    </div>
  );
};

export default Courses;
