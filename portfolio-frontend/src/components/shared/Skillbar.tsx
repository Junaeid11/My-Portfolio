/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useEffect, useState } from "react";
import { getMySkills } from "@/service/skills";
import Image from "next/image";
import { motion } from "framer-motion";
import Spinner from "./Spinner";


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
      <div className="text-center text-red-500 text-xl font-semibold">
        ⚠️ Failed .
      </div>
    );
  }

  return (
    <div className="  min-h-[70vh]  flex flex-col items-center justify-center text-white dark:text-white px-5"
    // style={{ backgroundImage: "url('https://png.pngtree.com/thumb_back/fh260/background/20210324/pngtree-abstract-portfolio-pink-memphis-playful-image_593414.jpg')",backgroundSize:"cover" ,backgroundRepeat:"no-repeat", }}
    >
      <motion.h1
        className="text-4xl text-[#17a0ef] font-bold mb-3"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Tech Stack
      </motion.h1>
      <motion.p
        className="text-gray-600 dark:text-gray-400 text-lg mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        I CONSTANTLY TRY TO IMPROVE 🚀
      </motion.p>
      {loading ? (
        <Spinner />
      ) : (
        <motion.div
          className="grid mb-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1, transition: { staggerChildren: 0.1 } },
          }}
        >
          {skills.map((tech, index) => (
            <motion.div
              key={index}
              className="flex items-center space-x-3 p-3 bg-slate-100/15 dark:bg-gray-800 rounded-lg shadow-xl hover:scale-105 transition-transform"
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Image
                src={tech.icon[0]}
                alt={tech.name}
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="text-[#8dc5e3] dark:text-white text-lg font-semibold">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      )}
      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          />
        </div>
      </div>
    </div>
  );
};

export default TechStack;
