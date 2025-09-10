"use client";

import { easeOut } from "framer-motion";

import { PageHeader } from "@/components/common/PageHeader";
import { ProjectsFilter } from "./ProjectsFilter";
import { ProjectsGrid } from "./ProjectsGrid";
import { useProjectsPage } from "./useProjectsPage";
import { FeaturedProjects } from "./FeaturedProjects";
import { ProjectsCTA } from "./ProjectsCTA";
import { ProjectModal } from "./ProjectModal";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
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
    selectedProject,
    isModalOpen,
    setSelectedCategory,
    openModal,
    closeModal,
  } = useProjectsPage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50/30 dark:from-gray-950 dark:via-gray-900 dark:to-purple-950/30">
      <PageHeader
        badge="Projects"
        subtitle="Crafting Digital"
        title="Experiences"
        description="I'm a passionate Full Stack Developer with over 4+ years of experience creating modern, scalable applications. I love turning complex problems into simple, beautiful, and intuitive solutions."
        variant="centered"
      />

      <div className="section-padding">
        <FeaturedProjects featuredProjects={featuredProjects} />
      </div>

      {/* All Projects */}
      <section className="section-padding relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-dots opacity-10" />
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-gradient-to-br from-primary-600/8 to-blue-600/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-gradient-to-br from-cyan-500/8 to-primary-500/8 rounded-full blur-3xl" />

        <div className="container-responsive relative z-10">
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
            containerVariants={containerVariants}
            itemVariants={itemVariants}
            onViewDetails={openModal}
          />

          {/* Decorative elements */}
          <div className="absolute top-20 right-16 w-2 h-2 bg-primary-400/40 rounded-full animate-pulse" />
          <div
            className="absolute bottom-20 left-16 w-1.5 h-1.5 bg-cyan-400/40 rounded-full animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute top-1/2 right-8 w-1 h-1 bg-pink-400/40 rounded-full animate-pulse"
            style={{ animationDelay: "2s" }}
          />
        </div>
      </section>

      {/* CTA Section */}
      <ProjectsCTA />

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
}
