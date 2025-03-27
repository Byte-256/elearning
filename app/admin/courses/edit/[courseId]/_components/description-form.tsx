"use client";

import { useState } from "react";
import { Textarea, Button, Alert, addToast } from "@heroui/react";
import { useForm, FormProvider } from "react-hook-form";
import { updateCourse } from "@/utils/course";
import {
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Pencil } from "lucide-react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Preview } from "./preview";
import { Editor } from "./editor";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  description: z.string().min(1, {
    message: "Description is required",
  }),
});

export const DescriptionForm = ({
  initialData,
  courseId,
}: {
  initialData: any;
  courseId: string;
}) => {
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);
  const router = useRouter();

  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => setIsEditing((current) => !current);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      description: initialData?.description || "",
    },
  });

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (data: { description: string }) => {
    const result = await updateCourse(courseId, data);

    if (result.success) {
      addToast({
        title: "Success",
        description: "Course description updated successfully!",
        color: "success",
      });
      toggleEdit();
      router.refresh();
    } else {
      addToast({
        title: "Error",
        description: "Failed to update description. Please try again.",
        color: "warning",
      });
    }
  };

  return (
    <>
      <div className="mt-6 border bg-slate-100 rounded-md p-4 dark:bg-gray-800">
        {message && (
          <Alert
            variant="faded"
            className={`${
              message.type === "success" ? "bg-green-400/40" : "bg-red-400/40"
            } mb-2 ${setTimeout(() => {
              "hidden";
            }, 3000)}`}
          >
            {message.text}
          </Alert>
        )}
        <div className="font-medium flex items-center justify-between">
          Course description
          <Button onPress={toggleEdit} variant="ghost">
            {isEditing ? (
              <>Cancel</>
            ) : (
              <>
                <Pencil className="h-4 w-4 mr-2" />
                Edit description
              </>
            )}
          </Button>
        </div>

        {!isEditing && (
          <div className="text-sm mt-2 text-slate-500 italic">
            {!initialData.description ? (
              "No description"
            ) : (
              <Preview value={initialData.description} />
            )}
          </div>
        )}

        {isEditing && (
          <FormProvider {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4 mt-4"
            >
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Editor {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex items-center gap-x-2">
                <Button disabled={!isValid || isSubmitting} type="submit">
                  Save
                </Button>
              </div>
            </form>
          </FormProvider>
        )}
      </div>
    </>
  );
};
