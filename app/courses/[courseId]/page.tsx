"use client";
import { useAuth } from "@/lib/AuthProvider";

interface CoursePageProps {
  params: {
    courseId: string;
  };
}

const CoursePage = ({ params }: CoursePageProps) => {
  const auth = useAuth();

  return (
    <>
      <h2>Hello, {auth?.currentUser?.displayName}</h2>
      <p>
        Your Course with Id {params.courseId} is being cooking <br /> Thanks for
        your patience
      </p>
    </>
  );
};
export default CoursePage;
