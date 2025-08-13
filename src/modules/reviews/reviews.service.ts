import { Movie } from "../movies/movies.model";
import { TReviews } from "./reviews.interface";
import { Review } from "./reviews.model";

const addReview = async (
  slug: string,
  reviewData: Partial<TReviews>
): Promise<TReviews | any> => {
  const session = await Movie.startSession();

  const movie = await Movie.findOne({ slug });

  if (!movie) {
    throw new Error("Movie not found");
  }

  const review = await Review.create({
    movie: movie._id,
    ...reviewData,
  });
  const reviewsCount = await Review.countDocuments({ movie: movie._id });

  await Movie.updateOne({ slug }, { totalRating: reviewsCount }, );

  return review;
};

export const ReviewServices = {
  addReview,
  //   getAllReviews,
  //   getReviewById,
  //   updateReview,
  //   deleteReview,
};
