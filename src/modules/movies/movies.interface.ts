import { Model } from "mongoose";


export type TMovie = {
  title: string;
  description: string;
  releaseDate: string;
  genre: string;
  isDelete: boolean;
  viewCount: number;
  totalRating: number;
  slug: string;
};

export type TMovieMethods = {
  createSlug(payload: TMovie): string;
};
export type TMovieModel = Model<TMovie, Record<string, unknown>, TMovieMethods>;
