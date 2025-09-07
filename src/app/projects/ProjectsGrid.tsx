"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import { ProjectCard } from "./ProjectCard";
import { type ProjectItem } from "./projectsData";

type ProjectsGridProps = {
  projects: ProjectItem[];
  selectedCategory: string;
  containerVariants?: Variants;
  itemVariants?: Variants;
  onViewDetails?: (project: ProjectItem) => void;
};

export function ProjectsGrid({
  projects,
  selectedCategory,
  containerVariants,
  itemVariants,
  onViewDetails,
}: ProjectsGridProps) {
  return (
    <div className="space-y-8">
      <AnimatePresence mode="wait">
        {projects.length > 0 ? (
          <motion.div
            key={`grid-${selectedCategory}`}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project) => (
              <ProjectCard
                key={`${selectedCategory}-${project.id}`}
                project={project}
                variants={itemVariants}
                onViewDetails={onViewDetails}
              />
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="no-projects"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="text-center py-16"
          >
            <div className="max-w-md mx-auto">
              <div className="w-16 h-16 mx-auto mb-4 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-semibold text-white/90 mb-2">
                No projects found
              </h3>
              <p className="text-white/70">
                No projects match the selected category {`"${selectedCategory}"`}.
                Try selecting a different category.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}