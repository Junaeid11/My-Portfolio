"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaLightbulb, FaPalette, FaRocket } from "react-icons/fa";

import CertificateSection from "@/components/modules/Home/Certification";

const AboutMe = () => {
  return (
    <div>
      <div className="flex mb-10 flex-col items-center justify-center min-h-screen px-6 py-12 bg-gray-50 dark:bg-gray-900">
        {/* Title */}
        <motion.h1
          className="text-4xl font-extrabold text-center text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About Me 🚀
        </motion.h1>

        {/* Description */}
        <motion.p
          className="mt-4 text-lg text-gray-600 dark:text-gray-300 text-center max-w-2xl"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Hi, I&#39;m <span className="font-semibold text-blue-500">Junaeid Ahmed Tanim</span>, a **Full-Stack Developer & UI/UX Designer**
          passionate about crafting **scalable, modern, and interactive web experiences** using **Next.js, Tailwind CSS, and Framer Motion**.
          I love pushing the boundaries of **animations, interactivity, and intuitive UI/UX**.
        </motion.p>

        {/* Skills & Interests */}
        <div className="mt-10 max-w-4xl">
          <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-200 mb-5">💡 My Expertise & Interests</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Web Development */}
            <motion.div className="flex items-center gap-4 p-5 bg-white dark:bg-gray-800 rounded-lg shadow-lg" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.7, duration: 0.8 }}>
              <FaCode className="text-blue-500 text-4xl" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Web Development</h3>
                <p className="text-gray-600 dark:text-gray-400">Building **scalable, high-performance** full-stack applications.</p>
              </div>
            </motion.div>

            {/* UI/UX & Animations */}
            <motion.div className="flex items-center gap-4 p-5 bg-white dark:bg-gray-800 rounded-lg shadow-lg" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.9, duration: 0.8 }}>
              <FaPalette className="text-purple-500 text-4xl" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">UI/UX & Animations</h3>
                <p className="text-gray-600 dark:text-gray-400">Creating **engaging user experiences** with smooth interactions.</p>
              </div>
            </motion.div>

            {/* Creativity */}
            <motion.div className="flex items-center gap-4 p-5 bg-white dark:bg-gray-800 rounded-lg shadow-lg" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.1, duration: 0.8 }}>
              <FaLightbulb className="text-yellow-500 text-4xl" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Creative Problem-Solving</h3>
                <p className="text-gray-600 dark:text-gray-400">Innovating **unique solutions** for complex development challenges.</p>
              </div>
            </motion.div>

            {/* Learning & Growth */}
            <motion.div className="flex  items-center gap-4 p-5 bg-white dark:bg-gray-800 rounded-lg shadow-lg" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.3, duration: 0.8 }}>
              <FaRocket className="text-red-500 text-4xl" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">🚀 Lifelong Learner</h3>
                <p className="text-gray-600 dark:text-gray-400">Constantly exploring **new technologies** to **push boundaries**.</p>
              </div>
            </motion.div>
          </div>
          <div className="mt-10 ">
            <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-200 mb-5">💭 My Dream</h2>
            <motion.p className="text-lg text-gray-600 dark:text-gray-400 text-center "
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 1 }}>
              My dream is to **build a groundbreaking web-based platform** that enhances user experiences with **cutting-edge technology, interactivity, and seamless UI/UX**. I aim to contribute to **the open-source community** and create impactful projects that push the boundaries of modern web development. 🚀
            </motion.p>
          </div>
        </div>



      </div>
      <CertificateSection />
    </div>
  );
};

export default AboutMe;