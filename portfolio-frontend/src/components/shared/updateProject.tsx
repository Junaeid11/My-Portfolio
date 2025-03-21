/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { updateProject } from "@/service/Projects";
import { Project } from "@/types/types";
import ImagePreviewer from "./NMImageUploader/ImagePreviewer";
import NMImageUploader from "./NMImageUploader";

export default function UpdateProjectForm({ project }: { project: Project }) {
    const [imageFiles, setImageFiles] = useState<File[]>([]);
    const [imagePreview, setImagePreview] = useState<string[]>(project?.image || []);

    const form = useForm({
        defaultValues: {
            name: project?.name || "",
            description: project?.description || "",
            technologies: project?.technologies || [],
            features: project?.features || [],
            challenges: project?.challenges || [],
            opinions: project?.opinions || [],
            link: project?.link || "",
            github: project?.github || "",
            completionDate: project?.completionDate || "",
            status: project?.status || "In Progress",
        },
    });

    const { formState: { isSubmitting } } = form;

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        const modifiedData = {
            ...data,
            technologies: Array.isArray(data.technologies) ? data.technologies : data.technologies.split(",").map((t: any) => t.trim()),
            features: Array.isArray(data.features) ? data.features : data.features.split(",").map((f: any) => f.trim()),
            challenges: Array.isArray(data.challenges) ? data.challenges : data.challenges.split(",").map((c: any) => c.trim()),
            opinions: Array.isArray(data.opinions) ? data.opinions : data.opinions.split(",").map((o: any) => o.trim()),
        };

        try {
            const formData = new FormData();
            formData.append("data", JSON.stringify(modifiedData));
            imageFiles.forEach(file => formData.append("images", file));

            const res = await updateProject(formData, project._id);
            console.log(formData)
            if (res?.success) {
                form.reset();
                toast.success(res.message);
            } else {
                toast.error(res?.message);
            }
        } catch (err) {
            toast.error("An error occurred. Please try again.");
        }
    };

    return (
        <div className="rounded-xl flex-grow mx-2 p-5 my-5">
            <h1 className="text-xl text-center font-semibold mb-2 text-violet-500">Update Project</h1>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        {[
                            { name: "name", label: "Project Name" },
                            { name: "description", label: "Description" },
                            { name: "technologies", label: "Technologies (comma separated)" },
                            { name: "features", label: "Features (comma separated)" },
                            { name: "challenges", label: "Challenges (comma separated)" },
                            { name: "opinions", label: "Opinions (comma separated)" },
                            { name: "link", label: "Project Link" },
                            { name: "github", label: "GitHub Repository" },
                            { name: "completionDate", label: "Completion Date" },
                        ].map((field) => (
                            <FormField
                                key={field.name}
                                control={form.control}
                                name={field.name as "link" | "name" | "description" | "technologies" | "features" | "challenges" | "opinions" | "github" | "completionDate" | "status"}
                                render={({ field: inputField }) => (
                                    <FormItem>
                                        <FormLabel>{field.label}</FormLabel>
                                        <FormControl>
                                            <Input {...inputField} value={inputField.value || ""} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        ))}
                    </div>

                    {imagePreview.length > 0 ? (
                        <div>
                            <ImagePreviewer
                                setImageFiles={setImageFiles}
                                imagePreview={imagePreview}
                                setImagePreview={setImagePreview}
                                className="mt-8"
                            />
                        </div>
                    ) : (
                        <div className="mt-8">
                            <NMImageUploader
                                setImageFiles={setImageFiles}
                                setImagePreview={setImagePreview}
                                label="Upload Project Image"
                            />
                        </div>
                    )}

                    <Button type="submit" className="mt-5 w-full" disabled={isSubmitting}>
                        {isSubmitting ? "Updating..." : "Update Project"}
                    </Button>
                </form>
            </Form>
        </div>
    );
}
