"use client";

import { useState } from "react";
import { Input, Button, Alert } from "@heroui/react";
import { useForm } from "react-hook-form";
import { updateCourse } from "@/utils/course";

export const TitleForm = ({
  initialData,
  courseId,
}: {
  initialData: any;
  courseId: string;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { title: initialData.title } });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const onSubmit = async (data: { title: string }) => {
    setLoading(true);
    const result = await updateCourse(courseId, data);
    if (result.success) {
      setMessage({
        type: "success",
        text: "Course title updated successfully!",
      });
    } else {
      setMessage({
        type: "error",
        text: "Failed to update title. Please try again.",
      });
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-4">
      {message && (
        <Alert
          variant="faded"
          className={`${
            message.type === "success" ? "bg-green-400/40" : "bg-red-400/40"
          } mb-2 `}
        >
          {message.text}
        </Alert>
      )}
      <Input
        label="Course Title"
        {...register("title", { required: true })}
        errorMessage={errors.title && "Title is required"}
      />
      <Button type="submit" isLoading={loading} color="primary" fullWidth>
        Save
      </Button>
    </form>
  );
};
