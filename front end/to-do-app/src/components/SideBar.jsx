import { useState } from "react";
import { NavLink } from "react-router";

const SideBarLink = ({link,title}) => {
    return (
        <>
            <NavLink className={({isActive})=>`w-[90%] h-[80px] mx-auto rounded-[20px] text-white text-[60px] ${isActive ? "bg-[#090909]" : "bg-[#111111]"}`} to={link}>
                {title}
            </NavLink>
        </>
    )
}

const SideBar = () => {
    const [menuExtended,setMenuExtended] = useState(false);
    const navLinksList = [{link : "/notes", title : "notes"}]

    return(
        <div onMouseLeave={()=>{if(menuExtended){setMenuExtended(false)}}} onClick={()=>{if(!menuExtended){setMenuExtended(true)}}} className={`${menuExtended ? "w-[550px]":"w-[50px]"} h-screen transition-[width] duration-500 flex flex-row`}>   
            <div className="grow bg-[#111111]">
                {navLinksList.map((item, index)=>{return(
                    <div className={`${menuExtended ? "" : "hidden"}`}>
                        <SideBarLink key={index} link={item.link} title={item.title}/>
                    </div>
                )})}
            </div>
            <div className="w-[50px] h-full group">
                <div className={`bg-gradient-to-r from-[#111111] to-[#090909] w-0 h-full ${menuExtended ? "" : "group-hover:w-[50px] cursor-pointer"} transition-[width] duration-300`}></div>
            </div>
        </div>
    )
}

export default SideBar