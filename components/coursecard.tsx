// components/CourseCard.js

import "@/app/globals.css";

import React from "react";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "./ui/card";

import Image from "next/image";
import { Button } from "./ui/button";
import { CourseProps } from "@/utils/course";

const CourseCard = ({course, key}: {course: CourseProps, key: any}) => {
  return (
    <Card className=" rounded-2xl bg-blue-200/30" key={key}>
      <CardHeader className="">
        <Image
          src={"https://placehold.co/720x480/png"}
          alt={course.title}
          className="w-fit rounded-2xl"
          width={270}
          height={100}
          quality={50}
        />
      </CardHeader>
      <CardContent>
        <CardTitle className="font-bold text-xl mb-2">{course.title}</CardTitle>
        <CardDescription className="text-gray-700 text-base flex justify-between">
          {course.description}
          <Button className=" rounded-lg flex justify-between">
            More
            <svg
              className="w-4 h-4 ml-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M6.707 15.707a1 1 0 0 1-1.414-1.414L10.586 10l-5.293-5.293a1 1 0 1 1 1.414-1.414l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-.707.293z"
                clipRule="evenodd"
              />
            </svg>
          </Button>
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
