import * as React from "react"
import { ChevronDown } from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarRail,
} from "@/components/ui/sidebar"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { SearchForm } from "@/components/ui/search-form"
import { VersionSwitcher } from "@/components/ui/version-switcher"
import { NavUser } from "./nav-user"
import { Link } from "react-router-dom"

// This is sample data.
const data = {
    versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
    user: {
        name: "shadcn",
        email: "m@example.com",
        avatar: "/avatars/shadcn.jpg",
    },
    navMain: [
        {
            title: "Main",
            url: "#",
            items: [
                { title: "Dashboard", url: "/dashboard" },
                { title: "Project Structure", url: "#" },
            ],
        },
        {
            title: "Master",
            url: "#",
            items: [
                { title: "Users", url: "/dashboard/master/users" },
                { title: "Skills", url: "/dashboard/master/skills" },
                { title: "Categories", url: "/dashboard/master/categories" },
                { title: "Projects", url: "/dashboard/projects" },
            ],
        },
    ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar {...props}>
            <SidebarHeader>
                <VersionSwitcher />
                <SearchForm />
            </SidebarHeader>
            <SidebarContent>
                {data.navMain.map((item) => (
                    <Collapsible key={item.title} defaultOpen className="group/collapsible">
                        <SidebarGroup>
                            <SidebarGroupLabel asChild>
                                <CollapsibleTrigger className="flex w-full items-center justify-between">
                                    {item.title}
                                    <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                                </CollapsibleTrigger>
                            </SidebarGroupLabel>
                            <CollapsibleContent>
                                <SidebarGroupContent>
                                    <SidebarMenu>
                                        {item.items.map((subItem) => (
                                            <SidebarMenuItem key={subItem.title}>
                                                <SidebarMenuButton asChild>
                                                    <Link to={subItem.url}>{subItem.title}</Link>
                                                </SidebarMenuButton>
                                            </SidebarMenuItem>
                                        ))}
                                    </SidebarMenu>
                                </SidebarGroupContent>
                            </CollapsibleContent>
                        </SidebarGroup>
                    </Collapsible>
                ))}
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={data.user} />
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    )
}
