import { create } from "zustand";

const useNotesStore = create((get,set)=>({
    notes:
        [{title:"note1",content:"this is the first note in this to do list application that soon will be a personal assistant , again this is the first note in this to do list application that soon will be a personal assistant , again this is the first note in this to do list application that soon will be a personal assistant"}
        ,{title:"note2",content:"this is just another note"}
        ,{title:"note3",content:"this is just another note"}
        ,{title:"note4",content:"this is just another note"}
        ,{title:"note5",content:"this is just another note"}
        ]
    ,
    setNotes: (newNotes) => set({ notes: newNotes }),

    }
));

export default useNotesStore;