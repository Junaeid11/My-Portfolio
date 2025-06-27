"use client";

import { Project } from "@/types/types";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaCalendarAlt, FaCode, FaShareAlt, FaCheckCircle, FaLightbulb, FaComments, FaImage, FaImages } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";
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

const ProjectDetails = ({ project }: { project: Project }) => {
  const [copied, setCopied] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const [imageError, setImageError] = useState<{ [key: number]: boolean }>({});

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleImageError = (index: number) => {
    setImageError(prev => ({ ...prev, [index]: true }));
  };

  const validImages = project.image?.filter((_, index) => !imageError[index]) || [];

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
        className="container-custom py-8 mt-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="glass-effect rounded-3xl overflow-hidden">
          {/* Hero Section - No Image */}
          <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="space-y-4">
                <h1 className="text-3xl md:text-4xl font-bold text-white">
                  {project.name}
                </h1>
                <p className="text-slate-300 text-lg max-w-2xl">
                  {project.description}
                </p>
              </div>
              
              <div className="flex items-center gap-3">
                <Badge className={`${getStatusColor(project.status)} text-sm font-medium`}>
                  {project.status}
                </Badge>
                <motion.button
                  onClick={handleShare}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-full bg-slate-800/50 text-slate-300 hover:text-white hover:bg-slate-700/50 transition-colors relative"
                  title="Share project"
                >
                  <FaShareAlt size={16} />
                  {copied && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-green-500 text-white text-xs px-2 py-1 rounded whitespace-nowrap"
                    >
                      Copied!
                    </motion.div>
                  )}
                </motion.button>
              </div>
            </div>
          </div>

          {/* Project Images Section */}
          {validImages.length > 0 && (
            <div className="p-8 border-b border-slate-700/50">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <FaImages className="text-blue-400" size={20} />
                  <h2 className="text-2xl font-bold text-white">Project Screenshots</h2>
                </div>
                
                {/* Main Image Display */}
                <div className="relative overflow-hidden rounded-2xl bg-slate-800/50">
                  {validImages[selectedImage] ? (
                    <Image
                      src={validImages[selectedImage]}
                      alt={`${project.name} - Screenshot ${selectedImage + 1}`}
                      width={1200}
                      height={600}
                      className="w-full h-64 md:h-96 object-contain"
                      onError={() => handleImageError(selectedImage)}
                      priority={selectedImage === 0}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                    />
                  ) : (
                    <div className="w-full h-64 md:h-96 flex items-center justify-center bg-gradient-to-br from-slate-700 to-slate-800">
                      <div className="text-center">
                        <FaImage className="mx-auto text-slate-500 text-6xl mb-4" />
                        <p className="text-slate-400 text-lg">No Image Available</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Image Thumbnails */}
                {validImages.length > 1 && (
                  <div className="flex gap-3 overflow-x-auto pb-2">
                    {validImages.map((image, index) => (
                      <motion.button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex-shrink-0 relative overflow-hidden rounded-lg border-2 transition-all ${
                          selectedImage === index 
                            ? 'border-blue-500 scale-105' 
                            : 'border-slate-600 hover:border-slate-500'
                        }`}
                      >
                        <Image
                          src={image}
                          alt={`${project.name} - Thumbnail ${index + 1}`}
                          width={120}
                          height={80}
                          className="w-24 h-16 object-cover"
                          onError={() => handleImageError(index)}
                        />
                        {selectedImage === index && (
                          <div className="absolute inset-0 bg-blue-500/20 flex items-center justify-center">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          </div>
                        )}
                      </motion.button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Content */}
          <div className="p-8 space-y-8">
            {/* Project Meta */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-800/30 border border-slate-700/50">
                <FaCalendarAlt className="text-blue-400" size={20} />
                <div>
                  <p className="text-slate-400 text-sm">Completion Date</p>
                  <p className="text-white font-semibold">{formatDate(project.completionDate)}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-800/30 border border-slate-700/50">
                <FaCode className="text-purple-400" size={20} />
                <div>
                  <p className="text-slate-400 text-sm">Technologies</p>
                  <p className="text-white font-semibold">{project.technologies.length} used</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-800/30 border border-slate-700/50">
                <FaCheckCircle className="text-green-400" size={20} />
                <div>
                  <p className="text-slate-400 text-sm">Features</p>
                  <p className="text-white font-semibold">{project.features.length} implemented</p>
                </div>
              </div>
            </div>

            {/* Technologies */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <FaCode className="text-blue-400" size={20} />
                <h2 className="text-2xl font-bold text-white">Technologies Used</h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="text-sm bg-slate-800/50 text-slate-300 border-slate-700/50 hover:bg-slate-700/50 px-4 py-2"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-green-400" size={20} />
                <h2 className="text-2xl font-bold text-white">Key Features</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 p-4 rounded-xl bg-slate-800/30 border border-slate-700/50"
                  >
                    <FaCheckCircle className="text-green-400 mt-1 flex-shrink-0" size={16} />
                    <p className="text-slate-300">{feature}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Challenges */}
            {project.challenges && project.challenges.length > 0 && (
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <FaLightbulb className="text-yellow-400" size={20} />
                  <h2 className="text-2xl font-bold text-white">Challenges & Solutions</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.challenges.map((challenge, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3 p-4 rounded-xl bg-slate-800/30 border border-slate-700/50"
                    >
                      <FaLightbulb className="text-yellow-400 mt-1 flex-shrink-0" size={16} />
                      <p className="text-slate-300">{challenge}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Opinions */}
            {project.opinions && project.opinions.length > 0 && (
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <FaComments className="text-purple-400" size={20} />
                  <h2 className="text-2xl font-bold text-white">Reflections & Learnings</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.opinions.map((opinion, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3 p-4 rounded-xl bg-slate-800/30 border border-slate-700/50"
                    >
                      <FaComments className="text-purple-400 mt-1 flex-shrink-0" size={16} />
                      <p className="text-slate-300">{opinion}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-slate-700/50">
              {project.github && (
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-3 px-6 py-3 bg-slate-800/50 border border-slate-700/50 text-white rounded-xl hover:bg-slate-700/50 transition-colors"
                >
                  <FaGithub size={18} />
                  View Source Code
                </motion.a>
              )}

              {project.link && (
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-500 hover:to-purple-500 transition-all"
                >
                  <FaExternalLinkAlt size={18} />
                  Visit Live Site
                </motion.a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ProjectDetails;
