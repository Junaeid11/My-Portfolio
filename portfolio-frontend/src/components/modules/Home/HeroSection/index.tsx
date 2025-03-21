"use client";

import { motion } from "framer-motion";
import Image from "next/image";;
import logo from "@/assets/Professional LinkedIn Profile Picture.png";
import { Download } from "lucide-react";


export default function HeroBanner() {
  return (
    <div>
      <div className="relative min-h-screen flex flex-col items-center justify-center bg-[rgb(220,236,216)]  text-gray-800  overflow-hidden px-6 md:px-12">
        <div className="absolute inset-0 opacity-40">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, }}
            className="w-full h-full  bg-cover bg-center blur-sm"
          />
        </div>
        <div className="flex flex-col md:flex-row items-center relative z-10 text-center md:text-left space-y-6 md:space-y-0 md:space-x-12">

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Image
              src={logo}
              alt="Junaeid Ahmed"
              width={500}
              height={500}
            />
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="max-w-xl p-6"
          >
            <h1
              data-aos="zoom-in-up"
              className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-700 drop-shadow-lg animate-gradient-text"
            >
              <span className="text-green-800">Hi,</span> I&apos;m Junaeid Ahmed Tanim
            </h1>
            <p className="py-6 text-lg">
              A passionate <span className="font-bold text-red-400">Full Stack Developer</span> and <span className="font-bold text-red-400">Power Engineer</span>. I love building scalable web applications and solving real-world problems with technology.
            </p>

            <motion.a
              href="https://drive.google.com/uc?export=download&id=1Kwe9-JJZU2R3PxgauV7r48AlcGQeb7FK"
              download
              whileHover={{ scale: 1.1, boxShadow: "0px 0px 12px rgba(255, 0, 0, 0.8)" }}
              whileTap={{ scale: 0.9 }}
              className="flex w-40 items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-500 to-red-700 text-white rounded-full shadow-lg text-lg font-semibold hover:shadow-xl transition-all duration-300"
            >
              <Download />

              Resume
            </motion.a>



          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-12 w-full max-w-2xl"
        >


        </motion.div>

      </div>


    </div>


  );
}


