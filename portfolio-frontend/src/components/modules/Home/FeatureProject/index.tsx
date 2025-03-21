"use client"
import ProjectFeature from "@/components/projects";
import { motion } from "framer-motion";

const Feature = () => {
  return (
    <div>
      <div className="dark:bg-black  py-10">
        <h1 className="text-4xl font-bold text-center mb-8">Featured Projects</h1>
        <ProjectFeature />

      </div>

      <div className="flex justify-center">
        <motion.a
          href="/projects"

          whileHover={{ scale: 1.1, boxShadow: "0px 0px 12px rgba(255, 0, 0, 0.8)" }}
          whileTap={{ scale: 0.9 }}
          className="px-6 py-3 bg-red-500 text-white rounded-full shadow-lg text-lg font-semibold hover:shadow-xl transition-all duration-300"
        >
          View All
        </motion.a>
      </div>
    </div>
  )
}

export default Feature
