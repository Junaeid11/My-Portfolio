"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaGraduationCap, FaBook, FaAward } from "react-icons/fa";
import { motion } from "framer-motion";

const MyEducation = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });

    window.addEventListener("resize", AOS.refresh);
    window.addEventListener("scroll", AOS.refresh);

    return () => {
      window.removeEventListener("resize", AOS.refresh);
      window.removeEventListener("scroll", AOS.refresh);
    };
  }, []);

  const educationData = [
    {
      title: "Diploma In Engineering (Power Technology)",
      institution: "Chattogram Polytechnic Institute, Chattogram",
      duration: "August 2020 - January 2025",
      result: "3.16",
      description: "Comprehensive study of power systems, electrical engineering principles, and industrial applications.",
      align: "left",
    },
  ];

  const courseData = [
    {
      title: "Complete Web Development",
      institution: "Programming Hero",
      duration: "January 2024 - October 2024",
      description: "Full-stack web development course covering modern technologies and best practices.",
      align: "right",
    },
    {
      title: "Industrial Attachment",
      institution: "1320 MW SS POWER PLANT, Banshkhali, Chattogram",
      duration: "September 2024 - December 2024",
      description: "Hands-on experience in power plant operations, maintenance, and industrial processes.",
      align: "left",
    },
    {
      title: "Next Level Web Development",
      institution: "Programming Hero",
      duration: "November 2024 - March 2025",
      description: "Advanced web development techniques, modern frameworks, and industry-standard practices.",
      align: "right",
    },
  ];

  return (
    <section className="section-padding bg-slate-900/50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.05),transparent_50%)]" />
      
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
            <div className="p-3 rounded-full bg-blue-500/10 border border-blue-500/20">
              <FaGraduationCap className="text-blue-400 text-2xl" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold gradient-text">
              Education & Experience
            </h2>
          </div>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            My academic journey and professional development through education and specialized training programs.
          </p>
        </motion.div>

        {/* Academic Education */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-2xl font-semibold text-center text-slate-200 mb-12"
          >
            Academic Qualification
          </motion.h3>

          <div className="relative">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: edu.align === "right" ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className={`flex gap-8 lg:gap-12 ${edu.align === "right" ? "md:flex-row-reverse" : "md:flex-row"} flex-col-reverse items-center mb-12`}
              >
                {/* Content Card */}
                <div className="w-full md:w-1/2">
                  <div className="glass-effect p-8 rounded-2xl card-hover">
                    <div className="flex items-center gap-3 mb-4">
                      <FaAward className="text-blue-400 text-xl" />
                      <h4 className="text-xl font-semibold text-white">{edu.title}</h4>
                    </div>
                    <p className="text-slate-300 font-medium mb-2">{edu.institution}</p>
                    <p className="text-slate-400 mb-3">{edu.duration}</p>
                    <p className="text-slate-400 mb-4 leading-relaxed">{edu.description}</p>
                    <div className="flex items-center gap-2">
                      <span className="text-slate-400">GPA:</span>
                      <span className="text-blue-400 font-bold text-lg">{edu.result}</span>
                    </div>
                  </div>
                </div>

                {/* Timeline Connector */}
                <div className="flex flex-col items-center">
                  <div className="p-4 rounded-full bg-blue-500/10 border-2 border-blue-500/30">
                    <FaGraduationCap className="text-blue-400 text-2xl" />
                  </div>
                  <div className="h-24 w-1 bg-gradient-to-b from-blue-500/50 to-transparent"></div>
                </div>

                {/* Empty space for alignment */}
                <div className="w-full md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Professional Courses */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-2xl font-semibold text-center text-slate-200 mb-12"
          >
            Professional Development
          </motion.h3>

          <div className="relative">
            {courseData.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: course.align === "right" ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
                className={`flex gap-8 lg:gap-12 ${course.align === "right" ? "md:flex-row-reverse" : "md:flex-row"} flex-col-reverse items-center mb-12`}
              >
                {/* Content Card */}
                <div className="w-full md:w-1/2">
                  <div className="glass-effect p-8 rounded-2xl card-hover">
                    <div className="flex items-center gap-3 mb-4">
                      <FaBook className="text-purple-400 text-xl" />
                      <h4 className="text-xl font-semibold text-white">{course.title}</h4>
                    </div>
                    <p className="text-slate-300 font-medium mb-2">{course.institution}</p>
                    <p className="text-slate-400 mb-3">{course.duration}</p>
                    <p className="text-slate-400 leading-relaxed">{course.description}</p>
                  </div>
                </div>

                {/* Timeline Connector */}
                <div className="flex flex-col items-center">
                  <div className="p-4 rounded-full bg-purple-500/10 border-2 border-purple-500/30">
                    <FaBook className="text-purple-400 text-2xl" />
                  </div>
                  {index < courseData.length - 1 && (
                    <div className="h-24 w-1 bg-gradient-to-b from-purple-500/50 to-transparent"></div>
                  )}
                </div>

                {/* Empty space for alignment */}
                <div className="w-full md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyEducation;
