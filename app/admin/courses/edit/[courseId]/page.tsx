"use client";

import { useEffect, useRef, useState } from "react";
import { CourseProps, getCourse } from "@/utils/course";
import EditCourse from "./_components/editCourse";
import { Alert, Card, Spinner, Button, Skeleton } from "@heroui/react";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

interface CoursePageProps {
  params: {
    courseId: string;
  };
}

const CoursePage = ({ params }: CoursePageProps) => {
  const [course, setCourse] = useState<CourseProps | null>(null);
  const [isLoading, setLoading] = useState<boolean>(true);

  const [error, setError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const router = useRouter();

  useEffect(() => {
    getCourse(params.courseId)
      .then((c) => {
        if (!c) {
          setError("Course not found.");
        }
        setCourse(c!);
      })
      .catch((e) => {
        setError("Failed to fetch course data.");
        console.error(e.message);
      })
      .finally(() => setLoading(false));
  }, [params.courseId]);

  return (
    <div className="flex items-center justify-center min-h-screen p-6 bg-[#1a1a1a]">
      <Card className="w-full max-w-3xl p-6 bg-white shadow-md rounded-lg">
        {isLoading ? (
          <div className="flex flex-col items-center">
            <Spinner size="lg" className="text-primary" />
            <Skeleton className="w-full h-8 mt-4" />
            <Skeleton className="w-2/3 h-6 mt-2" />
          </div>
        ) : error ? (
          <Alert
            variant="solid"
            color="danger"
            className="text-center text-lg font-semibold"
          >
            {error}
          </Alert>
        ) : (
          <>
            <div className="flex justify-between gap-4 items-center">
              <Button isIconOnly onPress={() => router.push("/admin/courses")}>
                <ChevronLeft />
              </Button>
              <h2 className="text-2xl font-bold">Customize your Course</h2>
              <Button variant="solid" color="primary">
                Publish
              </Button>
            </div>
            <div className="mt-4">
              <EditCourse details={course!} ref={formRef} />
            </div>
          </>
        )}
      </Card>
    </div>
  );
};

export default CoursePage;
