import notes from "../models/notes.js"

const CreateNote = async (req,res)=>{
    try
    {
    const {title,content} = req.body
        const newNote = new notes({ title, content });
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
        const title = req.params.title
        console.log(title)
        const note = await notes.findOne({title:title},{ content : 1 , _id : 0});        
        note ? 
        res.json(note) :
        res.status(404).json({ message: "No note found." });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

const ReadAllNotes = async (req,res) => {
    try {
        const notesList = await notes.find({},{ title : 1, content : 1 , _id : 0});        
        notesList ? 
        res.json(notesList) :
        res.status(404).json({ message: "No notes found." });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}



export {CreateNote , UpdateNote , ReadNote , ReadAllNotes }