import express  from "express"
import { MoviceController } from "./movies.controller"
const router=express.Router()

router.post('/',MoviceController.creatMovie)

export const MovieRoutes=router