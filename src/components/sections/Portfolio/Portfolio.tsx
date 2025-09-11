"use client";

import { easeOut } from "framer-motion";
import { memo, useMemo } from "react";
import { usePortfolio } from "./usePortfolio";
import { PortfolioHeader } from "./PortfolioHeader";
import { PortfolioGrid } from "./PortfolioGrid";
import { ProjectModal } from "./ProjectModal";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: easeOut,
    },
  },
};

export const Portfolio = memo(() => {
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

  const memoizedVariants = useMemo(() => ({
    containerVariants,
    itemVariants
  }), [])



  return (
    <section 
      id="projects" 
      className="relative min-h-screen py-16 sm:py-20 lg:py-24 flex items-center justify-center snap-center"
      style={{ 
        scrollSnapAlign: 'center',
        scrollSnapStop: 'always',
        height: '100vh',
        minHeight: '100vh'
      }}
    >
      {/* Background elements - Reduced complexity */}
      <div className="absolute inset-0 bg-dots opacity-5" />
      <div className="absolute top-1/4 right-0 w-48 h-48 bg-gradient-to-br from-primary-600/4 to-blue-600/4 rounded-full blur-2xl" />
      <div className="absolute bottom-1/4 left-0 w-40 h-40 bg-gradient-to-br from-cyan-500/4 to-primary-500/4 rounded-full blur-2xl" />

      <div className="container-responsive relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        {/* Section Header */}
        <PortfolioHeader
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        {/* Portfolio Grid */}
        <PortfolioGrid
          projects={filteredProjects}
          containerVariants={memoizedVariants.containerVariants}
          itemVariants={memoizedVariants.itemVariants}
          onViewDetails={openModal}
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
})

Portfolio.displayName = 'Portfolio'