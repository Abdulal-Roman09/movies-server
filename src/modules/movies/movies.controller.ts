// movies.controller.ts
import { Request, Response } from "express";
import { movieSchema } from "./movies.valadition";
import { MovieService } from "./movies.service";

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

export const MoviceController = {
  creatMovie,
};
