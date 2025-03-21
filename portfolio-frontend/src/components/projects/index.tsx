"use client";

import { useState, useEffect } from "react";
import { getMyProjects } from "@/service/Projects";
import { ProjectCardHigh } from "../shared/ProjectHighlightCard";
import { Project } from "@/types/types";

const ProjectFeature = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data } = await getMyProjects();
        setProjects(data.slice(0, 3)); 
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };
    
    fetchProjects();
  }, []);

  return (
    
    <div className="grid grid-cols-1 lg:grid-cols-1 gap-6 p-6">
      {projects.map((project, idx) => (
        <ProjectCardHigh key={idx} project={project} />
      ))}
    </div>
  );
};

export default ProjectFeature;
