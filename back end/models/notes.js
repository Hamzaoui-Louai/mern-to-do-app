import mongoose from "mongoose";

const notesSchema = new mongoose.Schema({
    content:{type: String, required: true}
})

export default mongoose.model('notes',notesSchema)