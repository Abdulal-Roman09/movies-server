import { model, Schema } from "mongoose";
import { TMovie, TReviews } from "./movies.interface";
import { format } from "date-fns";
import slugify from "slugify";
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

movieSchema.pre("save", function (next) {
  const dateFormatted = format(new Date(this.releaseDate), "dd-MM-yyyy");
  this.slug = slugify(`${this.title}-${dateFormatted}`, { lower: true });
  next();
});


// export { reviewSchema, movieSchema };
export const Movie = model<TMovie>("Movie", movieSchema);
