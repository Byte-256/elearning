"use client";

import { useState } from "react";
import { Input, Button, Alert } from "@heroui/react";
import { useForm } from "react-hook-form";
import { updateCourse } from "@/utils/course";

export const AudioForm = ({
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
  } = useForm({ defaultValues: { audioUrl: initialData.audioUrl } });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const onSubmit = async (data: { audioUrl: string }) => {
    setLoading(true);
    const result = await updateCourse(courseId, data);
    if (result.success) {
      setMessage({
        type: "success",
        text: "Course price updated successfully!",
      });
    } else {
      setMessage({
        type: "error",
        text: "Failed to update price. Please try again.",
      });
    }
    setLoading(false);
  };

  return (
    <>
      <form
        onSubmit={(e: any) => {
          e.preventDefault();
          console.log(e.target[0].value);
        }}
      >
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
        <div className="flex flex-row gap-10 mt-8">
          <Input type="file" accept="audio/*" name="audio" />
          <Input
            type="submit"
            value={"Upload"}
            className="w-24"
            color="primary"
          />
        </div>
      </form>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-4">
        <Input
          label="Course Audio"
          {...register("audioUrl", { required: true })}
          errorMessage={errors.audioUrl && "Price is required"}
          isDisabled
        />
        <Button type="submit" isLoading={loading} color="primary" fullWidth>
          Save
        </Button>
      </form>
    </>
  );
};
