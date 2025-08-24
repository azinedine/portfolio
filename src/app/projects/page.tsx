'use client'

import { useState } from 'react'
import { motion, AnimatePresence, easeOut } from 'framer-motion'
import { ExternalLink, Github, Calendar, Tag, Filter } from 'lucide-react'
import { AnimatedText } from '@/components/common/AnimatedText'

const projectsData = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce platform built with Next.js, featuring real-time inventory, payment integration, and admin dashboard.',
    image: '/api/placeholder/600/400',
    technologies: ['Next.js', 'React', 'TypeScript', 'PostgreSQL', 'Stripe'],
    category: 'Web App',
    date: '2024',
    featured: true,
    links: {
      demo: '#',
      github: '#'
    }
  },
  {
    id: 2,
    title: 'Task Management Mobile App',
    description: 'Cross-platform mobile app for team collaboration and task management with real-time sync and offline support.',
    image: '/api/placeholder/600/400',
    technologies: ['React Native', 'Expo', 'Node.js', 'MongoDB', 'Socket.io'],
    category: 'Mobile App',
    date: '2024',
    featured: true,
    links: {
      demo: '#',
      github: '#'
    }
  },
  {
    id: 3,
    title: 'AI-Powered Analytics Dashboard',
    description: 'Business intelligence dashboard with machine learning insights and interactive data visualizations.',
    image: '/api/placeholder/600/400',
    technologies: ['Vue.js', 'Python', 'TensorFlow', 'D3.js', 'FastAPI'],
    category: 'Web App',
    date: '2023',
    featured: false,
    links: {
      demo: '#',
      github: '#'
    }
  },
  {
    id: 4,
    title: 'Real Estate Platform',
    description: 'Full-stack real estate platform with property listings, virtual tours, and CRM functionality.',
    image: '/api/placeholder/600/400',
    technologies: ['Laravel', 'Vue.js', 'MySQL', 'AWS', 'WebRTC'],
    category: 'Web App',
    date: '2023',
    featured: false,
    links: {
      demo: '#',
      github: '#'
    }
  },
  {
    id: 5,
    title: 'Fitness Tracking App',
    description: 'Mobile fitness app with workout tracking, nutrition logging, and social features for fitness enthusiasts.',
    image: '/api/placeholder/600/400',
    technologies: ['React Native', 'Node.js', 'MongoDB', 'Redis', 'HealthKit'],
    category: 'Mobile App',
    date: '2023',
    featured: false,
    links: {
      demo: '#',
      github: '#'
    }
  },
  {
    id: 6,
    title: 'Cryptocurrency Portfolio Tracker',
    description: 'Real-time crypto portfolio tracking with advanced charts, alerts, and market analysis.',
    image: '/api/placeholder/600/400',
    technologies: ['React', 'Node.js', 'WebSocket', 'Chart.js', 'CoinGecko API'],
    category: 'Web App',
    date: '2022',
    featured: false,
    links: {
      demo: '#',
      github: '#'
    }
  }
]

const categories = ['All', 'Web App', 'Mobile App', 'Design']

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
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

const ProjectCard = ({ project, index }: { project: typeof projectsData[0], index: number }) => (
  <motion.div
    layout
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    transition={{ duration: 0.3, delay: index * 0.1 }}
    whileHover={{ y: -5 }}
    className="bg-white dark:bg-dark-900 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-dark-200 dark:border-dark-800"
  >
    {/* Project Image */}
    <div className="relative h-48 bg-gradient-to-br from-primary-400 to-purple-500 overflow-hidden">
      <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
        <span className="text-white text-lg font-semibold">Project Image</span>
      </div>
      
      {project.featured && (
        <div className="absolute top-4 left-4">
          <span className="bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded-full">
            Featured
          </span>
        </div>
      )}
      
      <div className="absolute top-4 right-4 flex gap-2">
        <motion.a
          href={project.links.demo}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-2 bg-white/90 dark:bg-dark-900/90 text-dark-700 dark:text-dark-300 rounded-full shadow-sm hover:bg-white dark:hover:bg-dark-800 transition-colors"
        >
          <ExternalLink className="w-4 h-4" />
        </motion.a>
        <motion.a
          href={project.links.github}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-2 bg-white/90 dark:bg-dark-900/90 text-dark-700 dark:text-dark-300 rounded-full shadow-sm hover:bg-white dark:hover:bg-dark-800 transition-colors"
        >
          <Github className="w-4 h-4" />
        </motion.a>
      </div>
    </div>

    {/* Project Content */}
    <div className="p-6">
      <div className="flex items-center justify-between mb-3">
        <span className="inline-flex items-center gap-1 text-sm text-primary-600 dark:text-primary-400 font-medium">
          <Tag className="w-3 h-3" />
          {project.category}
        </span>
        <span className="flex items-center gap-1 text-sm text-dark-500 dark:text-dark-500">
          <Calendar className="w-3 h-3" />
          {project.date}
        </span>
      </div>

      <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-3 hover:text-primary-600 dark:hover:text-primary-400 transition-colors cursor-pointer">
        {project.title}
      </h3>

      <p className="text-dark-600 dark:text-dark-400 mb-4 line-clamp-3">
        {project.description}
      </p>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 bg-dark-100 dark:bg-dark-800 text-dark-700 dark:text-dark-300 text-xs rounded-md font-medium"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* CTA */}
      <div className="flex gap-3">
        <motion.a
          href={project.links.demo}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex-1 btn-primary text-center text-sm py-2"
        >
          View Live
        </motion.a>
        <motion.a
          href={project.links.github}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex-1 btn-secondary text-center text-sm py-2"
        >
          Source Code
        </motion.a>
      </div>
    </div>
  </motion.div>
)

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProjects = selectedCategory === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === selectedCategory)

  const featuredProjects = projectsData.filter(project => project.featured)

  return (
    <div className="min-h-screen bg-white dark:bg-dark-950 pt-20">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-responsive">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-block px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium">
                My Work
              </span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <AnimatedText text="Featured" className="text-dark-900 dark:text-white" />
              <br />
              <AnimatedText text="Projects" className="gradient-text" delay={0.5} />
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-dark-600 dark:text-dark-400 leading-relaxed max-w-3xl mx-auto"
            >
              A showcase of my recent work, featuring web applications, mobile apps, and innovative solutions 
              built with modern technologies.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <section className="pb-16">
          <div className="container-responsive">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-dark-900 dark:text-white mb-4">
                Featured Projects
              </h2>
              <p className="text-dark-600 dark:text-dark-400">
                Highlighting my most impactful and innovative work
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <ProjectCard key={`featured-${project.id}`} project={project} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Projects */}
      <section className="section-padding bg-gray-50 dark:bg-dark-900/50">
        <div className="container-responsive">
          {/* Filter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-dark-900 dark:text-white mb-2">
                  All Projects
                </h2>
                <p className="text-dark-600 dark:text-dark-400">
                  {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''} found
                </p>
              </div>

              <div className="flex items-center gap-3 flex-wrap">
                <Filter className="w-5 h-5 text-dark-500 dark:text-dark-500" />
                {categories.map((category) => (
                  <motion.button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                      selectedCategory === category
                        ? 'bg-primary-600 text-white shadow-lg'
                        : 'bg-white dark:bg-dark-800 text-dark-700 dark:text-dark-300 hover:bg-primary-50 dark:hover:bg-dark-700 border border-dark-200 dark:border-dark-700'
                    }`}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <ProjectCard key={`filtered-${project.id}`} project={project} index={index} />
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="w-24 h-24 bg-dark-100 dark:bg-dark-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <Filter className="w-8 h-8 text-dark-400 dark:text-dark-600" />
              </div>
              <h3 className="text-xl font-semibold text-dark-900 dark:text-white mb-2">
                No projects found
              </h3>
              <p className="text-dark-600 dark:text-dark-400">
                Try selecting a different category to see more projects.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center bg-gradient-to-r from-primary-600 to-purple-600 rounded-2xl p-12 text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Have a Project in Mind?
            </h2>
            <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
              I'm always excited to work on new challenges and bring innovative ideas to life. 
              Let's discuss how we can collaborate on your next project.
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
                View Resume
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}