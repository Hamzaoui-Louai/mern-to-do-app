import express from "express";
import { CreateNote ,ReadNote , ReadAllNotes ,UpdateNote , DeleteNote } from "../controllers/notesController.js";

const router = express.Router()

router.post("/",CreateNote)

router.put("/:initialTitle",UpdateNote)

router.get("/",ReadAllNotes)

router.get("/:title",ReadNote)

router.delete("/:title",DeleteNote)

export default router