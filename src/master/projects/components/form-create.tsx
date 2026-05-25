import { Plus, Trash2 } from "lucide-react"
import { useForm, useFieldArray } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetDescription,
    SheetFooter,
    SheetClose,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { useEffect, useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"

const projectSchema = z.object({
    name: z
        .string()
        .min(1, { message: "Project name is required." })
        .max(100, { message: "Project name max 100 characters." }),
    description: z
        .string()
        .min(1, { message: "Description is required." }),
    link: z
        .string()
        .min(1, { message: "Link is required." })
        .url({ message: "Link must be a valid URL." }),
    stacks: z.array(z.number()).min(1, { message: "At least one tech stack is required." }),
})

type ProjectFormValues = z.infer<typeof projectSchema>

interface FormCreateProjectProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    onSuccess?: () => void
}

export default function FormCreateProject({ open, onOpenChange, onSuccess }: FormCreateProjectProps) {
    const [stacksData, setStacksData] = useState<{ id: number, name: string }[]>([])
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${import.meta.env.VITE_API_URI}/api/stacks`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                }
            })
            const data = await response.json()
            setStacksData(data.data)
        }
        fetchData()
    }, [open])
    const form = useForm<ProjectFormValues>({
        resolver: zodResolver(projectSchema),
        defaultValues: {
            name: "",
            description: "",
            link: "",
            stacks: [],
        },
    })

    const handleSubmit = async (values: ProjectFormValues) => {
        try {
            const payload = {
                name: values.name.trim(),
                description: values.description.trim(),
                link: values.link.trim(),
                stack_ids: values.stacks,
            }

            const response = await fetch(`${import.meta.env.VITE_API_URI}/api/projects`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
                body: JSON.stringify(payload),
            })

            if (!response.ok) {
                const errorData = await response.json()
                throw new Error(errorData.message ?? "Failed to create project.")
            }

            form.reset()
            onOpenChange(false)
            onSuccess?.()
        } catch (error) {
            console.error("Error creating project:", error)
        }
    }

    const handleClose = () => {
        form.reset()
        onOpenChange(false)
    }

    return (
        <Sheet open={open} onOpenChange={handleClose}>
            <SheetContent className="w-full sm:max-w-lg overflow-y-auto">
                <SheetHeader>
                    <SheetTitle>Add New Project</SheetTitle>
                    <SheetDescription>
                        Fill in the details below to create a new project.
                    </SheetDescription>
                </SheetHeader>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleSubmit)} className="flex flex-col gap-5 py-6">
                        {/* Name */}
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Project Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="e.g. My Awesome App" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Description */}
                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Description</FormLabel>
                                    <FormControl>
                                        <textarea
                                            rows={3}
                                            placeholder="Brief description of the project..."
                                            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Link */}
                        <FormField
                            control={form.control}
                            name="link"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Project Link</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="url"
                                            placeholder="https://github.com/..."
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />


                        <FormField
                            control={form.control}
                            name="stacks"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Tech Stackk</FormLabel>
                                    {stacksData.map((stack: { id: number, name: string }) => (
                                        <FormItem key={stack.id}>
                                            <FormControl>
                                                <label className="flex items-center gap-2">
                                                    <Checkbox
                                                        checked={field.value?.includes(stack.id)}
                                                        onCheckedChange={(checked) => {
                                                            if (checked) {
                                                                field.onChange([
                                                                    ...(field.value || []),
                                                                    stack.id,
                                                                ])
                                                            } else {
                                                                field.onChange(
                                                                    field.value?.filter(
                                                                        (value: number) =>
                                                                            value !== stack.id
                                                                    )
                                                                )
                                                            }
                                                        }}
                                                    />
                                                    {stack.name}
                                                </label>
                                            </FormControl>
                                            <FormMessage />

                                        </FormItem>
                                    ))}
                                </FormItem>
                            )}
                        />

                        <SheetFooter className="mt-2 flex gap-2 sm:flex-row">
                            <SheetClose asChild>
                                <Button type="button" variant="outline" className="flex-1" onClick={handleClose}>
                                    Cancel
                                </Button>
                            </SheetClose>
                            <Button type="submit" disabled={form.formState.isSubmitting} className="flex-1">
                                {form.formState.isSubmitting ? "Saving..." : "Create Project"}
                            </Button>
                        </SheetFooter>
                    </form>
                </Form>
            </SheetContent>
        </Sheet>
    )
}
