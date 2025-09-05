'use client'

import { useState, useMemo } from 'react'
import { portfolioItems, portfolioCategories, type PortfolioItem } from './portfolioData'

export type UsePortfolioReturn = {
  selectedCategory: string
  filteredProjects: PortfolioItem[]
  featuredProjects: PortfolioItem[]
  categories: string[]
  setSelectedCategory: (category: string) => void
  // Modal state
  selectedProject: PortfolioItem | null
  isModalOpen: boolean
  openModal: (project: PortfolioItem) => void
  closeModal: () => void
}

export function usePortfolio(): UsePortfolioReturn {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') {
      return portfolioItems
    }
    
    // Map category names to match the data
    const categoryMap: Record<string, string> = {
      'Web Dev': 'Web Development',
      'Mobile': 'Mobile App',
      'Design': 'UI/UX Design'
    }
    
    const mappedCategory = categoryMap[selectedCategory] || selectedCategory
    return portfolioItems.filter(project => project.category === mappedCategory)
  }, [selectedCategory])

  const featuredProjects = useMemo(() => {
    return portfolioItems.filter(project => project.featured)
  }, [])

  const openModal = (project: PortfolioItem) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  return {
    selectedCategory,
    filteredProjects,
    featuredProjects,
    categories: portfolioCategories,
    setSelectedCategory,
    // Modal state
    selectedProject,
    isModalOpen,
    openModal,
    closeModal,
  }
}
