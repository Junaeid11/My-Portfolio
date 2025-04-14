"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import logo from "@/assets/WhatsApp Image 2024-09-16 at 03.04.51_c748d56f-Photoroom.png";
import { Download } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";

export default function HeroBanner() {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 md:px-12 bg-transparent">
      <div className="z-10 flex flex-col-reverse md:flex-row items-center gap-10 md:gap-20 text-white">

        {/* Profile Image */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Image
            src={logo}
            alt="Junaeid Ahmed"
            width={300}
            height={300}
            className="rounded-2xl border-4 border-white/20 shadow-[0_0_60px_rgba(255,255,255,0.1)]"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="max-w-xl space-y-6"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-blue-500 drop-shadow-[0_0_10px_#0ff]">
            Hi, I’m <br />
            <span className="text-blue-100 drop-shadow-[0_0_10px_#8000ff]">
              <Typewriter
                words={["Junaeid Ahmed Tanim"]}
                loop
                cursor
                cursorStyle="_"
                typeSpeed={80}
                deleteSpeed={40}
                delaySpeed={1500}
              />
            </span>
          </h1>


          <p className="text-base md:text-lg text-gray-300 leading-relaxed">
            A passionate{" "}
            <span className="font-semibold text-orange-400">
              Full Stack Developer
            </span>{" "}
            &{" "}
            <span className="font-semibold text-blue-400">
              Power Engineer
            </span>
            . I specialize in crafting clean, scalable web apps and solving real-world tech challenges.
          </p>

          <motion.a
            href="https://drive.google.com/uc?export=download&id=1Kwe9-JJZU2R3PxgauV7r48AlcGQeb7FK"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 text-lg font-semibold bg-gradient-to-r from-sky-700 to-sky-500 rounded-full shadow-md hover:shadow-blue-400/50 transition-all duration-300"
          >
            <Download size={20} />
            Resume
          </motion.a>
        </motion.div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-30 pointer-events-none" />
    </div>
  );
}
