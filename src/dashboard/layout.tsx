import { Outlet } from "react-router-dom"
import Sidebar from "./shared/sidebar"

const DashboardLayout = () => {
    return (
        <div className="flex flex-row gap-4">
            <Sidebar />
            <Outlet />

        </div>
    )
}

export default DashboardLayout