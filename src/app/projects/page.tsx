"use client";

import { useProjectsPage } from "./useProjectsPage";
import { FeaturedProjects } from "./FeaturedProjects";
import { ProjectsFilter } from "./ProjectsFilter";
import { ProjectsGrid } from "./ProjectsGrid";
import { ProjectsCTA } from "./ProjectsCTA";
import { PageHeader } from "@/components/common/PageHeader";

export default function ProjectsPage() {
  const {
    selectedCategory,
    filteredProjects,
    featuredProjects,
    categories,
    setSelectedCategory,
  } = useProjectsPage();

  return (
    <div className="min-h-screen bg-white dark:bg-dark-950">
      <PageHeader
        badge="Projects"
        subtitle="Crafting Digital"
        title="Experiences"
        description="I'm a passionate Full Stack Developer with over 5 years of experience creating modern, scalable applications. I love turning complex problems into simple, beautiful, and intuitive solutions."
        variant="centered"
        showBreadcrumb
        breadcrumbItems={[{ label: "Projects", href: "/projects" }]}
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
