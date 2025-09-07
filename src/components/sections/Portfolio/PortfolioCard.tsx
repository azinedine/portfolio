"use client";

import { motion, type Variants } from "framer-motion";
import { ExternalLink, Github, Eye } from "lucide-react";
import MediaCarousel from "./MediaCarousel";
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
            heightClass="h-48 md:h-60 lg:h-66"
            roundedClass="rounded-none" 
          />

          {/* Hover overlay actions */}
          <div className="pointer-events-none absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 bg-primary-900/80 opacity-0 group-hover:opacity-90 transition-all duration-300 flex items-center justify-center">
            <div className="flex gap-3">
              {project.links?.demo && (
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
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs text-primary-400 font-medium">
              {project.category}
            </span>
            <span className="text-xs text-white/50">{project.status}</span>
          </div>

          <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
            {project.title}
          </h3>

          <p className="text-white/70 text-sm mb-4 line-clamp-2">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-white/10 text-white/80 text-xs rounded-md font-medium"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-2 py-1 bg-white/10 text-white/80 text-xs rounded-md font-medium">
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
              className="w-full bg-white/10 hover:bg-white/20 text-white text-sm font-medium py-2 px-4 rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
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
