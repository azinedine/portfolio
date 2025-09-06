"use client";

import { useState, useMemo, useCallback, useEffect } from "react";
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
  setSelectedCategory: (category: string) => void;
};

export function useProjectsPage(): UseProjectsPageReturn {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Debug logging
  useEffect(() => {
    // Check if all categories in projectCategories actually exist in data
    const dataCategories = [...new Set(projectsData.map((p) => p.category))];

    const missingCategories = projectCategories.filter(
      (cat) => cat !== "All" && !dataCategories.includes(cat)
    );
    if (missingCategories.length > 0) {
    }
  }, [selectedCategory]);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "All") {
      return projectsData;
    }

    const filtered = projectsData.filter((project) => {
      const matches = project.category === selectedCategory;
      return matches;
    });

    return filtered;
  }, [selectedCategory]);

  const featuredProjects = useMemo(() => {
    const featured = projectsData.filter((project) => project.featured);
    return featured;
  }, []);

  const handleSetSelectedCategory = useCallback(
    (category: string) => {
      if (category === selectedCategory) {
        return;
      }

      if (!projectCategories.includes(category)) {
        return;
      }

      setSelectedCategory(category);
    },
    [selectedCategory]
  );

  return {
    selectedCategory,
    filteredProjects,
    featuredProjects,
    categories: projectCategories,
    setSelectedCategory: handleSetSelectedCategory,
  };
}
