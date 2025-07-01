import { useState , useEffect } from "react";
import { NavLink } from "react-router";

const SideBarLink = ({link,title}) => {
    return (
        <>
            <NavLink className={({isActive})=>`flex items-center px-[15px] w-full h-[60px] rounded-[20px] text-[30px] ${isActive ? "bg-[#090909] text-[#888888]" : "bg-[#111111] text-[#AAAAAA]"}`} to={link}>
                {title}
            </NavLink>
        </>
    )
}

const SideBar = () => {
    const [menuExtended,setMenuExtended] = useState(false);
    const [showList,setShowList] = useState(false);
    const navLinksList = [{link : "/", title : "notes"},{link : "/daily-tasks", title : "daily tasks"}]

    return(
        <div 
        onMouseLeave={()=>{if(menuExtended){setMenuExtended(false);setShowList(false)}}} 
        onClick={()=>{if(!menuExtended){setMenuExtended(true);setTimeout(()=>{setShowList(true)},300)}}} 
        className={`${menuExtended ? "w-[350px]":"w-[50px]"} h-screen transition-[width] duration-500 flex flex-row`}
        >   
            <div className="grow bg-[#111111]">
                <div className={`${showList ? "" : "hidden"} w-full p-[5%]`}>
                {navLinksList.map((item, index)=>{return(
                        <SideBarLink key={index} link={item.link} title={item.title}/>
                )})}
                </div>
            </div>
            <div className="w-[50px] h-full group">
                <div className={`bg-gradient-to-r from-[#111111] to-[#090909] w-0 h-full ${menuExtended ? "" : "group-hover:w-[50px] cursor-pointer"} transition-[width] duration-300`}></div>
            </div>
        </div>
    )
}

export default SideBar