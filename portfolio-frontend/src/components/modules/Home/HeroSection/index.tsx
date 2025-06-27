"use client";

import { motion } from "framer-motion";
import { Download, ArrowRight, Sparkles, Code } from "lucide-react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import Image from "next/image";
import profileImg from "@/assets/profile.jpg";

export default function HeroBanner() {
  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/Junaeid11",
      icon: FaGithub,
      color: "hover:text-gray-300 hover:bg-slate-700/50"
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/junaeidahmedtanim/",
      icon: FaLinkedin,
      color: "hover:text-blue-400 hover:bg-blue-500/10"
    },
    {
      name: "Email",
      href: "mailto:junaeidahmed979@gmail.com",
      icon: FaEnvelope,
      color: "hover:text-red-400 hover:bg-red-500/10"
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-10 px-2 sm:px-4 lg:px-8 overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.1),transparent_50%)]" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-20 left-20 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            rotate: -360,
            scale: [1.1, 1, 1.1],
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
        />
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Enhanced Content Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-center lg:text-left space-y-6"
          >
            {/* Professional Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-medium"
            >
              <Sparkles size={13} />
              Available for Opportunities
            </motion.div>

            {/* Enhanced Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-3"
            >
              <p className="text-base md:text-lg text-slate-300 font-medium tracking-wide">
                Hello, I&apos;m
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                  Junaeid Ahmed
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Tanim
                </span>
              </h1>
              <div className="text-lg md:text-xl lg:text-2xl text-slate-300 font-medium min-h-[2.2rem] flex items-center justify-center lg:justify-start">
                <Typewriter
                  words={[
                    "Full Stack Developer",
                    "Power Engineer", 
                    "Problem Solver",
                    "Tech Enthusiast"
                  ]}
                  loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={40}
                  delaySpeed={2500}
                />
              </div>
            </motion.div>

            {/* Enhanced Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-base md:text-lg text-slate-400 leading-relaxed max-w-xl mx-auto lg:mx-0 font-light"
            >
              Crafting exceptional digital experiences with cutting-edge technologies. 
              Specialized in building scalable web applications and innovative solutions 
              that drive business growth and user satisfaction.
            </motion.p>

            {/* Enhanced CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            >
              <motion.a
                href="https://drive.google.com/uc?export=download&id=10_o6gOWtf8RwTa1G4GW2aGWdE0Jzm6Co"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden text-sm"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Download size={16} className="relative z-10 group-hover:animate-bounce" />
                <span className="relative z-10">Download Resume</span>
                <ArrowRight size={13} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                href="/projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-800/50 border border-slate-700/50 text-white font-semibold rounded-xl hover:bg-slate-700/50 hover:border-slate-600/50 transition-all duration-300 text-sm"
              >
                <Code size={16} className="group-hover:rotate-12 transition-transform" />
                <span>View Projects</span>
                <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>

            {/* Enhanced Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="flex justify-center lg:justify-start gap-3"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 1.1 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-slate-400 transition-all duration-300 ${social.color}`}
                  aria-label={social.name}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Developer Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Enhanced Glow Effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-cyan-500/30 rounded-3xl blur-3xl animate-pulse" />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-3xl blur-2xl" />
              {/* Profile Image */}
              <div className="relative">
                <Image
                  src={profileImg}
                  alt="Junaeid Ahmed Tanim"
                  width={400}
                  height={500}
                  className="rounded-3xl border-4 border-slate-700/50 shadow-2xl relative z-10 hover:border-blue-500/50 transition-colors duration-500 object-cover w-[320px] h-[420px] md:w-[400px] md:h-[500px]"
                  priority
                />
              </div>
              {/* Floating Elements (optional, keep for style) */}
              <motion.div
                animate={{ y: [-15, 15, -15], rotate: [0, 180, 360] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-sm"
              />
              <motion.div
                animate={{ y: [15, -15, 15], rotate: [360, 180, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 w-10 h-10 bg-gradient-to-r from-purple-500/30 to-cyan-500/30 rounded-full blur-sm"
              />
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-blue-500/10 rounded-full blur-md"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-slate-400 text-sm font-medium">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-3 bg-slate-400 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
