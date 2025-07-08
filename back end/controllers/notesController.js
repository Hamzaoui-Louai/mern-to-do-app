import notes from "../models/notes.js"

const CreateNote = async (req,res)=>{
    try
    {
    const {title,content} = req.body
    console.log(title)
        if(await notes.findOne({title:title}))
        {
            res.status(409).json({ message: "a note with the same title already exists"})
        }
        else
        {
        const newNote = new notes({ title, content });
        await newNote.save();
        res.status(201).json(newNote);
        console.log(`added the note ${content}`)
        }
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const UpdateNote = async (req,res)=>{
    try {
        const initialTitle = req.params.initialTitle
        const { title, content } = req.body;
        if (!title) {
            return res.status(400).json({ message: "Title is required." });
        }
        if (!content) {
            return res.status(400).json({ message: "Content is required." });
        }
    
        const updatedNote = await notes.findOneAndUpdate(
            { title : initialTitle},                
            { title : title ,content : content },     
            { new: true }       
        );
    
        if (!updatedNote) {
            return res.status(404).json({ message: "No note found." });
        }
    
        res.status(200).json(updatedNote);
    
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

const DeleteNote = async (req,res) => {
    try {
        const title = req.params.title
        if (await notes.findOne({title:title}))
        {
            await notes.deleteOne({title:title})
        }
        res.status(204)
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

export {CreateNote , UpdateNote , ReadNote , ReadAllNotes , DeleteNote}