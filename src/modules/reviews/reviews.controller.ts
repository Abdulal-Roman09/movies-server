import { Request, Response } from "express";
import { ReviewValidationSchema } from "./reviews.validation"; // Zod validation
import { ReviewServices } from "./reviews.service";

const addReview = async (req: Request, res: Response) => {
  try {
    const { slug } = req.params;
    const reviewData = req.body;
    const result = await ReviewServices.addReview(slug, reviewData);

    res.status(201).json({
      success: true,
      message: "Review created successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error instanceof Error ? error.message : "Validation failed",
    });
  }
};

// const getAllReviews = async (_req: Request, res: Response) => {
//   try {
//     const reviews = await ReviewService.getAllReviews();
//     res.status(200).json({
//       success: true,
//       message: "All reviews fetched successfully",
//       data: reviews,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: "Failed to fetch reviews",
//       error: error instanceof Error ? error.message : error,
//     });
//   }
// };

// const getReviewById = async (req: Request, res: Response) => {
//   try {
//     const { slug } = req.params;
//     const review = await ReviewService.getReviewBySlug(slug);

//     if (!review) {
//       return res.status(404).json({
//         success: false,
//         message: "Review not found",
//       });
//     }

//     res.status(200).json({
//       success: true,
//       message: "Review fetched successfully",
//       data: review,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: "Failed to fetch review",
//       error: error instanceof Error ? error.message : error,
//     });
//   }
// };

// const updateReview = async (req: Request, res: Response) => {
//   try {
//     const { slug } = req.params;
//     const validatedData = ReviewValidationSchema.partial().parse(req.body);

//     const result = await ReviewService.updateReview(slug, validatedData);

//     if (!result) {
//       return res.status(404).json({
//         success: false,
//         message: "Review not found",
//       });
//     }

//     res.status(200).json({
//       success: true,
//       message: "Review updated successfully",
//       data: result,
//     });
//   } catch (error: any) {
//     res.status(400).json({
//       success: false,
//       message: error instanceof Error ? error.message : "Update failed",
//     });
//   }
// };

// const deleteReview = async (req: Request, res: Response) => {
//   try {
//     const { slug } = req.params;
//     const result = await ReviewService.deleteReview(slug);

//     if (!result) {
//       return res.status(404).json({
//         success: false,
//         message: "Review not found",
//       });
//     }

//     res.status(200).json({
//       success: true,
//       message: "Review deleted successfully",
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: "Failed to delete review",
//       error: error instanceof Error ? error.message : error,
//     });
//   }
// };

export const ReviewController = {
  addReview,
  // getAllReviews,
  // getReviewById,
  // updateReview,
  // deleteReview,
};
