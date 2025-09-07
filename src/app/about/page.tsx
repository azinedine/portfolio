"use client";

import { motion, Variants } from "framer-motion";
import {
  Code2,
  Zap,
  Users,
  Award,
  Download,
  MapPin,
  Calendar,
} from "lucide-react";
import { PageHeader } from "@/components/common/PageHeader";

// Centralized animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const slideInRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const stats = [
  { icon: Code2, label: "Projects Completed", value: "50+" },
  { icon: Users, label: "Happy Clients", value: "30+" },
  { icon: Zap, label: "Years Experience", value: "5+" },
  { icon: Award, label: "Awards Won", value: "8" },
];

const skills = {
  frontend: [
    { name: "React.js", level: 95, color: "bg-blue-500" },
    { name: "Next.js", level: 90, color: "bg-gray-800" },
    { name: "TypeScript", level: 85, color: "bg-blue-600" },
    { name: "Vue.js", level: 80, color: "bg-green-500" },
    { name: "React Native", level: 88, color: "bg-cyan-500" },
    { name: "Tailwind CSS", level: 92, color: "bg-teal-500" },
  ],
  backend: [
    { name: "Node.js", level: 90, color: "bg-green-600" },
    { name: "Laravel", level: 85, color: "bg-red-500" },
    { name: "PostgreSQL", level: 82, color: "bg-blue-700" },
    { name: "MongoDB", level: 78, color: "bg-green-700" },
    { name: "Redis", level: 75, color: "bg-red-600" },
    { name: "Docker", level: 80, color: "bg-blue-500" },
  ],
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background-primary">
      {/* Page Header */}
      <PageHeader
        badge="About Me"
        subtitle="Crafting Digital"
        title="Experiences"
        description="I'm a passionate Full Stack Developer with over 5 years of experience creating modern, scalable applications. I love turning complex problems into simple, beautiful, and intuitive solutions."
        variant="centered"
      />

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-primary-900/10 to-purple-900/10">
        <div className="container-responsive">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map(({ icon: Icon, label, value }) => (
              <motion.div
                key={label}
                variants={scaleIn}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 glass rounded-xl hover:bg-white/15 transition-all"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-600/20 text-primary-400 rounded-lg mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {value}
                </div>
                <p className="text-white/60 font-medium">{label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Personal Info & Image */}
      <section className="section-padding">
        <div className="container-responsive">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              animate="visible"
              className="relative"
            >
              <div className="relative w-full max-w-md mx-auto">
                {/* Profile image with gradient border */}
                <div className="aspect-square bg-gradient-to-br from-primary-500 via-primary-600 to-blue-600 rounded-2xl shadow-glow-lg p-1">
                  <div className="w-full h-full bg-gradient-to-br from-primary-900/30 to-blue-900/30 rounded-xl flex items-center justify-center overflow-hidden">
                    <Code2 className="w-24 h-24 text-white/80" />
                  </div>
                </div>

                {/* Floating elements */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-glow text-2xl"
                >
                  🚀
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                  className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-glow text-xl"
                >
                  💡
                </motion.div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              variants={slideInRight}
              initial="hidden"
              animate="visible"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                My Journey
              </h2>

              <div className="space-y-6 text-white/80">
                <p className="leading-relaxed">
                  My journey in software development started 5 years ago when I
                  discovered my passion for creating digital solutions that make
                  a real impact. Since then, I&apos;ve had the privilege of working
                  with startups, agencies, and established companies to bring
                  their ideas to life.
                </p>

                <p className="leading-relaxed">
                  I specialize in full-stack development with a focus on React ecosystem, but I&apos;m always eager to 
                  learn new technologies and tackle challenging problems. My approach combines technical expertise 
                  with creative problem-solving to deliver exceptional results.
                </p>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary-400" />
                    <span>Based in San Francisco, CA</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-primary-400" />
                    <span>Available for freelance projects</span>
                  </div>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 btn-primary flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-padding bg-white/5 backdrop-blur-sm">
        <div className="container-responsive">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Skills & Expertise
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Here are the technologies and tools I work with to bring ideas to
              life
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Frontend Skills */}
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              animate="visible"
            >
              <h3 className="text-2xl font-bold text-white mb-6">
                Frontend Development
              </h3>
              <div className="space-y-4">
                {skills.frontend.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-white">
                        {skill.name}
                      </span>
                      <span className="text-sm text-white/60">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full ${skill.color} rounded-full`}
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Backend Skills */}
            <motion.div
              variants={slideInRight}
              initial="hidden"
              animate="visible"
            >
              <h3 className="text-2xl font-bold text-white mb-6">
                Backend Development
              </h3>
              <div className="space-y-4">
                {skills.backend.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-white">
                        {skill.name}
                      </span>
                      <span className="text-sm text-white/60">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full ${skill.color} rounded-full`}
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-responsive">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="text-center bg-gradient-to-r from-primary-600 to-purple-600 rounded-2xl p-12 text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let&apos;s Work Together
            </h2>
            <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
              Ready to bring your ideas to life? I&apos;m always excited to work on
              new projects and collaborate with amazing people.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary-600 hover:bg-primary-50 font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                Start a Project
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                View My Work
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}