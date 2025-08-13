import { ObjectId } from "mongoose";

export type TReviews = {
  movie: ObjectId;
  email: string;
  rating: number;
  comment: string;
};
