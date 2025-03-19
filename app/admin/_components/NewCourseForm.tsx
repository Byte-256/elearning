"use client";

import { set, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { NewCourseSchema } from "@/schema";

import { useForm } from "react-hook-form";

import { Form, Input, Button } from "@heroui/react";

import { useState } from "react";

import { db } from "@/lib/firebase";
import { addDoc, collection } from "firebase/firestore";
import { useRouter } from "next/navigation";

type CourseFormData = z.infer<typeof NewCourseSchema>;

const AddCourseForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CourseFormData>({
    resolver: zodResolver(NewCourseSchema),
  });

  const onSubmit = async (data: CourseFormData) => {
    try {
      setIsSubmitting(true);

      // Create a new course to Firestore
      const docRef = await addDoc(collection(db, "courses"), {
        title: data.title,
        createdAt: new Date(),
      });

      console.log("Course added:", docRef.id);
      reset();
      router.push(`/admin/courses/edit/${docRef.id}`);
    } catch (error: any) {
      alert("Error adding course: Contact Website Admin");
      console.error("Error adding course:", error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mx-auto p-6 max-w-screen-md">
      <h2 className="text-xl font-semibold mb-4">New Course</h2>

      <Form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-2 w-full"
      >
        <div className="flex w-full flex-wrap gap-4">
          <Input
            {...register("title")}
            label="Title"
            placeholder="Enter course title"
            errorMessage={errors.title?.message}
            type="text"
          />

          <Button type="submit" variant="solid" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AddCourseForm;
