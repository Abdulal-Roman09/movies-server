import { model, Schema } from "mongoose";
import { TMovie, TReviews } from "./movies.interface";

const reviewSchema = new Schema<TReviews>({
  email: { type: String, required: true },
  rating: { type: Number, required: true },
  comment: { type: String, required: true },
});

const movieSchema = new Schema<TMovie>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  releaseDate: { type: String, required: true },
  genre: { type: String, required: true },
  slug: { type: String, required: true },
  reviews: { type: [reviewSchema], required: true },  
  isDelete: { type: Boolean, required: true },
  viewCount: { type: Number, required: true },
});

// export { reviewSchema, movieSchema };
export const Movie=model<TMovie>("Movie",movieSchema)
