"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Github, Calendar, Tag } from "lucide-react";
import { type ProjectItem } from "./projectsData";

type ProjectCardProps = {
  project: ProjectItem;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <AnimatePresence>
      <motion.div
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
            <span className="text-white text-lg font-semibold">
              Project Image
            </span>
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
              title="View Live Demo"
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
              title="View Source Code"
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
    </AnimatePresence>
  );
}
