/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useEffect, useState } from "react";
import {  deleteProjects, getMyProjects } from "@/service/Projects";
import { Project } from "@/types/types";
import Image from "next/image";
import Spinner from "@/components/shared/Spinner";
import { Edit, Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const ProjectPage = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data } = await getMyProjects();
        setProjects(data);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);
  const handleDelete = async (project: Project) => {
    try {
      const res = await deleteProjects(project._id);
      if (res.success) {
        toast.success(res.message);
        setProjects((prevMeals) => prevMeals.filter((item) => item._id !== project._id));
      } else {
        toast.error(res.message);
      }
    } catch (error) {
      toast.error("An error occurred while deleting the meal.");
    }
  };

  if (loading) return <Spinner />;
  if (error) return <p className="text-center text-red-500">Failed to load projects.</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 p-6">
      {projects.map((project, index) => (
        <div key={index} className="bg-white shadow-lg rounded-lg p-6 dark:bg-gray-800">
          <div className="mb-4">
            <Image
              src={project.image[0]}
              alt={project.name}
              width={400}
              height={300}
              className="rounded-lg w-full h-48 object-cover"
            />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
            {project.name}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
            {project.description}
          </p>
       <div className="flex justify-between">
       <button
            className="text-gray-500 hover:text-green-500"
            title="Edit"
            onClick={() =>
              router.push(
                `/dashboard/update-project/${project._id}`
              )
            }
          >
            <Edit className="w-5 h-5" />
          </button>
          <button
            className="text-gray-500 hover:text-red-500"
            title="Delete"
            onClick={() => handleDelete(project)} // Directly delete on click
          >
            <Trash className="w-5 h-5" />
          </button>
       </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectPage;
