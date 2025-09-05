'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ProjectCard } from './ProjectCard'
import { type ProjectItem } from './projectsData'

type ProjectsGridProps = {
  projects: ProjectItem[]
  selectedCategory: string
}

export function ProjectsGrid({ projects, selectedCategory }: ProjectsGridProps) {
  // Debug logging
  console.log('ProjectsGrid render:', {
    selectedCategory,
    projectsCount: projects.length,
    projectIds: projects.map(p => p.id),
    projectTitles: projects.map(p => p.title)
  })

  return (
    <div className="space-y-8">
      {/* Debug info - remove this in production */}
      <div className="bg-yellow-100 dark:bg-yellow-900 p-4 rounded-lg mb-4">
        <p className="text-sm font-medium">
          Debug: Showing {projects.length} projects for {`${selectedCategory}`}
        </p>
        <p className="text-xs mt-1">
          Projects: {projects.map(p => `${p.title} (${p.category})`).join(', ')}
        </p>
      </div>

      <AnimatePresence mode="wait">
        {projects.length > 0 ? (
          <motion.div
            key={`grid-${selectedCategory}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <ProjectCard
                key={`${selectedCategory}-${project.id}`}
                project={project}
                index={index}
              />
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="no-projects"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="text-center py-16"
          >
            <div className="max-w-md mx-auto">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 dark:bg-dark-800 rounded-full flex items-center justify-center">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-semibold text-dark-600 dark:text-dark-400 mb-2">
                No projects found
              </h3>
              <p className="text-dark-500 dark:text-dark-500">
                No projects match the selected category {`${selectedCategory}`}. 
                Try selecting a different category.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}