"use client";

import { redirect } from "next/navigation";

import {
  CircleDollarSign,
  File,
  LayoutDashboard,
  ListChecks,
} from "lucide-react";

import { TitleForm } from "./_components/title-form";
import { DescriptionForm } from "./_components/description-form";
import { BannerForm as ImageForm } from "./_components/banner-form";
import { PriceForm } from "./_components/price-form";
import { Alert } from "@heroui/react";

import { useAuth } from "@/lib/AuthProvider";

import { CourseProps, getCourse } from "@/utils/course";

import React, { use, useEffect, useState } from "react";
import Loading from "@/components/ui/Loading";

const CourseIdPage = ({ params }: { params: { courseId: string } }) => {
  const auth = useAuth();
  const userId = auth?.currentUser?.uid;
  const isAdmin = auth?.isAdmin;
  const [isLoading, setLoading] = useState(true);
  const [course, setCourse] = useState<CourseProps | null>(null);

  const courseId = params.courseId;

  useEffect(() => {
    getCourse(courseId)
      .then((c) => {
        if (!c) {
          console.error("Course not found.");
        }
        setCourse(c!);
      })
      .catch((e) => {
        console.error("Failed to fetch course data.");
        console.error(e.message);
      })
      .finally(() => setLoading(false));
  }, [courseId]);

  const categories = null;

  if (!course && !isLoading) {
    return redirect("/");
  }
  console.log(course);

  const requiredFields = [
    course?.title,
    course?.description,
    course?.banner,
    course?.price,
    // course.chapters.some(
    //   (chapter: { isPublished: any }) => chapter.isPublished
    // ),
  ];

  const totalFields = 6; // requiredFields.length;
  const completedFields = 1; //requiredFields.filter(Boolean).length;

  const completionText = `(${completedFields} / ${totalFields})`;

  const isComplete = false; // requiredFields.every(Boolean);

  return (
    <>
      {!true && (
        // <Banner label="This course is unpublished. It will not be visible to the students." />
        <Alert color="warning" variant="faded">
          This course is unpublished. It will not be visible to the students.
        </Alert>
      )}
      {isLoading && <Loading />}
      {!isLoading && (
        <div className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-y-2">
              <h1 className="text-2xl font-medium">Course setup</h1>
              <span className="text-sm text-slate-700">
                Complete all fields {completionText}
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
            <div>
              <div className="flex items-center gap-x-2">
                <LayoutDashboard />
                <h2 className="text-xl">Customize your course</h2>
              </div>
              <TitleForm initialData={course} courseId={courseId} />
              <DescriptionForm initialData={course} courseId={courseId} />
              <ImageForm initialData={course} courseId={courseId} />
              {/* <CategoryForm
              initialData={course}
              courseId={course.id}
              options={categories.map((category) => ({
                label: category.name,
                value: category.id,
                }))}
                /> */}
            </div>
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-x-2">
                  <ListChecks />
                  <h2 className="text-xl">Course chapters</h2>
                </div>
                {/* <ChaptersForm initialData={course} courseId={course.id} /> */}
              </div>
              <div>
                <div className="flex items-center gap-x-2">
                  <CircleDollarSign />
                  <h2 className="text-xl">Sell your course</h2>
                </div>
                <PriceForm initialData={course} courseId={courseId} />
              </div>
              <div>
                <div className="flex items-center gap-x-2">
                  <File />
                  <h2 className="text-xl">Resources & Attachments</h2>
                </div>
                {/* <AttachmentForm initialData={course} courseId={course.id} /> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CourseIdPage;
