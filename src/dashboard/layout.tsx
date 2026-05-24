import { Outlet } from "react-router-dom"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "./shared/sidebar"

const DashboardLayout = () => {
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>

                <Outlet />
            </SidebarInset>
        </SidebarProvider>
    )
}

export default DashboardLayout
