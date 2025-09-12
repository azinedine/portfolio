"use client";

import { motion, type Variants } from "framer-motion";
import { ExternalLink, Github, Eye, Ban } from "lucide-react";
import { MediaCarousel } from "./MediaCarousel";
import { type PortfolioItem } from "./portfolioData";

type PortfolioCardProps = {
  project: PortfolioItem;
  variants?: Variants;
  onViewDetails?: (project: PortfolioItem) => void;
};

export function PortfolioCard({ project, variants, onViewDetails }: PortfolioCardProps) {
  const images = (project as PortfolioItem)?.photos?.length
    ? (project as PortfolioItem).photos
    : project.photos
    ? (project as PortfolioItem).photos
    : [];

  return (
    <motion.div
      variants={variants}
      whileHover={{ y: -5, scale: 1.02 }}
      className="group cursor-pointer"
    >
      <div className="relative rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary-400/30 transition-all duration-300">
        {/* Project Image (carousel) */}
        <div className="relative">
          <MediaCarousel
            images={images}
            alt={project.title}
            roundedClass="rounded-none" 
          />

          {/* Hover overlay actions */}
          <div className="pointer-events-none absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 bg-primary-900/80 opacity-0 group-hover:opacity-90 transition-all duration-300 flex items-center justify-center">
            <div className="flex gap-3">
              {project.links.demoRemoved && project.links.demo === "https://example.com" ? (
                <div className="w-8 h-8 bg-red-100/80 dark:bg-red-800/20 backdrop-blur-sm rounded-lg flex items-center justify-center text-gray-700 dark:text-white">
                  <Ban className="w-3.5 h-3.5 text-red-500" />
                </div>
              ) : (
                project.links?.demo && (
                  <motion.a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                    title="View Live Demo"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </motion.a>
                )
              )}
              {project.links?.github && (
                <motion.a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                  title="View Source Code"
                >
                  <Github className="w-3.5 h-3.5" />
                </motion.a>
              )}
            </div>
          </div>
        </div>

        {/* Project Info */}
        <div className="p-3 flex-1 flex flex-col space-y-3">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs text-primary-400 font-medium">
              {project.category}
            </span>
            <span className="text-xs text-gray-500 dark:text-white/50">{project.status}</span>
          </div>

          <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-1 group-hover:text-primary-400 transition-colors truncate">
            {project.title}
          </h3>

          <p className="text-gray-600 dark:text-white/70 text-xs mb-2 line-clamp-2 flex-1">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex gap-1 mt-auto overflow-x-auto scrollbar-hide whitespace-nowrap">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="px-1.5 py-0.5 bg-gray-200/50 dark:bg-white/10 text-gray-700 dark:text-white/80 text-xs rounded font-medium flex-shrink-0"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-1.5 py-0.5 bg-gray-200/50 dark:bg-dark/10 text-gray-700 dark:text-white/80 text-xs rounded font-medium flex-shrink-0">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>

          {/* View Details Button */}
          {onViewDetails && (
            <motion.button
              onClick={() => onViewDetails(project)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gray-200/50 dark:bg-white/10 hover:bg-gray-300/50 dark:hover:bg-white/20 text-gray-700 dark:text-white text-sm font-medium py-2 px-4 rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
            >
              <Eye className="w-4 h-4" />
              <span>View Details</span>
            </motion.button>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default PortfolioCard;
