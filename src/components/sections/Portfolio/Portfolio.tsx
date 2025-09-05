"use client";

import { easeOut } from "framer-motion";
import { usePortfolio } from "./usePortfolio";
import { PortfolioHeader } from "./PortfolioHeader";
import { PortfolioGrid } from "./PortfolioGrid";
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

export function Portfolio() {
  const {
    selectedCategory,
    filteredProjects,
    categories,
    setSelectedCategory,
    selectedProject,
    isModalOpen,
    openModal,
    closeModal,
  } = usePortfolio();

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-dots opacity-10" />
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-gradient-to-br from-primary-600/8 to-blue-600/8 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-gradient-to-br from-cyan-500/8 to-primary-500/8 rounded-full blur-3xl" />

      <div className="container-responsive relative z-10">
        {/* Section Header */}
        <PortfolioHeader
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        {/* Portfolio Grid */}
        <PortfolioGrid
          projects={filteredProjects}
          containerVariants={containerVariants}
          itemVariants={itemVariants}
          onViewDetails={openModal}
        />

        {/* Simplified decorations */}
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

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
}