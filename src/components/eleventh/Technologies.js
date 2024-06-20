import { NavLink, Outlet } from "react-router-dom"
function Technologies(){
    return(
        <div>
            <ul className="nav justify-content-end bg-info">
                <li className="nav-item p-3">
                    <NavLink className="nav-link" style={{color:'white'}} to='react'>
                            React
                    </NavLink>
                </li>
                <li className="nav-item p-3">
                    <NavLink className="nav-link"  style={{color:'white'}} to='angular'>
                           Angular
                    </NavLink>
                </li>
                <li className="nav-item p-3">
                    <NavLink className="nav-link"  style={{color:'white'}} to='vue'>
                           Vue
                    </NavLink>
                </li>
            </ul>
            <Outlet/>
        </div>
    )
}
export default Technologies