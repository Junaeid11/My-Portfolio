/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaShareAlt } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useState } from "react";

export const ProjectCard = ({ project }: any) => {
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
      <Card className="relative overflow-hidden rounded-3xl shadow-xl bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white transition-transform duration-300 hover:scale-[1.03]">
        <div className="flex flex-col md:flex-row gap-6 p-6">
          {/* Project Image */}
          <div className="relative md:w-1/2 w-full h-full md:h-auto rounded-xl overflow-hidden shadow-lg">
            <Image
              src={project.image[0]}
              alt="Project"
              fill
              className="object-cover w-full h-full rounded-xl"
            />
          </div>


          {/* Project Content */}
          <CardContent className="w-full md:w-1/2 px-0 md:px-6 space-y-4">
            <motion.h2
              className="text-2xl md:text-3xl font-bold text-purple-300"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {project.name}
            </motion.h2>

            <p className="text-sm md:text-base text-gray-300 line-clamp-3">{project.description}</p>

            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech: string, index: number) => (
                <motion.span
                  key={index}
                  className="bg-white text-black text-xs font-medium px-3 py-1 rounded-full shadow-md"
                  whileHover={{ scale: 1.05 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            <ul className="text-sm space-y-1 mt-2">
              {project.features.slice(0, 3).map((feature: string, index: number) => (
                <motion.li
                  key={index}
                  className="flex items-center text-gray-200"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                >
                  <span className="text-yellow-400 mr-2">✓</span> {feature}
                </motion.li>
              ))}
            </ul>

            <div className="text-sm mt-3">
              <strong className="text-white">Status:</strong>{" "}
              <span
                className={`ml-2 px-3 py-1 rounded-full text-xs font-semibold ${project.status === "Completed"
                    ? "bg-green-500 text-white"
                    : "bg-yellow-500 text-black"
                  }`}
              >
                {project.status}
              </span>
            </div>

            {/* Actions */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-5">
              <Link
                href={project.github}
                className="flex items-center gap-2 text-sm hover:text-purple-300 transition"
              >
                <FaGithub size={18} /> GitHub Repo
              </Link>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href={`/projects/${project._id}`}
                  className="bg-purple-600 px-5 py-2 rounded-full text-white text-sm hover:bg-purple-700 transition-all"
                >
                  Read More →
                </Link>
              </motion.div>

              <button
                onClick={handleShare}
                className="flex items-center gap-2 px-5 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-sm transition-all"
              >
                <FaShareAlt /> {copied ? "Copied!" : "Share"}
              </button>
            </div>
          </CardContent>
        </div>
      </Card>
    </motion.div>
  );
};
