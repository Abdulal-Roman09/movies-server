import slugify from "slugify";
import { TMovie } from "./movies.interface";
import { Movie } from "./movies.model";
import { format } from "date-fns";

const createMovie = async (payload: TMovie) => {
  const dateFormatted = format(new Date(payload.releaseDate), "dd-MM-yyyy");
  const slug = slugify(`${payload.title}-${dateFormatted}`, { lower: true });

  const result = await Movie.create({ ...payload, slug });
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
