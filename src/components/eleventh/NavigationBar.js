import { NavLink, Outlet } from "react-router-dom"
import './NavigationBar.css'
function NavigationBar(){
    return(
             <ul className="nav justify-content-end bg-light">
                <li className="nav-item p-3">
                    <NavLink className="nav-link"  to=''>
                            Home
                    </NavLink>
                </li>
                <li className="nav-item p-3">
                    <NavLink className="nav-link"  to='register'>
                            Register
                    </NavLink>
                </li>
                <li className="nav-item p-3">
                    <NavLink className="nav-link"  to='login'>
                           Login
                    </NavLink>
                </li>
                <li className="nav-item p-3">
                    <NavLink className="nav-link"  to='technologies'>
                           Technologies
                    </NavLink>
                </li>
            </ul>
    )
}
export default NavigationBar