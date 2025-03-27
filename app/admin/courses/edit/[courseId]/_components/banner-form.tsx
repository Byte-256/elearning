"use client";

import { useState } from "react";
import { Input, Button, Alert, addToast } from "@heroui/react";
import { useForm } from "react-hook-form";
import { CourseProps, updateCourse } from "@/utils/course";
import { UploadButton } from "@/utils/uploadthing";
import { z } from "zod";
import { PlusCircle, Pencil, ImageIcon } from "lucide-react";
import Image from "next/image";
import { FileUpload } from "./file-upload";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  imageUrl: z.string().min(1, {
    message: "Image is required",
  }),
});

export const BannerForm = ({
  initialData,
  courseId,
}: {
  initialData: any;
  courseId: string;
}) => {
  const [loading, setLoading] = useState(false);
  const [bannerUrl, setBannerUrl] = useState(initialData.banner);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const router = useRouter();

  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => setIsEditing((current) => !current);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { banner: bannerUrl } });

  const onSubmit = async (data: { banner: string | undefined }) => {
    setLoading(true);
    const result = await updateCourse(courseId, data);

    if (result.success) {
      addToast({
        title: "Success",
        description: "Course price updated successfully!",
        color: "success",
      });
      setBannerUrl(data.banner);
      toggleEdit();
      router.refresh();
    } else {
      addToast({
        title: "error",
        description: "Failed to update price. Please try again.",
        color: "warning",
      });
    }

    setLoading(false);
  };

  return (
    <div className="mt-6 border bg-slate-100 rounded-md p-4 dark:bg-gray-800">
      <div className="font-medium flex items-center justify-between">
        Course image
        <Button onPress={toggleEdit} variant="ghost">
          {isEditing && <>Cancel</>}
          {!isEditing && !bannerUrl && (
            <>
              <PlusCircle className="h-4 w-4 mr-2" />
              Add an image
            </>
          )}
          {!isEditing && bannerUrl && (
            <>
              <Pencil className="h-4 w-4 mr-2" />
              Edit image
            </>
          )}
        </Button>
      </div>
      {!isEditing &&
        (!bannerUrl ? (
          <div className="flex items-center justify-center h-60 mt-3 bg-slate-200 rounded-md">
            <ImageIcon className="h-10 w-10 text-slate-500" />
          </div>
        ) : (
          <div className="relative aspect-video mt-2">
            <Image
              alt="Upload"
              fill
              className="object-cover rounded-md"
              src={bannerUrl}
            />
          </div>
        ))}
      {isEditing && (
        <div>
          <FileUpload
            endpoint="courseImage"
            onChange={(url) => {
              if (url) {
                onSubmit({ banner: url });
              }
            }}
          />
          <div className="text-xs text-muted-foreground mt-4">
            16:9 aspect ratio recommended
          </div>
        </div>
      )}
    </div>
  );
};
