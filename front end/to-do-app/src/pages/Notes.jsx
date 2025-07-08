import { FaPlus } from "react-icons/fa6";
import { FaPen } from "react-icons/fa";
import { FaTrash } from "react-icons/fa6";
import { useNavigate } from "react-router";
import { useMutation, useQuery,useQueryClient } from "@tanstack/react-query";
import { getRequest,deleteRequest } from "../api/axiosRequests";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";


const Note = ({title,content}) =>{
    const Navigate = useNavigate();
    const [deleted,setDeleted] = useState(false)

    const queryClient = useQueryClient();

    const deleteNote = useMutation({
        mutationFn:()=>{deleteRequest(`/api/notes/${title}`)},
        onSuccess:()=>{
            setDeleted(true)
            toast.success("successfully deleted the note")
            setTimeout(()=>{queryClient.invalidateQueries('notesList')},600)
        },
        onError:(error)=>{
            toast.error(error.message)
        }
    })

    return(
        <div className={`flex flex-row text-[#888888] text-[30px] ${(deleted)?"h-0":"h-[60px]"} transtion-[height] delay-100 duration-500 justify-between items-center relative`}>
            {
            (deleted)?
            <div className="bg-red-600 w-full h-full"></div>
            :
            <>
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
                    <FaTrash 
                    onClick={()=>{deleteNote.mutate()}}
                    className="cursor-pointer hover:text-[#C01010] transition-colors duration-300"/>
                </div>
                <div className="h-full w-[80px] bg-gradient-to-l from-[#111111] to-[#11111100] absolute right-[75px]">
                </div>
            </>
            }
        </div>
    )
}

const Notes = () =>{
    const Navigate = useNavigate();

    const {data : notesList , error , isLoading , isError} = useQuery({
        queryKey : ['notesList'],
        queryFn : () => getRequest("/api/notes"),
    })

    const [notes,setNotes] = useState([])

    useEffect(()=>{
            if(isError)
            {
                toast.error(error?.message)
                return;
            }
            if(notesList)
            {
                setNotes(notesList.data)
            }
    },[notesList,isLoading,isError])

    return (
        <div className="h-screen bg-[#111111]">
            <div className="h-[100px] flex flex-row justify-between items-center">
                <h1 className="text-[#888888] text-[70px] ml-[45px]">
                    Notes
                </h1>
                <button 
                className="bg-[#888888] hover:bg-[#444444] hover:text-white transition-colors duration-100 rounded-[15px] h-[50px] w-[200px] text-[#111111] text-[20px] flex flex-row items-center justify-evenly mr-[50px] cursor-pointer"
                onClick={()=>Navigate("/notes/new_note")}
                >
                    Add a new note
                    <FaPlus />
                </button>
            </div>
            <list>
                {
                (isLoading) ?
                <h1 className="text-[#888888] text-[20px] ml-[50px]">
                    loading the notes
                </h1>
                :
                (isError) ? 
                ""
                :
                notes?.map((note, index) => {
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