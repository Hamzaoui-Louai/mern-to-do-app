import { useState } from "react";
import { MdOutlineArrowLeft } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";

const SideBar = () => {
    const [menuExtended,setMenuExtended] = useState(false);

    return(
        <div className={`h-screen transition-[width] relative duration-500 ${menuExtended ? 'w-[20%]' : 'w-0'}`}>            
            <div className="absolute right-0 w-full h-full bg-[#222222] z-3 flex flex-col">
            {
                menuExtended ? (
                <div 
                onClick={
                    () => {
                        setMenuExtended(!menuExtended);
                    }
                }
                className="h-[75px] w-[90%] m-[5%] group rounded-[15px] bg-[#222222] hover:bg-[#111111] transition-colors duration-200 flex flex-row gap-[7px] p-[5%] items-center cursor-pointer">
                    <GiHamburgerMenu size={40} className="transition-all duration-200 text-black group-hover:text-white"/>
                    <h1 className="text-[38px] transition-all duration-200 text-black group-hover:text-white">
                        Menu
                    </h1>
                </div>)
                :
            null
            }
            </div>
            
            <div class="flex flex-col justify-center relative group h-full shadow-md transition-all duration-300">
                    <div
                    onClick={
                        () => {
                            setMenuExtended(!menuExtended);
                        }
                    }
                    className="w-[30px] h-[50px] rounded-r-[15px] bg-[#222222] cursor-pointer relative">
                        <MdOutlineArrowLeft className="absolute left-[-12px] top-[0px] size-[50px] z-2"/>
                    </div>
                    <div class="pointer-events-none absolute inset-y-0 -right-12 w-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-[#222222] to-transparent"></div>
                </div>
        </div>
    )
}

export default SideBar