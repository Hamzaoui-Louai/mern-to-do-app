import express from "express";
import { CreateNote ,ReadNote , ReadAllNotes ,UpdateNote} from "../controllers/notesController.js";

const router = express.Router()

router.post("/",CreateNote)

router.put("/:initialTitle",UpdateNote)

router.get("/",ReadAllNotes)

router.get("/:title",ReadNote)

export default router