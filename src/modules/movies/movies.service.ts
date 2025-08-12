import { TMovie } from "./movies.interface";
import { Movie } from "./movies.model";

const createMovie = async (payload: TMovie) => {
  // const result = await Movie.create(payload);
  const result = new Movie(payload);
  const slug = result.createSlug(payload);
  result.slug = slug;
  result.save();

  return result;
};

const getAllMovies = async () => {
  return await Movie.find();
};

const getMovieBySlug = async (slug: string) => {
  return await Movie.findOne({ slug });
};

export const MovieService = {
  createMovie,
  getAllMovies,
  getMovieBySlug,
};
