import { Link, Outlet } from "react-router-dom"
function NavigationBar(){
    return(
             <ul className="nav justify-content-end bg-light">
                <li className="nav-item p-3">
                    <Link className="nav-link"  to=''>
                            Home
                    </Link>
                </li>
                <li className="nav-item p-3">
                    <Link className="nav-link"  to='register'>
                            Register
                    </Link>
                </li>
                <li className="nav-item p-3">
                    <Link className="nav-link"  to='login'>
                           Login
                    </Link>
                </li>
                <li className="nav-item p-3">
                    <Link className="nav-link"  to='technologies'>
                           Technologies
                    </Link>
                </li>
            </ul>
    )
}
export default NavigationBar