// components/CourseCard.js
interface CourseCardProps {
  courseName: string;
  description: string;
  courseCover: string;
}

import "@/app/globals.css";

import React from "react";

import Link from "next/link";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";

const CourseCard = ({
  courseName,
  description,
  courseCover,
}: CourseCardProps) => {
  return (
    <Card className="bg-blue-300/15 border-white/20 border-1">
      <CardHeader className="">
        <h4 className="font-bold text-large">{courseName}</h4>
        <p className="text-tiny uppercase font-bold">{description}</p>
      </CardHeader>
      <CardBody className=" ">
        <Image
          alt="Card background"
          className="object-cover"
          src={courseCover}
          width={270}
        />
      </CardBody>
    </Card>
  );
};

export default CourseCard;
