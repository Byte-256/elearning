"use client";

import { useState } from "react";
import { Button, Alert, addToast, Input} from "@heroui/react";
import { Form, useForm } from "react-hook-form";
import { updateCourse } from "@/utils/course";
import {
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Pencil } from "lucide-react";
import { isValid, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
// import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  price: z.coerce.number(),
});

export const PriceForm = ({
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
  } = useForm({ defaultValues: { price: initialData.price } });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      price: initialData?.price || undefined,
    },
  });
  const router = useRouter();

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (data: { price: number }) => {
    setLoading(true);
    const result = await updateCourse(courseId, data);
    if (result.success) {
      addToast({
        title: "Success",
        description: "Course price updated successfully!",
        color: "success",
      });
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

  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => setIsEditing((current) => !current);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(price);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-4">
      {/* {message && (
        <Alert
          variant="faded"
          className={`${
            message.type === "success" ? "bg-green-400/40" : "bg-red-400/40"
          } mb-2 `}
        >
          {message.text}
        </Alert>
      )} */}
      <Input
        label="Course Price"
        {...register("price", { required: true })}
        errorMessage={errors.price && "Price is required"}
        type="number"
        min={0}
      />
      <Button type="submit" isLoading={loading} color="primary" fullWidth>
        Save
      </Button>
    </form>
    // <div className="mt-6 border bg-slate-100 rounded-md p-4 dark:bg-gray-800">
    //   <div className="font-medium flex items-center justify-between">
    //     Course price
    //     <Button onPress={toggleEdit} variant="ghost">
    //       {isEditing ? (
    //         <>Cancel</>
    //       ) : (
    //         <>
    //           <Pencil className="h-4 w-4 mr-2" />
    //           Edit price
    //         </>
    //       )}
    //     </Button>
    //   </div>
    //   {!isEditing && (
    //     <p
    //       className={cn(
    //         "text-sm mt-2",
    //         !initialData.price && "text-slate-500 italic"
    //       )}
    //     >
    //       {initialData.price ? formatPrice(initialData.price) : "No price set"}
    //     </p>
    //   )}
    //   {isEditing && (
    //     <Form {...form}>
    //       <form
    //         onSubmit={form.handleSubmit(onSubmit)}
    //         className="space-y-4 mt-4"
    //       >
    //         <FormField
    //           control={form.control}
    //           name="price"
    //           render={({ field }) => (
    //             <FormItem>
    //               <FormControl>
    //                 <Input
    //                   type="number"
    //                   step="0.01"
    //                   disabled={isSubmitting}
    //                   placeholder="Set a price for your course"
    //                   {...field}
    //                 />
    //               </FormControl>
    //               <FormMessage />
    //             </FormItem>
    //           )}
    //         />
    //         <div className="flex items-center gap-x-2">
    //           <Button disabled={!isValid || isSubmitting} type="submit">
    //             Save
    //           </Button>
    //         </div>
    //       </form>
    //     </Form>
    //   )}
    // </div>
  );
};
