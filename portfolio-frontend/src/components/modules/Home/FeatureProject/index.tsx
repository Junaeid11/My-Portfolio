"use client";

import ProjectFeature from "@/components/projects";
import { motion } from "framer-motion";
import { ArrowRight, Code } from "lucide-react";
import Link from "next/link";

const Feature = () => {
  return (
    <section className="section-padding bg-slate-900/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.05),transparent_50%)]" />
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="p-3 rounded-full bg-purple-500/10 border border-purple-500/20">
              <Code className="text-purple-400 text-2xl" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold gradient-text">
              Featured Projects
            </h2>
          </div>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A showcase of my best work, demonstrating technical skills, creativity, and problem-solving abilities.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <ProjectFeature />
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <Link
            href="/projects"
            className="button-primary inline-flex items-center justify-center gap-2 group"
          >
            View All Projects
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Feature;
