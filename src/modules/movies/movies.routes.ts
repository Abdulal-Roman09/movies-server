import express  from "express"
import { MoviceController } from "./movies.controller"
const router=express.Router()

router.post('/',MoviceController.creatMovie)

router.get('/',MoviceController.getAllMovies)

router.get('/:id',MoviceController.getMovieById)

export const MovieRoutes=router