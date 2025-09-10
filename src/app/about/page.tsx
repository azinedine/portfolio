"use client";

import { motion } from "framer-motion";
import NextImage from "next/image";
import {
  Code2,
  Download,
  MapPin,
  Calendar,
  Heart,
  Globe,
  Smartphone,
} from "lucide-react";
import { AnimatedText } from "@/components/common/AnimatedText";
import { stats, skills, values, funFacts } from "./data";
import { containerVariants, itemVariants, slideInLeft, slideInRight } from "./animations";
import StatCard from "./StatCard";
import ValueCard from "./ValueCard";
import FunFactCard from "./FunFactCard";
import SkillBar from "./SkillBar";
import { useRouter } from "next/navigation";

export default function AboutPage() {

  const router = useRouter()
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50/30 dark:from-gray-950 dark:via-gray-900 dark:to-purple-950/30 pt-20">
      {/* Floating background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-40 right-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-indigo-400/10 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      {/* Hero Section */}
      <section className="relative section-padding">
        <div className="container mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto text-center mb-20"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full font-semibold text-sm mb-6"
            >
              <Heart className="w-4 h-4" />
              About Me
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
            >
              <AnimatedText
                text="Crafting Digital"
                className="text-gray-900 dark:text-white" 
              />
              <br />
              <AnimatedText
                text="Experiences"
                className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent"
                delay={0.5}
              />
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto font-light"
            >
              I&apos;m <span className="font-semibold text-purple-600 dark:text-purple-400">A.ZINEDDINE</span>, a passionate Full Stack Developer with over 4 years of experience creating modern, scalable applications. I love turning complex problems into simple, beautiful, and intuitive solutions.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative section-padding bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
        <div className="container mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <StatCard key={stat.label} stat={stat} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Personal Info & Image */}
      <section className="relative section-padding">
        <div className="container mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              animate="visible"
              className="relative"
            >
              <div className="relative w-full max-w-lg mx-auto">
                {/* Profile image with gradient border */}
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="relative aspect-square bg-gradient-to-br from-purple-500 via-blue-600 to-indigo-600 rounded-3xl shadow-2xl shadow-purple-500/25 p-2 group cursor-pointer"
                >
                  <div className="relative w-full h-full rounded-2xl overflow-hidden">
                    {/* Background Image */}
                    <NextImage 
                      src="/me.jpg" 
                      alt="A.ZINEDDINE - Full Stack Developer" 
                      fill
                      className="object-cover transition-all duration-500 group-hover:scale-110 group-hover:opacity-80" 
                      priority
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-blue-900/30 to-indigo-900/40 group-hover:from-purple-900/60 group-hover:via-blue-900/50 group-hover:to-indigo-900/60 transition-all duration-500" />
                    
                    {/* Content Overlay */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-10">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mb-4"
                      >
                        <Code2 className="w-16 h-16 text-white/90 mx-auto mb-4 group-hover:text-white transition-colors duration-300" />
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="space-y-2"
                      >
                        <div className="text-white font-bold text-2xl group-hover:text-white transition-colors duration-300">
                          A.ZINEDDINE
                        </div>
                        <div className="text-white/80 text-lg group-hover:text-white/90 transition-colors duration-300">
                          Full Stack Developer
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>

                {/* Floating elements */}
                <motion.div
                  animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-xl text-3xl"
                >
                  🚀
                </motion.div>

                <motion.div
                  animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
                  transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                  className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center shadow-xl text-2xl"
                >
                  💡
                </motion.div>

                <motion.div
                  animate={{ x: [0, 10, 0], scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 2 }}
                  className="absolute top-1/2 -right-8 w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-xl flex items-center justify-center shadow-xl text-xl"
                >
                  ⚡
                </motion.div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              variants={slideInRight}
              initial="hidden"
              animate="visible"
              className="space-y-8"
            >
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                  My Journey
                </h2>

                <div className="space-y-6 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  <p>
                    My journey in software development started over 4 years ago when I discovered my passion for creating digital solutions that make a real impact. From education to full-stack development and project management, I&apos;ve continuously evolved my skills.
                  </p>

                  <p>
                    I specialize in <span className="font-semibold text-purple-600 dark:text-purple-400">React.js</span>, <span className="font-semibold text-blue-600 dark:text-blue-400">React Native</span>, and <span className="font-semibold text-indigo-600 dark:text-indigo-400">Node.js</span>, but I&apos;m always eager to learn new technologies and tackle challenging problems. My approach combines technical expertise with creative problem-solving to deliver exceptional results.
                  </p>

                  <p>
                    Currently, I work as a <span className="font-semibold text-purple-600 dark:text-purple-400">Project Manager + Mobile Developer</span> at TakkiTech Company in Istanbul, where I lead development teams and create innovative tourism applications.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <motion.div 
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-xl"
                >
                  <MapPin className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  <span className="font-medium text-gray-900 dark:text-white">Based in Khemis Miliana, Algeria</span>
                </motion.div>
                <motion.div 
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-xl"
                >
                  <Calendar className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  <span className="font-medium text-gray-900 dark:text-white">Available for freelance projects</span>
                </motion.div>
                <motion.div 
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-xl"
                >
                  <Globe className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                  <span className="font-medium text-gray-900 dark:text-white">Remote work specialist</span>
                </motion.div>
              </div>

              <motion.button
                onClick={() => window.open('/Zineddine_Amariche_Resume.pdf', '_blank')}
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,0,0,0.2)" }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center gap-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg"
              >
                <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Download Resume
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative section-padding bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
        <div className="container mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              My Core Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-light">
              The principles that guide my work and define my approach to development
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => (
              <ValueCard key={value.title} value={value} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="relative section-padding">
        <div className="container mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Skills & Expertise
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-light">
              The technologies and tools I use to bring ideas to life and create exceptional digital experiences
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Frontend Skills */}
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              animate="visible"
              className="space-y-8"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Frontend & Mobile
                </h3>
              </div>
              
              <div className="space-y-6">
                {skills.frontend.map((skill, index) => (
                  <SkillBar key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </motion.div>

            {/* Backend Skills */}
            <motion.div
              variants={slideInRight}
              initial="hidden"
              animate="visible"
              className="space-y-8"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Backend & Database
                </h3>
              </div>
              
              <div className="space-y-6">
                {skills.backend.map((skill, index) => (
                  <SkillBar key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Fun Facts Section */}
      <section className="relative section-padding bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
        <div className="container mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Fun Facts About Me
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-light">
              Beyond coding, here&apos;s what makes me tick
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            {funFacts.map((fact, index) => (
              <FunFactCard key={fact.title} fact={fact} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative section-padding">
        <div className="container mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            <div className="relative bg-white dark:bg-gray-900 rounded-3xl p-16 shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden">
              <div className="absolute inset-0 bg-dots opacity-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-blue-600/10 to-indigo-600/10 dark:from-purple-600/20 dark:via-blue-600/20 dark:to-indigo-600/20" />
              
              <div className="relative z-10">
                <motion.h2 
                  whileHover={{ scale: 1.05 }}
                  className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white"
                >
                  Let&apos;s Work Together
                </motion.h2>
                <p className="text-xl text-gray-700 dark:text-gray-300 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
                  Ready to bring your ideas to life? I&apos;m always excited to work on new projects 
                  and collaborate with amazing people to create something extraordinary.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <motion.button
                    onClick={() => router.push('/contact')}
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(109, 74, 236, 0.3)" }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold px-10 py-4 rounded-xl transition-all duration-300 shadow-lg"
                  >
                    Let&apos;s Work Together
                  </motion.button>
                  <motion.button
                    onClick={() => {
                      const link = document.createElement('a');
                      link.href = '/resume.pdf';
                      link.download = 'A.ZINEDDINE_Resume.pdf';
                      link.target = '_blank';
                      link.click();
                    }}
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)" }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-bold px-10 py-4 rounded-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 inline-flex items-center justify-center gap-2"
                  >
                    <Download className="w-5 h-5" />
                    Download Resume
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 