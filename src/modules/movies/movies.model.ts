import { model, Schema } from "mongoose";
import {
  TMovie,
  TMovieMethods,
  TMovieModel,
  TReviews,
} from "./movies.interface";
import { format } from "date-fns";
import slugify from "slugify";
const reviewSchema = new Schema<TReviews>({
  email: { type: String, required: true },
  rating: { type: Number, required: true },
  comment: { type: String, required: true },
});

const movieSchema = new Schema<TMovie, TMovieModel, TMovieMethods>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  releaseDate: { type: String, required: true },
  genre: { type: String, required: true },
  slug: { type: String, required: true },
  reviews: { type: [reviewSchema], required: true },
  isDelete: { type: Boolean, required: true },
  viewCount: { type: Number, required: true },
});

// movieSchema.pre("save", function (next) {
//   const dateFormatted = format(new Date(this.releaseDate), "dd-MM-yyyy");
//   this.slug = slugify(`${this.title}-${dateFormatted}`, { lower: true });
//   next();
// });
movieSchema.method("createSlug", function createSlug(payload: TMovie) {
  const dateFormatted = format(new Date(payload.releaseDate), "dd-MM-yyyy");
  const slug = slugify(`${payload.title}-${dateFormatted}`, { lower: true });
  return slug;
});

// export { reviewSchema, movieSchema };
export const Movie = model<TMovie, TMovieModel>("Movie", movieSchema);
