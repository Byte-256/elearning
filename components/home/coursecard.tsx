// components/CourseCard.js
interface CourseCardProps {
  courseName: string;
  description: string;
  courseCover: string;
}

import "@/app/globals.css";

import React from "react";

import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "../ui/card";

import Link from "next/link";
import Image from "next/image";

const CourseCard = ({
  courseName,
  description,
  courseCover,
}: CourseCardProps) => {
  return (
    <Card className=" rounded-2xl">
      <CardHeader className="">
        <CardTitle className="font-bold text-xl mb-2">{courseName}</CardTitle>
        <CardDescription className="text-gray-700 text-base">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Image
          src={courseCover}
          alt={courseName}
          className="w-full"
          width={100}
          height={100}
        />
      </CardContent>
    </Card>
  );
};

export default CourseCard;
