"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "./ProjectCard";
import { type ProjectItem } from "./projectsData";

type FeaturedProjectsProps = {
  featuredProjects: ProjectItem[];
};



export function FeaturedProjects({ featuredProjects }: FeaturedProjectsProps) {
  if (featuredProjects.length === 0) return null;

  return (
    <section className="pb-16 pt-16">
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
          {featuredProjects.map((project) => (
            <ProjectCard key={`featured-${project.id}`} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
