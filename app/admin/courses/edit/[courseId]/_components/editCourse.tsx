"use client";

import { useEffect, useState } from "react";
import { Alert, Tabs, Tab } from "@heroui/react";

import { CourseProps } from "@/utils/course";

import { TitleForm } from "./title-form";
import { DescriptionForm } from "./description-form";
import { PriceForm } from "./price-form";
import { AudioForm } from "./audio-form";
import { TranscriptForm } from "./transcript-form";
import { BannerForm } from "./banner-form";

interface EditCourseProps {
  details: CourseProps;
}

const EditCourse = ({ details }: EditCourseProps) => {
  const [isVertical, setIsVertical] = useState(true);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);
  useEffect(() => {
    if (screen.width <= 768) {
      setIsVertical(false);
    }
  }, []);

  return (
    <div className="w-screen lg:max-w-3xl mx-auto lg:p-6">
      {message && (
        <Alert
          variant="faded"
          className={`mb-4 ${
            message.type === "success" ? "bg-green-600/20" : "bg-red-600/20"
          }`}
        >
          {message.text}
        </Alert>
      )}

      {/* Tabs for better organization */}

      <Tabs isVertical={isVertical} size={isVertical ? "md" : "sm"}>
        <Tab title="Title">
          <TitleForm initialData={details} courseId={details.id} />
        </Tab>

        <Tab title="Description">
          <DescriptionForm initialData={details} courseId={details.id} />
        </Tab>

        <Tab title="Pricing">
          <PriceForm initialData={details} courseId={details.id} />
        </Tab>
        {/* 
        <Tab title="Banner">
          <BannerForm initialData={details} courseId={details.id} />
        </Tab> */}

        <Tab title="Audio">
          <AudioForm initialData={details} courseId={details.id} />
        </Tab>

        {/* <Tab title="Transcript">
          <TranscriptForm initialData={details} courseId={details.id} /> */}
        {/* </Tab> */}
      </Tabs>
    </div>
  );
};

EditCourse.displayName = "EditCourse";

export default EditCourse;
