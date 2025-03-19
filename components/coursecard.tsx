// components/CourseCard.js

import "@/app/globals.css";

import React from "react";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@heroui/react";

import { CourseProps } from "@/utils/course";
import { ChevronRight } from "lucide-react";

const CourseCard = ({ course }: { course: CourseProps }) => {
  return (
    <Card className="py-4 no-underline hover:cursor-pointer">
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://placehold.co/270x170/png"
          width={270}
        />
      </CardBody>
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <small className="text-default-500">12 Chapters</small>
        <small className="text-default-500">{course.price}</small>
        <div className=" flex flex-row justify-between items-center w-full">
          <h4 className="font-bold text-large">{course.title}</h4>
          <Button isIconOnly>
            <ChevronRight />
          </Button>
        </div>
      </CardHeader>
    </Card>
  );
};

export default CourseCard;
