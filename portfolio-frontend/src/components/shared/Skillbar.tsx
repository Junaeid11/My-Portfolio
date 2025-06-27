/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useEffect, useState } from "react";
import { getMySkills } from "@/service/skills";
import Image from "next/image";
import { motion } from "framer-motion";
import Spinner from "./Spinner";
import { Zap, Code, Database, Palette, Server } from "lucide-react";

export interface TSkills {
  _id: string,
  name: string;
  icon: string[];
}

const TechStack = () => {
  const [skills, setSkills] = useState<TSkills[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const { data } = await getMySkills();
        setSkills(data);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  if (error) {
    return (
      <section className="section-padding bg-slate-900/30">
        <div className="container-custom text-center">
          <div className="p-8 rounded-2xl bg-red-500/10 border border-red-500/20">
            <p className="text-red-400 text-lg font-medium">
              ⚠️ Failed to load skills. Please try again later.
            </p>
          </div>
        </div>
      </section>
    );
  }

 

  return (
    <section className="section-padding bg-slate-900/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_50%)]" />
      
      {/* Background Video */}
      <div className="absolute inset-0 opacity-10">
        <video
          className="w-full h-full object-cover"
          preload="false"
          playsInline
          loop
          muted
          autoPlay
          src="/cards-video.webm"
        />
      </div>
      
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
              <Zap className="text-blue-400 text-2xl" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold gradient-text">
              Technical Skills
            </h2>
          </div>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Continuously expanding my technical expertise with modern technologies and best practices.
          </p>
        </motion.div>

        {loading ? (
          <div className="flex justify-center py-16">
            <Spinner />
          </div>
        ) : (
          <>
            {/* Skills Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 mb-12"
            >
              {skills.map((tech, index) => (
                <motion.div
                  key={tech._id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.05,
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                  className="group"
                >
                  <div className="glass-effect p-6 rounded-2xl text-center card-hover h-full">
                    <div className="flex flex-col items-center space-y-4">
                      <div className="relative">
                        <Image
                          src={tech.icon[0]}
                          alt={tech.name}
                          width={48}
                          height={48}
                          className="rounded-xl group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <span className="text-slate-200 font-medium text-sm group-hover:text-white transition-colors">
                        {tech.name}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Skill Categories */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
            >
        
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
};

export default TechStack;
