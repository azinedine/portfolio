'use client'

import { motion, type Variants } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { PortfolioCard } from './PortfolioCard'
import { type PortfolioItem } from './portfolioData'

type PortfolioGridProps = {
  projects: PortfolioItem[]
  containerVariants: Variants
  itemVariants: Variants
  onViewDetails?: (project: PortfolioItem) => void
}

export function PortfolioGrid({ 
  projects, 
  containerVariants, 
  itemVariants,
  onViewDetails
}: PortfolioGridProps) {
  if (projects.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 dark:text-white/70 text-lg">No projects found for the selected category.</p>
      </div>
    )
  }

  return (
    <>
      {/* Horizontal Scrollable Portfolio Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mb-8"
      >
        <div className="overflow-x-auto scrollbar-hide h-200">
          <div className="flex gap-4 pb-4 h-full" style={{ width: 'max-content' }}>
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.1 }}
                className="flex-shrink-0 w-80 "
              >
                <PortfolioCard 
                  project={project} 
                  variants={itemVariants}
                  onViewDetails={onViewDetails}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="text-center"
      >
        <Link href="/projects">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-500 hover:to-primary-600 text-white text-sm font-medium rounded-lg transition-all duration-300 shadow-lg group flex items-center justify-center gap-2 mx-auto"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </motion.button>
        </Link>
      </motion.div>
    </>
  )
}
