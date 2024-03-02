"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";

import { generateUniqueId } from "@/utils/token";

import { AddCourseSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { db } from "@/lib/fb.config";
import { ref, set } from "firebase/database";

import { useForm } from "react-hook-form";
import { DialogFooter } from "@/components/ui/dialog";

interface AddCourseFormProps {}

const AddCourseForm = ({}: AddCourseFormProps) => {
  const handleSubmit = (values: z.infer<typeof AddCourseSchema>) => {
    // Logic to handle form submission (e.g., sending data to backend)
    // set(ref(db, `Courses/${generateUniqueId()}`), courseData);
    console.log("title :", values.title);
    console.log("description :", values.description);
    console.log("isFeatured :", values.isFeatured);
    let CourseRef = values.isFeatured
      ? ref(db, `FeaturedCourses/${generateUniqueId()}`)
      : ref(db, `Courses/${generateUniqueId()}`);
    set(CourseRef, { title: values.title, description: values.description });
    form.reset();
  };

  const form = useForm<z.infer<typeof AddCourseSchema>>({
    resolver: zodResolver(AddCourseSchema),
    defaultValues: {
      title: "",
      description: "",
      isFeatured: false,
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel
                htmlFor="title"
                className="text-sm font-medium text-gray-700"
              >
                Title
              </FormLabel>
              <FormControl>
                <Input
                  type="text"
                  id="title"
                  {...field}
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel
                htmlFor="description"
                className="text-sm font-medium text-gray-700"
              >
                Description
              </FormLabel>
              <FormControl>
                <textarea
                  id="description"
                  {...field}
                  rows={3}
                  className="p-1 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-2 border-gray-300 rounded-md"
                ></textarea>
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="isFeatured"
          render={({ field }) => (
            <FormItem className="flex items-center space-x-2">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
              </FormControl>
              <FormLabel
                htmlFor="isFeatured"
                className="text-sm font-medium text-gray-700"
              >
                Is Featured?
              </FormLabel>
            </FormItem>
          )}
        />
        <DialogFooter>
          <Button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit
          </Button>
        </DialogFooter>
      </form>
    </Form>
  );
};

export default AddCourseForm;
