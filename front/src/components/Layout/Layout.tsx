import { Outlet } from "react-router-dom"
import SideBar from "../SideBar/SideBar";

const Layout = () => {
    return (
        <div>
            <SideBar routs={["chat", "account"]}/>
            <Outlet/>
        </div>
    )
}

export default Layout;