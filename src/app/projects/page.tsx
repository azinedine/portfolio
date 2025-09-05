"use client";

import { easeOut } from "framer-motion";
import { useProjectsPage } from "./useProjectsPage";
import { ProjectsHeader } from "./ProjectsHeader";
import { FeaturedProjects } from "./FeaturedProjects";
import { ProjectsFilter } from "./ProjectsFilter";
import { ProjectsGrid } from "./ProjectsGrid";
import { ProjectsCTA } from "./ProjectsCTA";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

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
};

export default function ProjectsPage() {
  const {
    selectedCategory,
    filteredProjects,
    featuredProjects,
    categories,
    setSelectedCategory,
  } = useProjectsPage();

  console.log('categories', categories)

  return (
    <div className="min-h-screen bg-white dark:bg-dark-950 pt-20">
      {/* Hero Section */}
      <ProjectsHeader
        containerVariants={containerVariants}
        itemVariants={itemVariants}
      />

      {/* Featured Projects */}
      <FeaturedProjects featuredProjects={featuredProjects} />

      {/* All Projects */}
      <section className="section-padding bg-gray-50 dark:bg-dark-900/50">
        <div className="container-responsive">
          {/* Filter */}
          <ProjectsFilter
            categories={categories}
            selectedCategory={selectedCategory}
            filteredProjects={filteredProjects}
            onCategoryChange={setSelectedCategory}
          />

          {/* Projects Grid */}
          <ProjectsGrid
            projects={filteredProjects}
            selectedCategory={selectedCategory}
          />
        </div>
      </section>

      {/* CTA Section */}
      <ProjectsCTA />
    </div>
  );
}