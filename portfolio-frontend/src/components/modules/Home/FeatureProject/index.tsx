"use client";


import ProjectFeature from "@/components/projects";
import { motion } from "framer-motion";

const Feature = () => {
  return (
    <div>
      <div className="dark:bg-black py-10">
        <h1 className="text-4xl text-[#94cae8] font-bold text-center mb-8">Featured Projects</h1>

        <ProjectFeature />

      </div>

      <div className="flex justify-center mt-6">
        <motion.a
          href="/projects"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 z-10  py-3 bg-gradient-to-r from-sky-700 to-sky-500 text-white rounded-full shadow-lg text-lg font-semibold hover:shadow-xl transition-all duration-300"
        >
          View All
        </motion.a>
      </div>
    </div>
  );
};

export default Feature;
