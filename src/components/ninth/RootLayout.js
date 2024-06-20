import { Outlet } from "react-router-dom"
import NavigationBar from "./NavigationBar"
import Footer from "./Footer"
function RootLayout(){
    return(
    <div className="vh-100">
        <div>
            <NavigationBar/>
        </div>
        <div>
            <Outlet/>
        </div>
        <div>
            <Footer/>
        </div>
    </div>
    )
}
export default RootLayout