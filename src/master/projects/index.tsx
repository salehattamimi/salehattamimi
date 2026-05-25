import { useState } from "react"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import {
    Columns3,
    Download,
    Plus,
    Search,
    Tag,
} from "lucide-react"
import TableProject from "@/master/projects/components/table"
import FormCreateProject from "@/master/projects/components/form-create"



export default function ProjectPage() {
    const [search, setSearch] = useState("")
    const [openForm, setOpenForm] = useState(false)
    const [tableKey, setTableKey] = useState(0)





    return (
        <>
            {/* Header */}
            <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
                <SidebarTrigger className="-ml-1" />
                <Separator
                    orientation="vertical"
                    className="mr-2 data-[orientation=vertical]:h-4"
                />
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem className="hidden md:block">
                            <BreadcrumbLink href="#">Dashboard</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator className="hidden md:block" />
                        <BreadcrumbItem>
                            <BreadcrumbPage>Products</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </header>

            {/* Page content */}
            <div className="flex flex-1 flex-col gap-6 p-6">
                {/* Title row */}
                <div className="flex items-start justify-between">
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight">Products</h1>
                        <p className="text-sm text-muted-foreground mt-1">
                            Browse and manage your product catalog.
                        </p>
                    </div>
                    <Button className="gap-2" onClick={() => setOpenForm(true)}>
                        <Plus className="h-4 w-4" />
                        Add Project
                    </Button>
                </div>


                {/* Search & actions row */}
                <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3 flex-1">
                        {/* Search */}
                        <div className="relative max-w-sm w-full">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <input
                                type="text"
                                placeholder="Search products..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="w-full pl-9 pr-4 py-2 rounded-md border border-input bg-background text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                            />
                        </div>
                        {/* Category */}
                        <Button variant="outline" size="sm" className="gap-2">
                            <Tag className="h-4 w-4" />
                            Category
                        </Button>
                    </div>
                    <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm" className="gap-2">
                            <Columns3 className="h-4 w-4" />
                            Columns
                        </Button>
                        <Button variant="outline" size="sm" className="gap-2">
                            <Download className="h-4 w-4" />
                            Export
                        </Button>
                    </div>
                </div>
                <TableProject key={tableKey} search={search} />

                <FormCreateProject
                    open={openForm}
                    onOpenChange={setOpenForm}
                    onSuccess={() => setTableKey((k) => k + 1)}
                />



            </div>
        </>
    )
}
