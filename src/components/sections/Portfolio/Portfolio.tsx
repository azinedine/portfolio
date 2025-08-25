'use client'

import { easeOut, motion } from 'framer-motion'
import { ExternalLink, Github, ArrowRight, RotateCcw } from 'lucide-react'

const portfolioItems = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "Modern e-commerce solution with advanced features",
    image: "project-1",
    technologies: ["React", "Node.js", "MongoDB"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    title: "Mobile Banking App",
    category: "Mobile App",
    description: "Secure and intuitive banking application",
    image: "project-2",
    technologies: ["React Native", "Firebase"],
    color: "from-green-500 to-emerald-500"
  },
  {
    id: 3,
    title: "Restaurant Website",
    category: "UI/UX Design",
    description: "Beautiful restaurant website with online ordering",
    image: "project-3",
    technologies: ["Next.js", "Tailwind"],
    color: "from-orange-500 to-red-500"
  },
  {
    id: 4,
    title: "SaaS Dashboard",
    category: "Web Development",
    description: "Analytics dashboard for business intelligence",
    image: "project-4",
    technologies: ["Vue.js", "Laravel"],
    color: "from-purple-500 to-pink-500"
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOut,
    },
  },
}

const PortfolioCard = ({ project, index }: { project: typeof portfolioItems[0], index: number }) => (
  <motion.div
    variants={itemVariants}
    whileHover={{ y: -10 }}
    className="group cursor-pointer"
  >
    <div className="relative rounded-3xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500">
      {/* Project Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        {/* Placeholder background with gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-80`} />
        
        {/* Project preview overlay */}
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
          <div className="text-center">
            <div className="w-24 h-24 mx-auto mb-4 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
              <span className="text-2xl font-bold text-white">{project.category.charAt(0)}</span>
            </div>
            <p className="text-white/80 text-sm">{project.category}</p>
          </div>
        </div>

        {/* Hover overlay with actions */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            >
              <Github className="w-5 h-5" />
            </motion.button>
          </div>
        </div>

        {/* Category badge */}
        <div className="absolute top-4 left-4 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-white text-xs font-medium">
          {project.category}
        </div>
      </div>

      {/* Project Info */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-300 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-white/70 mb-4">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-white/10 rounded-lg text-white/80 text-xs"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* View Project Link */}
        <motion.div
          className="flex items-center gap-2 text-primary-400 font-medium group-hover:gap-3 transition-all"
        >
          <span>View Project</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </motion.div>
      </div>
    </div>
  </motion.div>
)

export function Portfolio() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-dots opacity-20" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-br from-primary-600/10 to-blue-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-gradient-to-br from-cyan-500/10 to-primary-500/10 rounded-full blur-3xl" />

      <div className="container-responsive relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="block text-white">Our Awesome</span>
            <span className="block gradient-text-primary">Portfolio</span>
          </h2>

          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-12">
            Discover our latest projects and see how we transform ideas into 
            exceptional digital experiences.
          </p>

          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {['All', 'Web Development', 'Mobile App', 'UI/UX Design'].map((filter) => (
              <motion.button
                key={filter}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-white/10 hover:bg-primary-600 border border-white/20 hover:border-primary-500 text-white rounded-2xl transition-all duration-300 font-medium"
              >
                {filter}
              </motion.button>
            ))}
          </div>

          {/* Refresh icon */}
          <motion.button
            whileHover={{ rotate: 180, scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="absolute top-0 right-8 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300"
          >
            <RotateCcw className="w-5 h-5 text-white" />
          </motion.button>
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          {portfolioItems.map((project, index) => (
            <PortfolioCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center flex justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-outline group flex items-center justify-center gap-2"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>

        {/* Floating decorative elements */}
        <div className="absolute top-32 right-20 w-8 h-8 border border-primary-400/30 rounded rotate-45 animate-pulse" />
        <div className="absolute bottom-32 left-20 w-6 h-6 bg-cyan-400/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-10 w-4 h-4 bg-pink-400/50 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />

        {/* Plus decorations */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-20 text-primary-400/30"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2v20M2 12h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </motion.div>

        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 right-32 text-blue-400/30"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2v20M2 12h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </motion.div>
      </div>
    </section>
  )
}