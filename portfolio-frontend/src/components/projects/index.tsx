"use client";

import { useState, useEffect } from "react";
import { getMyProjects } from "@/service/Projects";
import { ProjectCardHigh } from "../shared/ProjectHighlightCard";
import { Project } from "@/types/types";
import { motion } from "framer-motion";

const ProjectFeature = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const { data } = await getMyProjects();
        // Get the first 3 projects for featured section
        const featuredProjects = [data[0], data[6], data[1]].filter(Boolean);
        setProjects(featuredProjects);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="glass-effect rounded-2xl p-6 animate-pulse">
            <div className="bg-slate-700/50 h-48 rounded-lg mb-4"></div>
            <div className="space-y-3">
              <div className="h-6 bg-slate-700/50 rounded"></div>
              <div className="h-4 bg-slate-700/50 rounded w-3/4"></div>
              <div className="h-4 bg-slate-700/50 rounded w-1/2"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {projects.map((project, idx) => (
        <motion.div
          key={project._id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: idx * 0.1 }}
          viewport={{ once: true }}
        >
          <ProjectCardHigh project={project} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ProjectFeature;
