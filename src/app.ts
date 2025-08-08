// app.ts
import express, { Request, Response } from "express";
import { MovieRoutes } from "./modules/movies/movies.routes";

const app = express();

// parsers
app.use(express.json());

// Routes
app.use("/api/movies", MovieRoutes);

// Root route
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
