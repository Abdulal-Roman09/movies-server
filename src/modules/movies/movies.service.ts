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
const getAllMovies = async (payload: Record<string, unknown>) => {
  let searchTerm = "";
  if (payload?.searchTerm) {
    searchTerm = payload.searchTerm as string;
  }
  const searchableFields = ["title", "genre"];

  let query = {
    $or: searchableFields.map((field) => ({
      [field]: { $regex: searchTerm, $options: "i" },
    })),
  };
  // filtering part
  const queryObj={...payload}
const excludeFields=["searchTerm"]
excludeFields.forEach((e)=>delete queryObj[e])
const result=await Movie.find(queryObj)
const finalObj={...queryObj,...(searchTerm?query:)}   
  return finalObj;
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
