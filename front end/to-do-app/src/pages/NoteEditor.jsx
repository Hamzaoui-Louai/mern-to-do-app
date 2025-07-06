import { useParams } from "react-router"
import { useState } from "react";
import { FaSave } from "react-icons/fa";
import useNotesStore from "../stores/notesStore";

const noteWithTitleExists = (title) => {
    const notes = useNotesStore((state) => state.notes)
    const NoteContent = notes.find((note)=> note.title === title)
    return NoteContent === undefined ? false : true
}

const findNoteContentByTitle = (title) => {
    const notes = useNotesStore((state) => state.notes)
    const NoteContent = notes.find((note)=> note.title === title)?.content
    return NoteContent || ""
}

const NoteEditor = () => {
    const {initialTitle} = useParams();
    const [title,setTitle] = useState(initialTitle)
    const initialContent = findNoteContentByTitle(title)        
    const [content,setContent] = useState(initialContent)

    return(
        <div className="h-screen bg-[#111111]">
            <div className="h-[100px] flex flex-row justify-between items-center">
                <input 
                    onChange={(e)=>{setTitle(e.target.value)}}
                    className="text-[#888888] text-[70px] ml-[45px] grow border-none bg-transparent outline-none focus:outline-none"
                    value={title} 
                    type="text"
                />
                <button 
                className="bg-[#888888] hover:bg-[#44CC44] hover:text-white transition-colors duration-100 rounded-[15px] h-[50px] w-[200px] text-[#111111] text-[20px] flex flex-row items-center justify-evenly mr-[50px] cursor-pointer">
                    Save your note
                    <FaSave />
                </button>
            </div>
            <hr className="border-[#888888] border-2 w-[calc(100%-100px)] mx-auto" />
            <textarea value={content} placeholder="this note is pretty empty buddy ¯\_(ツ)_/¯" onChange={(e)=>{setContent(e.target.value)}} className="w-[calc(100%-100px)] m-[50px] h-[calc(100%-200px)] text-[20px] text-white border-none bg-transparent p-0 outline-none resize-none shadow-none">
            </textarea>
        </div>
    )
}

export default NoteEditor