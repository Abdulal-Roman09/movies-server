import { Request, Response } from "express";
import { movieSchema } from "./movies.valadition";
import { MovieService } from "./movies.service";

const creatMovie = async (req: Request, res: Response) => {
  const parseData = movieSchema.parse(req.body);
  const reslut = await MovieService.crateMovie(parseData);
  res.status(201).json({
    success: true,
    data: reslut,
  });
};
export const MoviceController={
    creatMovie
}