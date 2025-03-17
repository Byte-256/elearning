"use client";
import Loading from "@/components/ui/Loading";
import { useEffect, useState } from "react";

import { CourseProps, getCourse } from "@/utils/course";
import CourseCard from "@/components/coursecard";

interface CoursePageProps {
  params: {
    courseId: string;
  };
}

const CoursePage = ({ params }: CoursePageProps) => {
  const [course, setCourse] = useState<CourseProps | undefined>(undefined);
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const res = getCourse(params.courseId);
    res
      .then((c) => {
        setCourse(c);
      })
      .catch((e) => {
        console.error(e.message);
      })
      .finally(() => setLoading(false));
  }, [params.courseId]);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      {course === undefined ? (
        <h1 className="text-2xl font-bold">
          Your Course with Id {params.courseId} is not Available :{"("}
        </h1>
      ) : (
        <>
          <h1 className="text-2xl font-bold">
            Your Course is {params.courseId}
          </h1>
          <CourseCard course={course} key={1} />
        </>
      )}
    </>
  );
};
export default CoursePage;
