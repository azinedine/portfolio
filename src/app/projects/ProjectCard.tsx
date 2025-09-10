"use client";

import { motion, Variants } from "framer-motion";
import { ExternalLink, Github, Eye } from "lucide-react";
import { memo, useMemo } from "react";
import { type ProjectItem } from "./projectsData";
import MediaCarousel from "@/components/sections/Portfolio/MediaCarousel";

const ActionButton = memo(({ 
  href, 
  icon: Icon, 
  title, 
  variant = "icon" 
}: {
  href?: string;
  icon: typeof ExternalLink;
  title: string;
  variant?: "icon" | "button";
}) => {
  if (!href) return null;

  const baseClasses = variant === "icon" 
    ? "w-8 h-8 bg-gray-100/80 dark:bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center text-gray-700 dark:text-white hover:bg-gray-200/80 dark:hover:bg-white/30 transition-colors"
    : "flex-1 text-center text-sm py-2";

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: variant === "icon" ? 1.1 : 1.02 }}
      whileTap={{ scale: variant === "icon" ? 0.9 : 0.98 }}
      className={`${baseClasses} ${variant === "button" ? "btn-primary" : ""}`}
      title={title}
      aria-label={title}
    >
      <Icon className="w-3.5 h-3.5" />
    </motion.a>
  );
});

ActionButton.displayName = "ActionButton";

type ProjectCardProps = {
  project: ProjectItem;
  variants?: Variants;
  onViewDetails?: (project: ProjectItem) => void;
};

export const ProjectCard = memo(({ project, variants, onViewDetails  }: ProjectCardProps) => {
  // Convert photos to array for carousel compatibility
  const images = useMemo(() => {
    if (project.photos?.length) {
      return project.photos.filter(Boolean);
    }
    return [];
  }, [project.photos]);

  return (
    <motion.div
      variants={variants}
      whileHover={{ y: -5, scale: 1.02 }}
      className="group cursor-pointer"
    >
      <div className="relative rounded-2xl overflow-hidden bg-white/80 dark:bg-white/5 backdrop-blur-sm border border-gray-200/50 dark:border-white/10 hover:border-primary-400/30 transition-all duration-300">
        {/* Project Image with Carousel */}
        <div className="relative">
          <MediaCarousel
            images={images}
            alt={project.title}
            heightClass="h-48 sm:h-52 md:h-60 lg:h-66"
            roundedClass="rounded-none"
          />

          {/* Featured Badge */}
          {project.featured && (
            <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10">
              <span className="inline-flex items-center gap-1 px-2 py-1 sm:px-3 sm:py-1 bg-yellow-400/90 backdrop-blur-sm rounded-full text-yellow-900 text-xs sm:text-sm font-bold">
                ⭐ Featured
              </span>
            </div>
          )}

          {/* Hover overlay actions */}
          <div className="pointer-events-none absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 bg-gray-900/80 dark:bg-primary-900/80 opacity-0 group-hover:opacity-90 transition-all duration-300 flex items-center justify-center">
            <div className="flex gap-3">
              <ActionButton 
                href={project.links?.demo} 
                icon={ExternalLink} 
                title="View Live Demo" 
              />
              <ActionButton 
                href={project.links?.github} 
                icon={Github} 
                title="View Source Code" 
              />
            </div>
          </div>
        </div>

        {/* Project Info */}
        <div className="p-4 sm:p-6">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs text-primary-600 dark:text-primary-400 font-medium">
              {project.category}
            </span>
            <span className="text-xs text-gray-500 dark:text-white/50">{project.date}</span>
          </div>

          <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
            {project.title}
          </h3>

          <p className="text-gray-600 dark:text-white/70 text-sm mb-4 line-clamp-2">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-gray-200/50 dark:bg-white/10 text-gray-700 dark:text-white/80 text-xs rounded-md font-medium"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-2 py-1 bg-gray-200/50 dark:bg-white/10 text-gray-700 dark:text-white/80 text-xs rounded-md font-medium">
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
              className="w-full bg-gray-200/50 dark:bg-white/10 hover:bg-gray-300/50 dark:hover:bg-white/20 text-gray-700 dark:text-white text-sm font-medium py-2.5 px-4 rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
            >
              <Eye className="w-4 h-4" />
              <span>View Details</span>
            </motion.button>
          )}
        </div>
      </div>
    </motion.div>
  );
});

ProjectCard.displayName = "ProjectCard";