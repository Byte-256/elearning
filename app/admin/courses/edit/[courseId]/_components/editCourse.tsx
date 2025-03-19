"use client";

import { useForm } from "react-hook-form";
import { useState, forwardRef } from "react";
import {
  Input,
  Textarea,
  Button,
  Alert,
  Form,
  Modal,
  Tabs,
  Tab,
  Card,
} from "@heroui/react";
import { CourseProps, updateCourse } from "@/utils/course";
import { TitleForm } from "./title-form";
import { DescriptionForm } from "./description-form";
import { PriceForm } from "./price-form";
import { AudioForm } from "./audio-form";
import { TranscriptForm } from "./transcript-form";

interface EditCourseProps {
  details: CourseProps;
}

const EditCourse = forwardRef<HTMLFormElement, EditCourseProps>(
  ({ details }, ref) => {
    const {
      register,
      handleSubmit,
      formState: { errors, isValid },
      watch,
    } = useForm<CourseProps>({
      defaultValues: details,
      mode: "onChange",
    });

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState<{
      type: "success" | "error";
      text: string;
    } | null>(null);
    const [confirmOpen, setConfirmOpen] = useState(false);

    const onSubmit = async (data: CourseProps) => {
      setLoading(true);
      try {
        await updateCourse(data.id, data);
        setMessage({ type: "success", text: "Course updated successfully!" });
      } catch (error) {
        console.error("Error updating course:", error);
        setMessage({ type: "error", text: "Error updating course." });
      }
      setLoading(false);
      setConfirmOpen(false);
    };

    return (
      <div className="max-w-3xl mx-auto p-6">
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
        <Tabs>
          <Tab title="Title">
            <TitleForm initialData={details} courseId={details.id} />
          </Tab>

          <Tab title="Description">
            <DescriptionForm initialData={details} courseId={details.id} />
          </Tab>

          <Tab title="Pricing">
            <PriceForm initialData={details} courseId={details.id} />
          </Tab>

          <Tab title="Audio">
            <AudioForm initialData={details} courseId={details.id} />
          </Tab>

          <Tab title="Transcript">
            <TranscriptForm initialData={details} courseId={details.id} />
          </Tab>
        </Tabs>
      </div>
    );
  }
);

EditCourse.displayName = "EditCourse";

export default EditCourse;
