"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Calendar, Tag } from "lucide-react";
import Image from "next/image";
import { memo, useMemo } from "react";
import { type ProjectItem } from "./projectsData";

// Separate components for better modularity
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
    ? "p-2 bg-white/90 dark:bg-dark-900/90 text-dark-700 dark:text-dark-300 rounded-full shadow-sm hover:bg-white dark:hover:bg-dark-800 transition-colors"
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
      <Icon className="w-4 h-4" />
    </motion.a>
  );
});

ActionButton.displayName = "ActionButton";

const TechTag = memo(({ tech }: { tech: string }) => (
  <span className="px-2 py-1 bg-dark-100 dark:bg-dark-800 text-dark-700 dark:text-dark-300 text-xs rounded-md font-medium">
    {tech}
  </span>
));

TechTag.displayName = "TechTag";

const ProjectImage = memo(({ 
  project, 
  className 
}: { 
  project: ProjectItem; 
  className?: string;
}) => (
  <div className={`relative h-48 bg-gradient-to-br from-primary-400 to-purple-500 overflow-hidden ${className || ""}`}>
    {project.image ? (
      <Image
        src={project.image}
        alt={`${project.title} project preview`}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority={project.featured}
      />
    ) : (
      <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
        <span className="text-white text-lg font-semibold" aria-hidden="true">
          Project Preview
        </span>
      </div>
    )}

    {project.featured && (
      <div className="absolute top-4 left-4">
        <span 
          className="bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded-full"
          role="badge"
          aria-label="Featured project"
        >
          Featured
        </span>
      </div>
    )}

    <div className="absolute top-4 right-4 flex gap-2">
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
));

ProjectImage.displayName = "ProjectImage";

type ProjectCardProps = {
  project: ProjectItem;
  index: number;
};

export const ProjectCard = memo(({ project, index }: ProjectCardProps) => {
  // Memoize animation variants for better performance
  const cardVariants = useMemo(() => ({
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 }
  }), []);

  const animationProps = useMemo(() => ({
    variants: cardVariants,
    initial: "initial",
    animate: "animate",
    exit: "exit",
    transition: { duration: 0.3, delay: index * 0.1 },
    whileHover: { y: -5 }
  }), [cardVariants, index]);

  // Ensure required data exists
  if (!project) {
    return null;
  }

  return (
    <motion.article
      {...animationProps}
      className="bg-white dark:bg-dark-900 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-dark-200 dark:border-dark-800"
      role="article"
      aria-labelledby={`project-title-${index}`}
    >
      <ProjectImage project={project} />

      {/* Project Content */}
      <div className="p-6 space-y-4">
        {/* Meta Information */}
        <div className="flex items-center justify-between">
          {project.category && (
            <span className="inline-flex items-center gap-1 text-sm text-primary-600 dark:text-primary-400 font-medium">
              <Tag className="w-3 h-3" aria-hidden="true" />
              <span className="sr-only">Category:</span>
              {project.category}
            </span>
          )}
          {project.date && (
            <time 
              className="flex items-center gap-1 text-sm text-dark-500 dark:text-dark-500"
              dateTime={project.date}
            >
              <Calendar className="w-3 h-3" aria-hidden="true" />
              <span className="sr-only">Date:</span>
              {project.date}
            </time>
          )}
        </div>

        {/* Title */}
        <h3 
          id={`project-title-${index}`}
          className="text-xl font-bold text-dark-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors cursor-pointer"
        >
          {project.title}
        </h3>

        {/* Description */}
        {project.description && (
          <p className="text-dark-600 dark:text-dark-400 text-sm leading-relaxed line-clamp-3">
            {project.description}
          </p>
        )}

        {/* Technologies */}
        {project.technologies?.length > 0 && (
          <div className="flex flex-wrap gap-2" role="list" aria-label="Technologies used">
            {project.technologies.map((tech) => (
              <TechTag key={tech} tech={tech} />
            ))}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-3 pt-2">
          {project.links?.demo && (
            <motion.a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 btn-primary text-center text-sm py-2"
              aria-label={`View live demo of ${project.title}`}
            >
              View Live
            </motion.a>
          )}
          {project.links?.github && (
            <motion.a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 btn-secondary text-center text-sm py-2"
              aria-label={`View source code of ${project.title}`}
            >
              Source Code
            </motion.a>
          )}
        </div>
      </div>
    </motion.article>
  );
});

ProjectCard.displayName = "ProjectCard";
