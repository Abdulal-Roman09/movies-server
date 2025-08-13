import { z } from "zod";
import { Types } from "mongoose";

export const ReviewValidationSchema = z.object({
  movie: z.string().refine((val) => Types.ObjectId.isValid(val), {
    message: "Invalid movie ObjectId",
  }),
  email: z.string().email({ message: "Invalid email address" }),
  rating: z
    .number()
    .min(1, { message: "Rating must be at least 1" })
    .max(5, { message: "Rating must be at most 5" }),
  comment: z
    .string()
    .min(1, { message: "Comment cannot be empty" })
    .max(500, { message: "Comment cannot exceed 500 characters" }),
});

