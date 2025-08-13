import { z } from "zod";


// Movie validation schema
export const movieSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  description: z.string().min(1, { message: "Description is required" }),
  releaseDate: z.string().min(1, { message: "Release date is required" }),
  genre: z.string().min(1, { message: "Genre is required" }),
  slug: z.string().optional(),
  isDelete: z.boolean().default(false),
  viewCount: z.number().optional().default(0),
});

