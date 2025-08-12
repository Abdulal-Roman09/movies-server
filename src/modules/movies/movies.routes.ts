import express from "express";
import { MovieController } from "./movies.controller";

const router = express.Router();

router.post("/", MovieController.createMovie);
router.get("/", MovieController.getAllMovies);
// router.get("/:id", MovieController.getMovieById);
router.get("/:slug", MovieController.getMovieBySlug);

export const MovieRoutes = router;
