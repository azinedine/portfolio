"use client";

import { useState, useMemo, useCallback } from "react";
import {
  projectsData,
  projectCategories,
  type ProjectItem,
} from "./projectsData";

export type UseProjectsPageReturn = {
  selectedCategory: string;
  filteredProjects: ProjectItem[];
  featuredProjects: ProjectItem[];
  categories: string[];
  selectedProject: ProjectItem | null;
  isModalOpen: boolean;
  setSelectedCategory: (category: string) => void;
  openModal: (project: ProjectItem) => void;
  closeModal: () => void;
};

export function useProjectsPage(): UseProjectsPageReturn {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "All") {
      return projectsData;
    }
    return projectsData.filter((project) => project.category === selectedCategory);
  }, [selectedCategory]);

  const featuredProjects = useMemo(() => {
    return projectsData.filter((project) => project.featured);
  }, []);

  const handleSetSelectedCategory = useCallback(
    (category: string) => {
      if (category === selectedCategory) return;
      if (!projectCategories.includes(category)) return;
      setSelectedCategory(category);
    },
    [selectedCategory]
  );

  const openModal = useCallback((project: ProjectItem) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedProject(null);
  }, []);

  return {
    selectedCategory,
    filteredProjects,
    featuredProjects,
    categories: projectCategories,
    selectedProject,
    isModalOpen,
    setSelectedCategory: handleSetSelectedCategory,
    openModal,
    closeModal,
  };
}