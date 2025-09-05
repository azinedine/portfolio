"use client";

import { easeOut, motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight, Eye } from "lucide-react";
import Link from "next/link";

const portfolioItems = [
  {
    id: 6,
    title: "Website for an electric company",
    category: "Web Development",
    description: "Property listing and management",
    image: "project-6",
    technologies: ["Next.js", "TypeScript", "Prisma"],
    color: "from-teal-500 to-green-500",
    links: {
      demo: "#",
      github: "#",
    },
    status: "completed",
    featured: true,
    photo: "/projects/real-estate-portal.png",
  },
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "Modern e-commerce solution",
    image: "project-1",
    technologies: ["React", "Node.js", "MongoDB"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "Mobile Banking App",
    category: "Mobile App",
    description: "Secure banking application",
    image: "project-2",
    technologies: ["React Native", "Firebase"],
    color: "from-green-500 to-emerald-500",
  },
  {
    id: 3,
    title: "Restaurant Website",
    category: "UI/UX Design",
    description: "Beautiful restaurant website",
    image: "project-3",
    technologies: ["Next.js", "Tailwind"],
    color: "from-orange-500 to-red-500",
  },
  {
    id: 4,
    title: "SaaS Dashboard",
    category: "Web Development",
    description: "Analytics dashboard",
    image: "project-4",
    technologies: ["Vue.js", "Laravel"],
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 5,
    title: "Travel Booking App",
    category: "Mobile App",
    description: "Complete travel booking platform",
    image: "project-5",
    technologies: ["Flutter", "Node.js", "PostgreSQL"],
    color: "from-indigo-500 to-blue-500",
  },
];
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: easeOut,
    },
  },
};

const PortfolioCard = ({
  project,
}: {
  project: (typeof portfolioItems)[0];
}) => (
  <motion.div
    variants={itemVariants}
    whileHover={{ y: -5, scale: 1.02 }}
    className="group cursor-pointer"
  >
    <div className="relative rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary-400/30 transition-all duration-300">
      {/* Project Image - Smaller */}
      <div className="relative aspect-video overflow-hidden">
        {/* Gradient background */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-75`}
        />

        {/* Project preview */}
        <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-2 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
              <span className="text-sm font-bold text-white">
                {project.category.charAt(0)}
              </span>
            </div>
            <p className="text-white/80 text-xs">{project.category}</p>
          </div>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-primary-900/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
          <div className="flex gap-3">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            >
              <Eye className="w-3.5 h-3.5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
            </motion.button>
          </div>
        </div>

        {/* Category badge */}
        <div className="absolute top-2 left-2 px-2 py-1 bg-black/60 backdrop-blur-sm rounded-lg text-white text-xs font-medium">
          {project.category}
        </div>
      </div>

      {/* Project Info - More Compact */}
      <div className="p-4">
        <h3 className="text-base font-bold text-white mb-1 group-hover:text-primary-300 transition-colors">
          {project.title}
        </h3>

        <p className="text-white/60 text-xs mb-3 leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1 mb-3">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 bg-primary-500/10 border border-primary-500/20 rounded-md text-primary-300 text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* View Project Link */}
        <motion.div className="flex items-center gap-1 text-primary-400 font-medium text-xs group-hover:gap-2 transition-all">
          <span>View Details</span>
          <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
        </motion.div>
      </div>
    </div>
  </motion.div>
);

export function Portfolio() {
  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-dots opacity-10" />
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-gradient-to-br from-primary-600/8 to-blue-600/8 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-gradient-to-br from-cyan-500/8 to-primary-500/8 rounded-full blur-3xl" />

      <div className="container-responsive relative z-10">
        {/* Section Header - More Compact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="block text-white">Featured</span>
            <span className="block gradient-text-primary">Projects</span>
          </h2>

          <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed mb-8">
            Explore my latest work and discover how I bring ideas to life
            through code.
          </p>

          {/* Filter buttons - Smaller */}
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {["All", "Web Dev", "Mobile", "Design"].map((filter) => (
              <motion.button
                key={filter}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-white/5 hover:bg-primary-600 border border-white/10 hover:border-primary-500 text-white text-sm rounded-xl transition-all duration-300 font-medium"
              >
                {filter}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Portfolio Grid - Tighter spacing */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {portfolioItems.map((project) => (
            <PortfolioCard key={project.id} project={project} />
          ))}
        </motion.div>

        {/* Bottom CTA - Smaller */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <Link href="/projects">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-500 hover:to-primary-600 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg group flex items-center justify-center gap-2 mx-auto"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </motion.button>
          </Link>
        </motion.div>

        {/* Simplified decorations */}
        <div className="absolute top-20 right-16 w-2 h-2 bg-primary-400/40 rounded-full animate-pulse" />
        <div
          className="absolute bottom-20 left-16 w-1.5 h-1.5 bg-cyan-400/40 rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 right-8 w-1 h-1 bg-pink-400/40 rounded-full animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>
    </section>
  );
}
