export type TReviews = {
  email: string;
  rating: number;
  comment: string;
};

export type TMovie = {
  title: string;
  description: string;
  releaseDate: string;
  genre: string;
  isDelete: boolean;
  viewCount: Number;
  reviews: TReviews[];
  slug: string;
};
