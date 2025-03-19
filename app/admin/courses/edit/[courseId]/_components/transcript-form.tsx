"use client";

import { useState } from "react";
import { Input, Button, Alert } from "@heroui/react";
import { useForm } from "react-hook-form";
import { updateCourse } from "@/utils/course";

export const TranscriptForm = ({
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
  } = useForm({ defaultValues: { transcriptUrl: initialData.transcriptUrl } });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const onSubmit = async (data: { transcriptUrl: string }) => {
    setLoading(true);
    const result = await updateCourse(courseId, data);
    if (result.success) {
      setMessage({
        type: "success",
        text: "Course transcript updated successfully!",
      });
    } else {
      setMessage({
        type: "error",
        text: "Failed to update Transcript. Please try again.",
      });
    }
    setLoading(false);
  };

  return (
    <>
      <form
        method="POST"
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
          <Input type="file" accept="*/*" name="transcript" />
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
          label="Course Transcript"
          {...register("transcriptUrl", { required: true })}
          errorMessage={errors.transcriptUrl && "Transcript is required"}
          isDisabled
        />
        <Button type="submit" isLoading={loading} color="primary" fullWidth>
          Save
        </Button>
      </form>
    </>
  );
};
