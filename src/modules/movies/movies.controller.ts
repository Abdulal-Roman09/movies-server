// movies.controller.ts
import { Request, Response } from "express";
import { movieSchema } from "./movies.valadition";
import { MovieService } from "./movies.service";
import { Movie } from "./movies.model";
import { success } from "zod";

const creatMovie = async (req: Request, res: Response) => {
  try {
    const moviesData = movieSchema.parse(req.body);
    const result = await MovieService.crateMovie(moviesData);
    res.status(201).json({
      success: true,
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
const getAllMovies = async (req: Request, res: Response) => {
  try {
    const movies = await Movie.find();
    res.status(200).json({
      success: true,
      message: " All movies Fetched Successfully",
      data: movies,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch movies",
      error: error instanceof Error ? error.message : error,
    });
  }
};
const getMovieById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const movie = await MovieService.getMovieById(id);

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
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch movie",
      error: error instanceof Error ? error.message : error,
    });
  }
};

export const MoviceController = {
  creatMovie,
  getAllMovies,
  getMovieById,
};
