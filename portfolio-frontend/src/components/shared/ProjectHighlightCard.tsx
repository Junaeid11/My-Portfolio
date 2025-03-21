"use client";

import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaShareAlt } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";
import { Project } from "@/types/types";
import { motion } from "framer-motion";
import { useState } from "react";

export const ProjectCardHigh = ({ project }: { project: Project }) => {
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    navigator.clipboard.writeText(`${window.location.origin}/projects/${project._id}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Card className="relative p-6 rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 text-black shadow-lg dark:shadow-gray-800">
        <div className="flex flex-col md:flex-row text-black gap-6">
          {/* Animated Image Container */}
          <div
            className="w-full md:w-1/2 rounded-xl overflow-hidden"
           
          >
            <Image
              src={project.image[0]}
              alt="Project Image"
              className="w-full h-full object-cover rounded-xl"
              width={500}
              height={250}
            />
          </div>

          <CardContent className="relative w-full md:w-1/2 px-0 md:px-6">
            {/* Animated Title */}
            <motion.h1
              className="text-xl font-bold"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {project.name}
            </motion.h1>

            {/* Description */}
            <p className="text-sm mt-2 line-clamp-2">{project.description}</p>

            {/* Technologies Used */}
            <div className="flex flex-wrap gap-2 mt-3">
              {project.technologies.map((tech: string, index: number) => (
                <motion.span
                  key={index}
                  className="border-2 bg-slate-100 px-3 py-1 rounded-full text-xs text-red-500"
                  whileHover={{ scale: 1.1 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            {/* Feature List */}
            <ul className="mt-4 text-sm space-y-1">
              {project.features.slice(0, 3).map((feature: string, index: number) => (
                <motion.li
                  key={index}
                  className="flex items-center"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                >
                  <span className="text-purple-400 mr-2">★</span> {feature}
                </motion.li>
              ))}
            </ul>

            {/* Project Status */}
            <div className="mt-3 text-sm font-bold">
              Status:
              <span
                className={`ml-2 px-2 py-1 rounded ${project.status === "Completed"
                    ? "bg-green-600 text-white"
                    : "bg-yellow-500 text-black"
                  }`}
              >
                {project.status}
              </span>
            </div>

            {/* Links */}
            <div className="flex flex-col md:flex-row justify-between items-center mt-4 gap-4 md:gap-0">
              <Link
                className="flex items-center text-gray-500 hover:text-black transition"
                href={project.github}
              >
                <FaGithub className="mr-2" />
                GitHub Repo
              </Link>

              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href={`/projects/${project._id}`}
                  className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-all"
                >
                  Read More →
                </Link>
              </motion.div>

              {/* Share Button */}
              <button
                onClick={handleShare}
                className="inline-flex items-center bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all"
              >
                <FaShareAlt className="mr-2" />
                {copied ? "Copied!" : "Share"}
              </button>
            </div>
          </CardContent>
        </div>
      </Card>
    </motion.div>
  );
};
