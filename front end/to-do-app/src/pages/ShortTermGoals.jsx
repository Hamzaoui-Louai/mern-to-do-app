import { FaPlus } from "react-icons/fa6";
import { FaScrewdriverWrench } from "react-icons/fa6";
import { useEffect , useState } from "react";
import { Outlet } from "react-router";
import { FaCalendarWeek } from "react-icons/fa";
import { FaCalendarDay } from "react-icons/fa"

const DateAndTime = () => {
    const [now,setNow] = useState(new Date());
    
    useEffect(() => {
        const interval = setInterval(() => {
            setNow(new Date());
        }, 500);})

    return (
        <>
            {now.getHours()}:{now.getMinutes()}:{now.getSeconds()} | {now.getDate()}/{now.getMonth()+1}/{now.getFullYear()}
        </>
    )
}

const ShortTermGoals = () => {
    const [dailyGoals,setDailyGoals] = useState(true)
    
    return(
        <div className="h-screen bg-[#111111]">
            <div className="h-[100px] flex flex-row justify-between items-center">
                <h1 className="text-[#888888] text-[70px] ml-[45px] whitespace-nowrap">
                    Short term goals
                </h1>
                <div className="flex flex-row">
                    <button 
                    className="bg-[#888888] hover:bg-[#444444] hover:text-white transition-colors duration-100 rounded-[15px] h-[50px] w-[250px] text-[#111111] text-[20px] flex flex-row items-center justify-evenly mr-[25px] cursor-pointer"
                    onClick={()=>{}}
                    >
                        edit existing goals
                        <FaScrewdriverWrench/>
                    </button>
                    <button 
                    className="bg-[#888888] hover:bg-[#444444] hover:text-white transition-colors duration-100 rounded-[15px] h-[50px] w-[200px] text-[#111111] text-[20px] flex flex-row items-center justify-evenly mr-[50px] cursor-pointer"
                    onClick={()=>{}}
                    >
                        Add a new goal
                        <FaPlus/>
                    </button>
                </div>
            </div>
            <div className="h-[70px] flex flex-row justify-between items-center">
                <h1 className="text-[#888888] text-[45px] ml-[45px]">
                    <DateAndTime/>
                </h1>
                <button 
                    className="bg-[#888888] hover:bg-[#444444] hover:text-white transition-colors duration-100 rounded-[15px] h-[50px] w-[475px] text-[#111111] text-[20px] flex flex-row items-center justify-evenly mr-[50px] cursor-pointer"
                    onClick={()=>setDailyGoals(!dailyGoals)}
                    >
                        {dailyGoals ? "view you goals for this week instead" : "view your goals for this day instead"}
                        {dailyGoals ? <FaCalendarWeek/>:<FaCalendarDay/>}
                        
                    </button>
            </div>
            <hr className="border-[#888888] border-2 w-[calc(100%-100px)] mx-auto" />
            <Outlet />
        </div>
    )
}

export default ShortTermGoals;