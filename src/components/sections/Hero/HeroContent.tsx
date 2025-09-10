"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import Link from "next/link";

const techStack = [
  "React.js",
  "Next.js",
  "TypeScript",
  "React Native",
  "Vue.js",
  "Node.js",
];



export function HeroContent() {
  return (
    <div className="pt-16 sm:pt-20 md:pt-[60px] xl:pt-5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-left"
      >
        {/* Greeting Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="mb-6 sm:mb-8"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-r from-primary-500/20 to-blue-500/20 border border-primary-400/30 text-primary-700 dark:text-primary-200 rounded-full text-xs sm:text-sm font-medium backdrop-blur-sm"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
            </motion.div>
            <span className="text-xs sm:text-sm">{`Hello, I'm A.ZINEDDINE`}</span>
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-pulse" />
          </motion.div>
        </motion.div>

        {/* Main heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="mb-6 sm:mb-8"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[0.9] tracking-tight">
            <motion.span
              className="block text-gray-900 dark:text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Full Stack
            </motion.span>
            <motion.span
              className="block gradient-text-primary"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Developer
            </motion.span>
            <motion.span
              className="block text-gray-900 dark:text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-normal mt-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              & Digital Creator
            </motion.span>
          </h1>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-white/80 mb-8 sm:mb-10 leading-relaxed max-w-2xl"
        >
          {`I'm a passionate `}
          <span className="text-primary-600 dark:text-primary-300 font-semibold">
            Full Stack Developer
          </span>{" "}
          with 4+ years of experience in creating{" "}
          <span className="text-gray-900 dark:text-white font-semibold">
            modern web applications
          </span>
          , <span className="text-cyan-600 dark:text-cyan-300 font-semibold">mobile apps</span>,
          and{" "}
          <span className="text-green-600 dark:text-green-300 font-semibold">
            scalable digital solutions
          </span>
          . I transform ideas into reality using cutting-edge technologies.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10 sm:mb-12"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              href="/contact"
              className="group flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-500 hover:to-primary-600 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-2xl shadow-glow transition-all duration-300 min-h-[48px] sm:min-h-[56px] text-sm sm:text-base"
            >
              <span>{`Let's Work Together`}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              href="/projects"
              className="group flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gray-100/80 dark:bg-white/10 backdrop-blur-sm border border-gray-300/50 dark:border-white/20 hover:border-gray-400/50 dark:hover:border-white/30 text-gray-900 dark:text-white font-semibold rounded-2xl transition-all duration-300 hover:bg-gray-200/80 dark:hover:bg-white/15 min-h-[48px] sm:min-h-[56px] text-sm sm:text-base"
            >
              <div className="w-4 h-4 sm:w-5 sm:h-5 bg-gray-300/50 dark:bg-white/20 rounded-full flex items-center justify-center group-hover:bg-primary-500/60 transition-all duration-300">
                <Play className="w-1.5 h-1.5 sm:w-2 sm:h-2 ml-0.5" />
              </div>
              <span>View My Work</span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Tech stack */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          className="space-y-4"
        >
          <p className="text-xs sm:text-sm text-gray-500 dark:text-white/60 font-medium tracking-wide uppercase">
            Technologies I Specialize In
          </p>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {techStack.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + index * 0.1, duration: 0.4 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-2 sm:px-3 py-1.5 sm:py-2 bg-gray-100/80 dark:bg-white/10 backdrop-blur-sm border border-gray-300/50 dark:border-white/20 text-gray-700 dark:text-white/90 rounded-lg text-xs sm:text-sm font-medium hover:bg-gray-200/80 dark:hover:bg-white/15 hover:border-primary-400/40 transition-all duration-300 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
 