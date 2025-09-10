"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { AnimatedText } from "@/components/common/AnimatedText";
import { viewportVariants, staggerContainer, animationConfig } from "./animations";

const HeroSection = () => {
  return (
    <section 
      id="contact-hero" 
      className="h-screen min-h-[100vh] flex items-center justify-center pt-20 pb-8"
      aria-labelledby="hero-heading"
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={animationConfig.viewport}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <motion.div variants={viewportVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full font-semibold text-sm">
              <Mail className="w-4 h-4" aria-hidden="true" />
              Get In Touch
            </span>
          </motion.div>

          <motion.h1 
            id="hero-heading"
            variants={viewportVariants} 
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
          >
            <AnimatedText 
              text="Let's Create" 
              className="text-gray-900 dark:text-white" 
            />
            <br />
            <AnimatedText 
              text="Something Amazing" 
              className="bg-gradient-to-r pb-2 from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent" 
              delay={0.5} 
            />
          </motion.h1>

          <motion.p
            variants={viewportVariants}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto font-light"
          >
            Have a project in mind or want to collaborate? I&apos;d love to hear about your ideas and discuss how we can work together to bring them to life.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;