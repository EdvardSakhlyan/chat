import { FC } from "react";
import { NavLink } from "react-router-dom";
import SideBarWrapper from "../../styled/SideBarWrapper/SideBarWrapper";

interface ISideBarProps {
  routs: string[];
}

const SideBar: FC<ISideBarProps> = ({ routs }) => {
  return (
    <SideBarWrapper>
      <ul>
        {routs.map((rout) => (
          <li key={rout}>
            <NavLink to={rout}>{rout}</NavLink>
          </li>
        ))}
      </ul>
    </SideBarWrapper>
  );
};

export default SideBar;
