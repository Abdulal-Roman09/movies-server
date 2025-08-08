// movies.service.ts
import { TMovie } from "./movies.interface";
import { Movie } from "./movies.model";

const crateMovie = async (payload: TMovie) => {
  const result = await Movie.create(payload);
  return result;
};

export const MovieService = {
  crateMovie,
};
