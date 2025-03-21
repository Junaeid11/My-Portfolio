/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast, Toaster } from "sonner";
import NMImageUploader from "@/components/shared/NMImageUploader";
import ImagePreviewer from "@/components/shared/NMImageUploader/ImagePreviewer";
import { Project } from "@/types/types";
import { addProject } from "@/service/Projects";

const CreateProject = () => {
  const { register, handleSubmit, reset } = useForm<Project>();
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [imagePreview, setImagePreview] = useState<string[]>([]);

  const onSubmit = async (data: Project & { technologies: string | string[] } & {challenges: string | string[]}) => {
    try {
      const formData = new FormData();
      formData.append("data", JSON.stringify({
        ...data,    
        technologies: typeof data.technologies === "string" ? data.technologies.split(",").map((tech) => tech.trim()) : [],
        challenges: typeof data.challenges ==="string" ? data.challenges.split(",").map((tech) => tech.trim()) : []
      }));
      if (imageFiles.length > 0) formData.append("images", imageFiles[0]);

      const res = await addProject(formData);
      if (res?.success) {
        toast.success(res?.message);
        reset();
        setImageFiles([]);
        setImagePreview([]);
      } else {
        toast.error(res?.message);
      }
    } catch (err: any) {
      console.error(err.message);
      toast.error(err.message || "Error occurred");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen my-2">
      <div className="w-full max-w-4xl bg-white dark:bg-gray-900 shadow-lg rounded-lg p-6">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2 className="text-2xl font-semibold mb-6 text-red-600 text-center">
            Create Project
          </h2>

          {/* Image Upload */}
          <div className="flex flex-col items-center">
            {imagePreview.length > 0 ? (
              <ImagePreviewer
                setImageFiles={setImageFiles}
                imagePreview={imagePreview}
                setImagePreview={setImagePreview}
                className="mt-4"
              />
            ) : (
              <NMImageUploader
                setImageFiles={setImageFiles}
                setImagePreview={setImagePreview}
                label="Upload Project Image"
              />
            )}
          </div>

          {/* Project Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div>
              <label className="block text-sm font-medium">Project Name</label>
              <input type="text" {...register("name", { required: true })} className="input-field" placeholder="Enter project name" />
            </div>
            <div>
              <label className="block text-sm font-medium">Completion Date</label>
              <input type="date" {...register("completionDate", { required: true })} className="input-field" />
            </div>
          </div>

          <div className="my-5">
            <label className="block text-sm font-medium">Technologies</label>
            <input type="text" {...register("technologies", { required: true })} className="input-field" placeholder="E.g., React, Node.js, Tailwind CSS" />
          </div>

          <div className="my-5">
            <label className="block text-sm font-medium">Features (comma-separated)</label>
            <input type="text" {...register("features", { required: true })} className="input-field" placeholder="Feature 1, Feature 2, Feature 3" />
          </div>

          <div className="my-5">
            <label className="block text-sm font-medium">Challenges (comma-separated)</label>
            <input type="text" {...register("challenges", { required: true })} className="input-field" placeholder="Challenge 1, Challenge 2" />
          </div>

          <div className="my-5">
            <label className="block text-sm font-medium">Opinions (comma-separated)</label>
            <input type="text" {...register("opinions", { required: true })} className="input-field" placeholder="Opinion 1, Opinion 2" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium">Live Link</label>
              <input type="url" {...register("link")} className="input-field" placeholder="Project live URL" />
            </div>
            <div>
              <label className="block text-sm font-medium">GitHub Link</label>
              <input type="url" {...register("github")} className="input-field" placeholder="GitHub repository URL" />
            </div>
          </div>

          <div className="my-5">
            <label className="block text-sm font-medium">Description</label>
            <textarea {...register("description", { required: true })} rows={4} className="input-field" placeholder="Enter project description"></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium">Status</label>
            <select {...register("status", { required: true })} className="input-field">
              <option value="Completed">Completed</option>
              <option value="In Progress">In Progress</option>
            </select>
          </div>

          <button type="submit" className="mt-6 w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-500 transition-all">
            Create Project
          </button>
        </form>
      </div>
      <Toaster richColors />
    </div>
  );
};

export default CreateProject;