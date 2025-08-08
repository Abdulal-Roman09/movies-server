// movies.service.ts
import { TMovie } from "./movies.interface";
import { Movie } from "./movies.model";

const crateMovie = async (payload: TMovie) => {
  const result = await Movie.create(payload);
  return result;
};

const getAllMovies=async(payload:TMovie)=>{
  const result=await Movie.find()
}
const getMovieById=async (id:string)=>{
  const result =await Movie.findById(id)
  return result 
}

export const MovieService = {
  crateMovie,
  getAllMovies,
  getMovieById
};
