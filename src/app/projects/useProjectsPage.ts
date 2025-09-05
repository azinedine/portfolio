'use client'

import { useState, useMemo, useCallback, useEffect } from 'react'
import { projectsData, projectCategories, type ProjectItem } from './projectsData'

export type UseProjectsPageReturn = {
  selectedCategory: string
  filteredProjects: ProjectItem[]
  featuredProjects: ProjectItem[]
  categories: string[]
  setSelectedCategory: (category: string) => void
}

export function useProjectsPage(): UseProjectsPageReturn {
  const [selectedCategory, setSelectedCategory] = useState('All')

  // Debug logging
  useEffect(() => {
    console.log('🔍 Hook re-rendered with selectedCategory:', selectedCategory)
    console.log('📊 Available categories:', projectCategories)
    console.log('📦 Total projects:', projectsData.length)
    
    // Check if all categories in projectCategories actually exist in data
    const dataCategories = [...new Set(projectsData.map(p => p.category))]
    console.log('📝 Categories in data:', dataCategories)
    
    const missingCategories = projectCategories
      .filter(cat => cat !== 'All' && !dataCategories.includes(cat))
    if (missingCategories.length > 0) {
      console.warn('⚠️ Categories in projectCategories but not in data:', missingCategories)
    }
  }, [selectedCategory])

  const filteredProjects = useMemo(() => {
    console.log('🔄 Filtering projects for category:', selectedCategory)
    
    if (selectedCategory === 'All') {
      console.log('✅ Returning all projects:', projectsData.length)
      return projectsData
    }

    const filtered = projectsData.filter(project => {
      const matches = project.category === selectedCategory
      if (!matches) {
        console.log(`❌ Project "${project.title}" (${project.category}) doesn't match ${selectedCategory}`)
      }
      return matches
    })

    console.log(`✅ Found ${filtered.length} projects for "${selectedCategory}":`, 
      filtered.map(p => p.title))

    return filtered
  }, [selectedCategory])

  const featuredProjects = useMemo(() => {
    const featured = projectsData.filter(project => project.featured)
    console.log('⭐ Featured projects:', featured.length)
    return featured
  }, [])

  // Wrap setSelectedCategory to add debugging
  const handleSetSelectedCategory = useCallback((category: string) => {
    console.log('🎯 Category change requested:', selectedCategory, '->', category)
    
    if (category === selectedCategory) {
      console.log('ℹ️ Same category selected, no change needed')
      return
    }
    
    if (!projectCategories.includes(category)) {
      console.error('❌ Invalid category:', category, 'Available:', projectCategories)
      return
    }
    
    setSelectedCategory(category)
  }, [selectedCategory])

  return {
    selectedCategory,
    filteredProjects,
    featuredProjects,
    categories: projectCategories,
    setSelectedCategory: handleSetSelectedCategory,
  }
}