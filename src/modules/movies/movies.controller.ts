import { Request, Response } from "express";
import { movieSchema } from "./movies.valadition";
import { MovieService } from "./movies.service";
import { Movie } from "./movies.model";

const createMovie = async (req: Request, res: Response) => {
  try {
    const moviesData = movieSchema.parse(req.body);
    const result = await MovieService.createMovie(moviesData);
    res.status(201).json({
      success: true,
      message: "Movie created successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error instanceof Error ? error.message : "Validation failed",
    });
  }
};

const getAllMovies = async (req: Request, res: Response) => {
  try {
    const searchTerm = req.query.searchTerm as string; // কুয়েরি থেকে নেওয়া
    const movies = await MovieService.getAllMovies(searchTerm); // সার্ভিসে পাঠানো

    res.status(200).json({
      success: true,
      message: "Movies fetched successfully",
      data: movies,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch movies",
      error: error instanceof Error ? error.message : error,
    });
  }
};


const getMovieBySlug = async (req: Request, res: Response) => {
  try {
    const { slug } = req.params;
    const movie = await MovieService.getMovieBySlug(slug);

    if (!movie) {
      return res.status(404).json({
        success: false,
        message: "Movie not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Movie fetched successfully",
      data: movie,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch movie",
      error: error instanceof Error ? error.message : error,
    });
  }
};

export const MovieController = {
  createMovie,
  getAllMovies,
  getMovieBySlug,
};
