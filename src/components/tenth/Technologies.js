import { Link, Outlet } from "react-router-dom"
function Technologies(){
    return(
        <div>
            <ul className="nav justify-content-end bg-info">
                <li className="nav-item p-3">
                    <Link className="nav-link" style={{color:'white'}} to='react'>
                            React
                    </Link>
                </li>
                <li className="nav-item p-3">
                    <Link className="nav-link"  style={{color:'white'}} to='angular'>
                           Angular
                    </Link>
                </li>
                <li className="nav-item p-3">
                    <Link className="nav-link"  style={{color:'white'}} to='vue'>
                           Vue
                    </Link>
                </li>
            </ul>
            <Outlet/>
        </div>
    )
}
export default Technologies