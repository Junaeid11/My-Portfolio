"use client";

import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt, FaCalendarAlt, FaCode, FaImage } from "react-icons/fa";
import { Project } from "@/types/types";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

export const ProjectCardHigh = ({ project }: { project: Project }) => {
  const [imageError, setImageError] = useState(false);

  const formatDate = (dateString: string) => {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
    }).format(new Date(dateString));
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "completed":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "in progress":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "planned":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      default:
        return "bg-slate-500/20 text-slate-400 border-slate-500/30";
    }
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="group"
    >
      <div className="glass-effect rounded-2xl overflow-hidden card-hover h-full">
        {/* Image Container */}
        <div className="relative overflow-hidden bg-slate-800/50">
          {!imageError && project.image && project.image[0] ? (
            <Image
              src={project.image[0]}
              alt={project.name}
              width={400}
              height={400}
              className="w-full h-48 object-cover transition-all duration-500 group-hover:scale-110"
              onError={handleImageError}
              priority={false}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="w-full h-48 flex items-center justify-center bg-gradient-to-br from-slate-700 to-slate-800">
              <div className="text-center">
                <FaImage className="mx-auto text-slate-500 text-4xl mb-2" />
                <p className="text-slate-400 text-sm">No Image Available</p>
              </div>
            </div>
          )}
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Status Badge */}
          <div className="absolute top-4 right-4">
            <Badge className={`${getStatusColor(project.status)} text-xs font-medium`}>
              {project.status}
            </Badge>
          </div>

          {/* Action Buttons */}
          <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-3 py-2 bg-slate-800/80 backdrop-blur-sm rounded-lg text-white hover:bg-slate-700/80 transition-colors"
              >
                <FaGithub size={14} />
                <span className="text-xs font-medium">Code</span>
              </motion.a>
            )}
            {project.link && (
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-3 py-2 bg-blue-600/80 backdrop-blur-sm rounded-lg text-white hover:bg-blue-500/80 transition-colors"
              >
                <FaExternalLinkAlt size={14} />
                <span className="text-xs font-medium">Live</span>
              </motion.a>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* Header */}
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
              {project.name}
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
              {project.description}
            </p>
          </div>

          {/* Technologies */}
          {project.technologies && project.technologies.length > 0 && (
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-slate-400">
                <FaCode size={12} />
                <span className="text-xs font-medium">Technologies</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.technologies.slice(0, 4).map((tech, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="text-xs bg-slate-800/50 text-slate-300 border-slate-700/50 hover:bg-slate-700/50"
                  >
                    {tech}
                  </Badge>
                ))}
                {project.technologies.length > 4 && (
                  <Badge
                    variant="secondary"
                    className="text-xs bg-slate-800/50 text-slate-300 border-slate-700/50"
                  >
                    +{project.technologies.length - 4} more
                  </Badge>
                )}
              </div>
            </div>
          )}

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
            <div className="flex items-center gap-2 text-slate-400">
              <FaCalendarAlt size={12} />
              <span className="text-xs">{formatDate(project.completionDate)}</span>
            </div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={`/projects/${project._id}`}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium rounded-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-200"
              >
                View Details
                <FaExternalLinkAlt size={12} />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
