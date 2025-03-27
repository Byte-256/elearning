"use client";

import { useState } from "react";
import { Input, Button, Alert, Card, addToast } from "@heroui/react";
import { useForm } from "react-hook-form";
import { updateCourse } from "@/utils/course";
import { Pencil } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  title: z.string().min(1, {
    message: "Title is required",
  }),
});

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

  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => setIsEditing((current) => !current);

  const onSubmit = async (data: { title: string }) => {
    setLoading(true);
    const result = await updateCourse(courseId, data);
    if (result.success) {
      setMessage({
        type: "success",
        text: "Course title updated successfully!",
      });
      addToast({
        title: "success",
        description: "Course title updated successfully!",
        color: "success",
      });
      toggleEdit();
      router.refresh();
    } else {
      setMessage({
        type: "error",
        text: "Failed to update title. Please try again.",
      });
      addToast({
        title: "error",
        description: "Failed to update title. Please try again.",
        color: "warning",
      });
    }
    setLoading(false);
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData,
  });

  const { isSubmitting, isValid } = form.formState;

  return (
    // <form
    //   onSubmit={handleSubmit(onSubmit)}
    //   className="mt-4 space-y-4 p-4 w-3/4 lg:w-screen lg:max-w-2xl"
    // >
    //   {message && (
    //     <Alert
    //       variant="faded"
    //       className={`${
    //         message.type === "success" ? "bg-success-400" : "bg-warning-400"
    //       } mb-2 `}
    //     >
    //       {message.text}
    //     </Alert>
    //   )}

    //   <Input
    //     label="Course Title"
    //     {...register("title", { required: true })}
    //     errorMessage={errors.title && "Title is required"}
    //   />
    //   <Button type="submit" isLoading={loading} color="primary">
    //     Save
    //   </Button>
    // </form>
    <div className="mt-6 bg-slate-100 rounded-md p-4 dark:bg-gray-800">
      <div className="font-medium flex items-center justify-between">
        Course Title
        <Button onPress={toggleEdit} variant="ghost">
          {isEditing ? (
            <>Cancel</>
          ) : (
            <>
              <Pencil className="h-4 w-4 mr-2" />
              Edit title
            </>
          )}
        </Button>
      </div>
      {!isEditing && (
        <p className="text-sm mt-2 dark:text-gray-300">{initialData?.title}</p>
      )}
      {isEditing && (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 mt-4 dark:text-gray-300"
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      disabled={isSubmitting}
                      placeholder="e.g. 'English - The Introduction'"
                      {...field}
                    />
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
        </Form>
      )}
    </div>
  );
};
