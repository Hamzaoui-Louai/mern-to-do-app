import { useParams } from "react-router"
import { useEffect, useState } from "react";
import { FaSave } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { toast } from "react-toastify";
import { getRequest , postRequest , putRequest } from "../api/axiosRequests";
import { useQuery , useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";

const NoteEditor = () => {
    const Navigate = useNavigate()

    const {initialTitle} = useParams();
    const [title,setTitle] = useState(initialTitle)    
    
    const [content,setContent] = useState("loading the note for the goat")
    
    const { data : initialContent , error , isLoading , isError } = useQuery({
        queryKey: ["notes" , initialTitle],
        queryFn: () => getRequest(`/api/notes/${initialTitle}`),
        enabled : initialTitle != "new_note",
        refetchOnWindowFocus: false,
        staleTime: Infinity,    
    })

    const newNote = useMutation({
        mutationFn : ()=>{ return postRequest("/api/notes",{title:title,content:content})},
        onSuccess :()=>{
            toast.success("your note has been created")
            //Navigate(`/notes/${title}`)
        },
        onError :(error)=>{
            toast.error(error?.message)
        },

        })
    
    const editNote = useMutation({
            mutationFn : ()=>{ return putRequest(`/api/notes/${initialTitle}`,{title:title,content:content})},
            onSuccess :()=>{
                toast.success("your progress has been saved")
            },
            onError :(error)=>{
                toast.error(error?.message)
            }
            })

    const handleSave = () => {
        if(title === "")
        {
            toast.error("dude the note has no title")
        }
        else if(content === "")
        {
            toast.error("the note is still empty buddy ¯\\_(ツ)_/¯")
        }
        else
        {
            if(initialTitle === "new_note")
            {
                newNote.mutate()
            }
            else
            {
                editNote.mutate()
            }
        }
    } 

    useEffect(()=>{
        if(isLoading)
        {
            setContent("loading the note for the goat")
            return;
        }
        if(isError)
        {
            setContent("")
            toast.error(error.message)
            return;
        }
        if(initialContent)
        {
            console.log(initialContent)
            setContent(initialContent?.data?.content)
        }
    },[isLoading,initialContent,isError])
    
    useEffect(()=>{
        if(initialTitle === "new_note")
        {
            setTitle("");
            setContent("");
        }
    },[initialTitle])


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
                className={`${(editNote.isPending || newNote.isPending) ? "bg-[#22AA22] text-[#AAAAAA] cursor-wait":"bg-[#888888] text-[#111111] hover:bg-[#44CC44] hover:text-white transition-colors duration-100 cursor-pointer"} rounded-[15px] h-[50px] w-[200px] text-[20px] flex flex-row items-center justify-evenly mr-[50px]`}
                onClick={()=>{handleSave()}}
                >
                    {
                    (editNote.isPending || newNote.isPending) ?
                    "loading"
                    :
                    (initialTitle == "new_note")?
                        <>
                            Add a new note
                            <FaPlus />
                        </>
                        :
                        <>
                            Save your note
                            <FaSave />
                        </>
                        }
                </button>
            </div>
            <hr className="border-[#888888] border-2 w-[calc(100%-100px)] mx-auto" />
            <textarea value={content} placeholder="this note is pretty empty buddy ¯\_(ツ)_/¯" onChange={(e)=>{setContent(e.target.value)}} className="w-[calc(100%-100px)] m-[50px] h-[calc(100%-200px)] text-[20px] text-white border-none bg-transparent p-0 outline-none resize-none shadow-none">
            </textarea>
        </div>
    )
}

export default NoteEditor