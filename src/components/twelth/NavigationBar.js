import { NavLink, Outlet } from "react-router-dom"
import './NavigationBar.css'
function NavigationBar(){
    return(<div>
       
             <ul className="nav d-flex justify-content-between bg-light">
                <li className="nav-item p-3">
                <NavLink className="navbar-brand d-inline"  to=''>
                            SMS
                    </NavLink>
                </li>
                <div className="text-end d-flex align-items-end">
                    <ul className="d-flex flex-row list-unstyled">
                <li className="nav-item p-3">
                    <NavLink className="nav-link"  to=''>
                            About
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
                    <NavLink className="nav-link"  to='contactus'>
                           Contact
                    </NavLink>
                </li>
                </ul>
                </div>
            </ul>
            </div>
    )
}
export default NavigationBar