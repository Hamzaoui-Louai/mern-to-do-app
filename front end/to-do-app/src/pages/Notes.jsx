import { FaPlus } from "react-icons/fa6";
import { FaPen } from "react-icons/fa";
import { FaTrash } from "react-icons/fa6";
import { useNavigate } from "react-router";

const dummyNotes = 
    [{title:"note1",content:"this is the first note in this to do list application that soon will be a personal assistant , again this is the first note in this to do list application that soon will be a personal assistant , again this is the first note in this to do list application that soon will be a personal assistant"}
    ,{title:"note2",content:"this is just another note"}
    ,{title:"note3",content:"this is just another note"}
    ,{title:"note4",content:"this is just another note"}
    ,{title:"note5",content:"this is just another note"}]

const Note = ({title,content}) =>{
    const Navigate = useNavigate();

    return(
        <div className="flex flex-row text-[#888888] text-[30px] h-[60px] justify-between items-center relative">
            <div className="flex flex-row gap-3 text-[20px] h-[20px] mx-[10px]">
                <h1>
                    {title}
                </h1>
                <h3 className="overflow-hidden h-[30px]">
                    {content}
                </h3>
            </div>
            <div className="flex flex-row gap-3 text-[20px] h-[20px] mx-[10px]">
                <FaPen 
                onClick={()=>{Navigate(`/notes/${title}`)}} 
                className="cursor-pointer hover:text-white transition-colors duration-300"/>
                <FaTrash className="cursor-pointer hover:text-[#C01010] transition-colors duration-300"/>
            </div>
            <div className="h-full w-[80px] bg-gradient-to-l from-[#111111] to-[#11111100] absolute right-[75px]">
            </div>
        </div>
    )
}

const Notes = () =>{
    return (
        <div className="h-screen bg-[#111111]">
            <div className="h-[100px] flex flex-row justify-between items-center">
                <h1 className="text-[#888888] text-[70px] ml-[45px]">
                    Notes
                </h1>
                <button 
                className="bg-[#888888] hover:bg-[#444444] hover:text-white transition-colors duration-100 rounded-[15px] h-[50px] w-[200px] text-[#111111] text-[20px] flex flex-row items-center justify-evenly mr-[50px] cursor-pointer">
                    Add a new note
                    <FaPlus />
                </button>
            </div>
            <list>
                {dummyNotes.map((note, index) => {
                    return(
                        <ul className="mx-[50px]" key={index}>
                            <hr className="border-[#888888] mx-auto border-2 w-full"/>
                            <Note title={note.title} content={note.content}/>
                        </ul>
                    )
                })}
            </list>
        </div>
    );
}

export default Notes;