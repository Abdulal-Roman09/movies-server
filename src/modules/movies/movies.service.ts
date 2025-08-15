// movies.service.ts
import { TMovie } from "./movies.interface";
import { Movie } from "./movies.model";

// Create a new movie
const createMovie = async (payload: TMovie) => {
  const result = new Movie(payload);
  const slug = result.createSlug(payload); // assuming createSlug is a method on the model
  result.slug = slug;
  await result.save();
  return result;
};

// Get all movies with optional search
const getAllMovies = async (searchTerm?: string) => {
  const searchableFields = ["title", "genre"];

  let query = {};
  if (searchTerm) {
    query = {
      $or: searchableFields.map((field) => ({
        [field]: { $regex: searchTerm, $options: "i" },
      })),
    };
  }

  return await Movie.find(query);
};

// Get a movie by its slug
const getMovieBySlug = async (slug: string) => {
  return await Movie.findOne({ slug });
};

export const MovieService = {
  createMovie,
  getAllMovies,
  getMovieBySlug,
};
