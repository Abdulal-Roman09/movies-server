import { Movie } from "../movies/movies.model";
import { TReviews } from "./reviews.interface";
import { Review } from "./reviews.model";

const addReview = async (
  slug: string,
  reviewData: Partial<TReviews>
): Promise<TReviews> => {
  const session = await Movie.startSession();

  try {
    const movie = await Movie.findOne({ slug }).session(session);
    if (!movie) {
      throw new Error("Movie not found");
    }

    session.startTransaction();

    const review = await Review.create(
      [
        {
          movie: movie._id,
          ...reviewData,
        },
      ],
      { session }
    );

    const reviewsCount = await Review.countDocuments({ movie: movie._id });
    await Movie.updateOne({ slug }, { totalRating: reviewsCount }).session(
      session
    );

    await session.commitTransaction();
    return review[0];
  } catch (error) {
    await session.abortTransaction();
    throw error;
  } finally {
    session.endSession();
  }
};

export const ReviewServices = {
  addReview,
};
