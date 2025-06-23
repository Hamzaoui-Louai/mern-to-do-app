import { Outlet } from "react-router";

import SideBar from "./components/SideBar.jsx"

const Layout = () => {

    return(
        <>
            <SideBar/>
            <Outlet />
        </>
    )
}

export default Layout