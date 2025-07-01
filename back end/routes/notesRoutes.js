import express from "express";
import { CreateNote ,ReadNote,UpdateNote} from "../controllers/notesController.js";

const router = express.Router()

router.post("/",CreateNote)

router.put("/",UpdateNote)

router.get("/",ReadNote)

export default router