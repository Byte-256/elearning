import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
});

export const courseSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string().optional(),
  audioUrl: z.string().optional(),
  transcriptUrl: z.string().optional(),
  price: z.number(),
  createdAt: z.any(), // Firestore stores timestamp as an object
});

export const NewCourseSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().optional(),
});

export const ResetSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
});

export const RegisterSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(6, {
    message: "Minimum 6 characters required",
  }),
  name: z.string().min(1, {
    message: "Name is required",
  }),
});
