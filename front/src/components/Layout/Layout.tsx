import { Outlet } from "react-router-dom";
import SideBar from "../SideBar/SideBar";
import LayoutWrapper from "../../styled/LayoutWrapper/LayoutWrapper";

const Layout = () => {
  return (
    <LayoutWrapper>
      <SideBar routs={["chat", "account"]} />
      <Outlet />
    </LayoutWrapper>
  );
};

export default Layout;
