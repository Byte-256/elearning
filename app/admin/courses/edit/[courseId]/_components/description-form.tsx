"use client";

import { useState } from "react";
import { Textarea, Button, Alert } from "@heroui/react";
import { useForm } from "react-hook-form";
import { updateCourse } from "@/utils/course";

export const DescriptionForm = ({
  initialData,
  courseId,
}: {
  initialData: any;
  courseId: string;
}) => {
  const { register, handleSubmit } = useForm({
    defaultValues: { description: initialData.description },
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const onSubmit = async (data: { description: string }) => {
    setLoading(true);
    const result = await updateCourse(courseId, data);

    if (result.success) {
      setMessage({
        type: "success",
        text: "Course description updated successfully!",
      });
    } else {
      setMessage({
        type: "error",
        text: "Failed to update description. Please try again.",
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
      <Textarea label="Description" {...register("description")} />
      <Button type="submit" isLoading={loading} color="primary" fullWidth>
        Save
      </Button>
    </form>
  );
};
