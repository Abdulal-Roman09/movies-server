import { model, Schema } from "mongoose";
import { TMovie, TMovieMethods, TMovieModel } from "./movies.interface";
import { format } from "date-fns";
import slugify from "slugify";

const movieSchema = new Schema<TMovie, TMovieModel, TMovieMethods>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  releaseDate: { type: String, required: true },
  genre: { type: String, required: true },
  slug: { type: String },
  isDelete: { type: Boolean, default:false },
  viewCount: { type: Number, default: 0 },
  totalRating: { type: Number, default: 0 },
});
/* Way-2: Using pre hook middleware
     
     movieSchema.pre("save", async function (next) {
     const date = format(this.releaseDate, "dd-MM-yyyy");

  //creating slug
  this.slug = slugify(`${this.title}-${date}}`, {
  lower: true,
  });
   
next();
// }
);

*/

movieSchema.method("createSlug", function createSlug(payload: TMovie) {
  const dateFormatted = format(new Date(payload.releaseDate), "dd-MM-yyyy");
  const slug = slugify(`${payload.title}-${dateFormatted}`, { lower: true });
  return slug;
});

// export { reviewSchema, movieSchema };
export const Movie = model<TMovie, TMovieModel>("Movie", movieSchema);
