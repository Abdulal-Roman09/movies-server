import { model, Schema } from "mongoose";
import { TReviews } from "./reviews.interface";

const reviewSchema = new Schema<TReviews>({
  movie: { type: Schema.Types.ObjectId, ref: "movie", required: true },
  email: { type: String, required: true },
  rating: { type: Number, required: true },
  comment: { type: String, required: true },
});

export const Review = model<TReviews>("review", reviewSchema);
