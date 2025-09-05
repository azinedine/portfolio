'use client'

import { motion } from 'framer-motion'
import { Filter } from 'lucide-react'
import { type ProjectItem } from './projectsData'

type ProjectsFilterProps = {
  categories: string[]
  selectedCategory: string
  onCategoryChange: (category: string) => void
  filteredProjects: ProjectItem[]
}

export function ProjectsFilter({ 
  categories, 
  selectedCategory, 
  onCategoryChange, 
  filteredProjects 
}: ProjectsFilterProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-12"
    >
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-dark-900 dark:text-white mb-2">
            All Projects
          </h2>
          <p className="text-dark-600 dark:text-dark-400">
            {filteredProjects.length} project
            {filteredProjects.length !== 1 ? "s" : ""} found
          </p>
        </div>

        <div className="flex items-center gap-3 flex-wrap">
          <Filter className="w-5 h-5 text-dark-500 dark:text-dark-500" />
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => onCategoryChange(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                selectedCategory === category
                  ? "bg-primary-600 text-white shadow-lg"
                  : "bg-white dark:bg-dark-800 text-dark-700 dark:text-dark-300 hover:bg-primary-50 dark:hover:bg-dark-700 border border-dark-200 dark:border-dark-700"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
