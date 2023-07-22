import { FC } from "react"
import { NavLink } from "react-router-dom"

interface ISideBarProps {
    routs: string[]
}

const SideBar: FC<ISideBarProps> = ({ routs }) => {
    return (
        <nav>
            <ul>
              {
                routs.map(rout => <li key={rout}>
                    <NavLink to={rout}>
                        {rout}
                    </NavLink>
                        
                    </li>)
              }  
            </ul>
        </nav>
    )
}

export default SideBar