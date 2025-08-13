import express from "express";
import { MovieController } from "./movies.controller";
import { ReviewController } from "../reviews/reviews.controller";

const router = express.Router();

router.post("/", MovieController.createMovie);
router.get("/", MovieController.getAllMovies);
router.get("/:slug", MovieController.getMovieBySlug);
router.post("/:slug/review", ReviewController.addReview);
// router.get("/:slug/reviews", ReviewController.getAllReviews);
// router.put("/:slug/review", ReviewController.updateReview);
// router.delete("/:slug/review", ReviewController.deleteReview);

export const MovieRoutes = router;
