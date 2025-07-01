import notes from "../models/notes.js"

const CreateNote = async (req,res)=>{
    try
    {
    const {content} = req.body
        const newNote = new notes({ content });
        await newNote.save();
        res.status(201).json(newNote);
        console.log(`added the note ${content}`)
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const UpdateNote = async (req,res)=>{
    try {
        const { content } = req.body;
        if (!content) {
            return res.status(400).json({ message: "Content is required." });
        }
    
        const updatedNote = await notes.findOneAndUpdate(
            {},                
            { content },     
            { new: true }       
        );
    
        if (!updatedNote) {
            return res.status(404).json({ message: "No note found." });
        }
    
        res.json(updatedNote);
    
        } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

const ReadNote = async (req,res) =>{
    try {
        const todos = await notes.find();
        res.json(todos);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

export {CreateNote , UpdateNote , ReadNote}