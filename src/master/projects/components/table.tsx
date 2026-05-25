import React, { useEffect, useState } from 'react'

import {
    ArrowUpDown,
    Box,
    MoreHorizontal,
} from "lucide-react"

interface Project {
    id: number
    name: string
    description: string
    link: string,
    stacks: { name: string }[]
    created_at: string,
}


export type ProductStatus = "Active" | "Draft" | "Archived"
export type FilterTab = "All" | ProductStatus

const categoryColors: Record<string, string> = {
    Templates: "bg-violet-500/20 text-violet-300 border-violet-500/30",
    Plans: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    Licenses: "bg-amber-500/20 text-amber-300 border-amber-500/30",
    Modules: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
}

const statusColors: Record<ProductStatus, string> = {
    Active: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    Draft: "bg-zinc-500/20 text-zinc-300 border-zinc-500/30",
    Archived: "bg-red-500/20 text-red-300 border-red-500/30",
}


const TableProject = ({ search }: { search: string }) => {
    const [projects, setProjects] = useState<Project[]>([])
    const [selected, setSelected] = useState<number[]>([])

    useEffect(() => {
        const fetchProject = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URI}/api/projects`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                })
                const data = await response.json()
                setProjects(data.data)
            } catch (error) {
                console.error("Error fetching project data:", error)
            }
        }
        fetchProject()
    }, [])

    const allSelected = projects.length > 0 && projects.every((p) => selected.includes(p.id))

    const toggleAll = () => {
        if (allSelected) {
            setSelected((prev) => prev.filter((id) => !projects.map((p) => p.id).includes(id)))
        } else {
            setSelected((prev) => [...new Set([...prev, ...projects.map((p) => p.id)])])
        }
    }

    const toggleOne = (id: number) => {
        setSelected((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]))
    }

    const filtered = projects.filter((p) => {
        const matchSearch =
            p.name.toLowerCase().includes(search.toLowerCase()) ||
            p.description.toLowerCase().includes(search.toLowerCase())
        return matchSearch
    })
    return (
        <>
            <div className="rounded-xl border border-border overflow-hidden">
                <table className="w-full text-sm">
                    <thead>
                        <tr className="border-b border-border bg-muted/30">
                            <th className="w-10 px-4 py-3">
                                <input
                                    type="checkbox"
                                    checked={allSelected}
                                    onChange={toggleAll}
                                    className="h-4 w-4 rounded border-border accent-primary cursor-pointer"
                                />
                            </th>
                            <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                                <button className="flex items-center gap-1 hover:text-foreground transition-colors">
                                    Project <ArrowUpDown className="h-3.5 w-3.5" />
                                </button>
                            </th>
                            <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                                <button className="flex items-center gap-1 hover:text-foreground transition-colors">
                                    Link <ArrowUpDown className="h-3.5 w-3.5" />
                                </button>
                            </th>
                            {/* <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                            <button className="flex items-center gap-1 hover:text-foreground transition-colors">
                                Status <ArrowUpDown className="h-3.5 w-3.5" />
                            </button>
                        </th> */}
                            <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                                <button className="flex items-center gap-1 hover:text-foreground transition-colors">
                                    Stock <ArrowUpDown className="h-3.5 w-3.5" />
                                </button>
                            </th>
                            <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                                <button className="flex items-center gap-1 hover:text-foreground transition-colors">
                                    Stacks <ArrowUpDown className="h-3.5 w-3.5" />
                                </button>
                            </th>
                            <th className="w-10 px-4 py-3" />
                        </tr>
                    </thead>
                    <tbody>
                        {filtered.length === 0 && (
                            <tr>
                                <td colSpan={8} className="px-4 py-12 text-center text-muted-foreground">
                                    No products found.
                                </td>
                            </tr>
                        )}
                        {filtered.map((project, index) => (
                            <tr
                                key={project.id}
                                className={`border-b border-border last:border-0 transition-colors hover:bg-muted/30 ${index % 2 === 0 ? "" : "bg-muted/10"
                                    } ${selected.includes(project.id) ? "bg-primary/5" : ""}`}
                            >
                                <td className="px-4 py-4">
                                    <input
                                        type="checkbox"
                                        checked={selected.includes(project.id)}
                                        onChange={() => toggleOne(project.id)}
                                        className="h-4 w-4 rounded border-border accent-primary cursor-pointer"
                                    />
                                </td>
                                <td className="px-4 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-muted/50">
                                            <Box className="h-4 w-4 text-muted-foreground" />
                                        </div>
                                        <div>
                                            <div className="font-medium text-foreground">
                                                {project.name}
                                            </div>
                                            <div className="text-xs text-muted-foreground mt-0.5 max-w-xs truncate">
                                                {project.description}
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-4 py-4">
                                    <span
                                        className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${categoryColors[project.name] ??
                                            "bg-muted text-muted-foreground border-border"
                                            }`}
                                    >
                                        {project.link}
                                    </span>
                                </td>
                                {/* <td className="px-4 py-4">
                                <span
                                    className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${statusColors[project.status]}`}
                                >
                                    {project.status}
                                </span>
                            </td> */}
                                <td className="px-4 py-4 text-foreground tabular-nums">
                                    {/* {project.stock.toLocaleString()} */}
                                    bolu ketan
                                </td>
                                <td className="px-4 py-4 font-medium text-foreground tabular-nums">
                                    {project.stacks.map((s) => s.name).join(", ")}
                                </td>
                                <td className="px-4 py-4">
                                    <button className="flex h-8 w-8 items-center justify-center rounded-md hover:bg-muted transition-colors text-muted-foreground hover:text-foreground">
                                        <MoreHorizontal className="h-4 w-4" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Footer count */}
                <p className="text-xs text-muted-foreground">
                    Showing {projects.length} of {projects.length} products
                    {selected.length > 0 && ` · ${selected.length} selected`}
                </p>
            </div>
        </>
    )
}

export default TableProject