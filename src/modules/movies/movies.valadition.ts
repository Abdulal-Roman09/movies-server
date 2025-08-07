import { z } from "zod";

// Review validation schema
export const reviewSchema = z.object({
  email: z.string().email({ message: "Please provide a valid email address" }),
  rating: z
    .number()
    .min(0, { message: "Rating must be at least 0" })
    .max(5, { message: "Rating cannot be more than 5" }),
  comment: z.string().min(1, { message: "Comment is required" }),
});

// Movie validation schema
export const movieSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  description: z.string().min(1, { message: "Description is required" }),
  releaseDate: z.string().min(1, { message: "Release date is required" }),
  genre: z.string().min(1, { message: "Genre is required" }),
  slug: z.string().min(1, { message: "Slug is required" }),
  reviews: z
    .array(reviewSchema)
    .min(1, { message: "At least one review is required" }),
  isDelete: z.boolean(),
  viewCount: z.number().min(0, { message: "View count must be at least 0" }),
});
