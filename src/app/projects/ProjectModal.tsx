"use client";

import { useEffect, useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, Tag, Calendar, ExternalLink, ArrowRight, Github } from 'lucide-react'
import Image from 'next/image'
import { type ProjectItem } from './projectsData'

type ProjectModalProps = {
  project: ProjectItem | null
  isOpen: boolean
  onClose: () => void
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const photos = useMemo(() => (project?.photos ?? []).filter(Boolean), [project?.photos])
  const [index, setIndex] = useState(0)
  const len = photos.length

  useEffect(() => {
    if (!isOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev || ''
    }
  }, [isOpen])

  useEffect(() => {
    if (index >= len) setIndex(0)
  }, [len, index])

  const next = () => setIndex((i) => (i + 1) % (len || 1))
  const prev = () => setIndex((i) => (i - 1 + (len || 1)) % (len || 1))

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
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
              {/* Fixed-height media */}
              <div className="relative w-full h-64 md:h-80 overflow-hidden">
                {len > 0 ? (
                  <>
                    <div className="absolute inset-0">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={photos[index]}
                          initial={{ opacity: 0, scale: 1.02 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.985 }}
                          transition={{ duration: 0.25, ease: 'easeOut' }}
                          className="absolute inset-0"
                        >
                          <Image
                            src={photos[index]}
                            alt={`${project?.title ?? 'Project'} photo ${index + 1}`}
                            fill
                            className="object-cover"
                            sizes="100vw"
                          />
                        </motion.div>
                      </AnimatePresence>
                    </div>

                    {/* Controls */}
                    {len > 1 && (
                      <>
                        <button
                          type="button"
                          onClick={prev}
                          className="absolute left-3 top-1/2 -translate-y-1/2 z-10 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-black/30 text-white backdrop-blur-sm hover:bg-black/40 transition"
                          aria-label="Previous image"
                        >
                          <ChevronLeft className="h-5 w-5" />
                        </button>
                        <button
                          type="button"
                          onClick={next}
                          className="absolute right-3 top-1/2 -translate-y-1/2 z-10 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-black/30 text-white backdrop-blur-sm hover:bg-black/40 transition"
                          aria-label="Next image"
                        >
                          <ChevronRight className="h-5 w-5" />
                        </button>
                      </>
                    )}
                  </>
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-purple-600" />
                )}

                <div className="absolute inset-0 bg-black/40 pointer-events-none" />

                {/* Close Button */}
                <motion.button
                  onClick={onClose}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors z-10"
                >
                  <X className="w-5 h-5" />
                </motion.button>

                {/* Project Badge */}
                {project && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                      <Tag className="w-3 h-3" />
                      {project.category}
                    </span>
                  </div>
                )}

                {/* Featured Badge */}
                {project?.featured && (
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-yellow-400/90 backdrop-blur-sm rounded-full text-yellow-900 text-sm font-bold">
                      ⭐ Featured
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              {project && (
                <div className="p-6 md:p-8 overflow-y-auto max-h-[calc(90vh-16rem)]">
                  {/* Title and Meta */}
                  <div className="mb-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                      {project.title}
                    </h2>
                    <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                      {project.status && (
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {project.status}
                        </span>
                      )}
                      <span className="flex items-center gap-1">
                        <Tag className="w-4 h-4" />
                        {project.category}
                      </span>
                    </div>
                    <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
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
                      className="flex-1 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 border border-gray-200 dark:border-gray-700 group flex items-center justify-center gap-2"
                    >
                      <Github className="w-4 h-4" />
                      <span>View Source Code</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </motion.a>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}