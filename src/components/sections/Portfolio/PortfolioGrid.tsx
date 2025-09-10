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
        <div className="overflow-x-auto scrollbar-hide h-auto min-h-[400px] sm:h-[450px] md:h-[500px]">
          <div className="flex gap-3 sm:gap-4 pb-4 h-full" style={{ width: 'max-content' }}>
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.1 }}
                className="flex-shrink-0 w-72 sm:w-80 md:w-84"
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
        className="text-center mt-4 sm:mt-6"
      >
        <Link href="/projects">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-500 hover:to-primary-600 text-white text-sm sm:text-base font-medium rounded-xl transition-all duration-300 shadow-lg group flex items-center justify-center gap-2 mx-auto min-h-[48px]"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </motion.button>
        </Link>
      </motion.div>
    </>
  )
}
