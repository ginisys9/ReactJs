import { Outlet } from "react-router-dom"
import Header from "../component/Header"

function MainLayout() {
    return (
        <div>
         <Header/>
         <div className="p-4">
            <Outlet/>
         </div>
        </div>
    )
}

export default MainLayout
