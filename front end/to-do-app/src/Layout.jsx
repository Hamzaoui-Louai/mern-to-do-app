import { Outlet } from "react-router";

import SideBar from "./components/SideBar.jsx"

const Layout = () => {

    return(
        <div className="flex flex-row flex-nowrap">
            <SideBar/>
            <div className="grow mr-[50px]">
                <Outlet />
            </div>
        </div>
    )
}

export default Layout 