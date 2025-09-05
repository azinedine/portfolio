'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink, Github, Calendar, Tag, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { type PortfolioItem } from './portfolioData'

type ProjectModalProps = {
  project: PortfolioItem | null
  isOpen: boolean
  onClose: () => void
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-4 md:inset-8 lg:inset-16 z-50 flex items-center justify-center"
          >
            <div className="bg-white dark:bg-dark-900 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
              {/* Header */}
              <div className="relative">
                {/* Project Image */}
                <div className="relative h-64 md:h-80 overflow-hidden">
                  {project.photo ? (
                    <Image
                      src={project.photo}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                    />
                  ) : (
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-90`}
                    />
                  )}

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40" />

                  {/* Close Button */}
                  <motion.button
                    onClick={onClose}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </motion.button>

                  {/* Project Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                      <Tag className="w-3 h-3" />
                      {project.category}
                    </span>
                  </div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-yellow-400/90 backdrop-blur-sm rounded-full text-yellow-900 text-sm font-bold">
                        ⭐ Featured
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 overflow-y-auto max-h-[calc(90vh-16rem)]">
                {/* Title and Meta */}
                <div className="mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-dark-900 dark:text-white mb-2">
                    {project.title}
                  </h2>
                  
                  <div className="flex items-center gap-4 text-sm text-dark-600 dark:text-dark-400 mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {project.status}
                    </span>
                    <span className="flex items-center gap-1">
                      <Tag className="w-4 h-4" />
                      {project.category}
                    </span>
                  </div>

                  <p className="text-lg text-dark-600 dark:text-dark-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-dark-900 dark:text-white mb-4">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm rounded-lg font-medium border border-primary-200 dark:border-primary-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-500 hover:to-primary-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 shadow-lg group flex items-center justify-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>View Live Demo</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </motion.a>
                  
                  <motion.a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 bg-dark-100 dark:bg-dark-800 hover:bg-dark-200 dark:hover:bg-dark-700 text-dark-900 dark:text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 border border-dark-200 dark:border-dark-700 group flex items-center justify-center gap-2"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Source Code</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
