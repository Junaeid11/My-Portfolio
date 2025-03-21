"use client";

import { Project } from "@/types/types";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaShareAlt } from "react-icons/fa";
import { Metadata } from "next";
import Head from "next/head";


export const generateMetadata = (project: Project): Metadata => {
  return {
    title: project.name,
    description: project.description,
    openGraph: {
      title: project.name,
      description: project.description,
      images: [
        {
          url: project.image[0],
          width: 800,
          height: 400,
          alt: project.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: project.name,
      description: project.description,
      images: [project.image[0]],
    },
  };
};



const formatDate = (dateString: string) => {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(dateString));
};

const ProjectDetails = ({ project }: { project: Project }) => {
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <><Head>
      <meta property="og:title" content={project.name} />
      <meta property="og:description" content={project.description} />
      <meta property="og:image" content={project.image[0]} />
      <meta property="og:image:alt" content={project.name} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={window.location.href} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={project.name} />
      <meta name="twitter:description" content={project.description} />
      <meta name="twitter:image" content={project.image[0]} />
    </Head>
      <motion.div
        className="max-w-4xl mx-auto bg-white text-black shadow-lg rounded-lg p-8 mt-8 dark:bg-gray-900 dark:text-white"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Image Section */}
        <div className="relative mb-6">
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            <Image
              src={project.image[0]}
              alt={project.name}
              width={800}
              height={400}
              className="w-full object-cover rounded-lg"
            />
          </motion.div>
          <h1 className="relative text-4xl font-extrabold text-gray-800 mt-4 dark:text-gray-200">
            {project.name}
          </h1>
        </div>

        {/* Description */}
        <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">{project.description}</p>

        {/* Project Info */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div>
            <p className="font-medium text-gray-700 dark:text-gray-400">Status:</p>
            <p className="text-green-600 dark:text-green-400 font-semibold">{project.status}</p>
          </div>
          <div>
            <p className="font-medium text-gray-700 dark:text-gray-400">Completion Date:</p>
            <p className="text-red-600 dark:text-red-400 font-semibold">{formatDate(project.completionDate)}</p>
          </div>
        </div>

        {/* Technologies Used */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">Technologies:</h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <motion.span
                key={index}
                className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full text-sm text-gray-900 dark:text-gray-100"
                whileHover={{ scale: 1.1 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">Features:</h2>
          <ul className="list-disc list-inside space-y-2">
            {project.features.map((feature, index) => (
              <li key={index} className="text-lg text-gray-600 dark:text-gray-300">{feature}</li>
            ))}
          </ul>
        </div>

        {/* Challenges */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">Challenges:</h2>
          <ul className="list-disc list-inside space-y-2">
            {project.challenges.map((challenge, index) => (
              <li key={index} className="text-lg text-gray-600 dark:text-gray-300">{challenge}</li>
            ))}
          </ul>
        </div>

        {/* Opinions */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">Opinions:</h2>
          <ul className="list-disc list-inside space-y-2">
            {project.opinions.map((opinion, index) => (
              <li key={index} className="text-lg text-gray-600 dark:text-gray-300">{opinion}</li>
            ))}
          </ul>
        </div>

        {/* Buttons Section */}
        <div className="flex space-x-4 mt-6">
          {/* GitHub Button */}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-900 transition-all dark:bg-gray-700 dark:hover:bg-gray-800"
          >
            <FaGithub className="mr-2" />
            View GitHub
          </a>

          {/* Share Button */}
          <button
            onClick={handleShare}
            className="inline-flex items-center bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all"
          >
            <FaShareAlt className="mr-2" />
            {copied ? "Copied!" : "Share"}
          </button>
        </div>
      </motion.div>

    </>
  );
};

export default ProjectDetails;
