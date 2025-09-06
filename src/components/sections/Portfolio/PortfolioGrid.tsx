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
        <p className="text-white/70 text-lg">No projects found for the selected category.</p>
      </div>
    )
  }

  return (
    <>
      {/* Portfolio Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
      >
        {projects.map((project) => (
          <PortfolioCard 
            key={project.id} 
            project={project} 
            variants={itemVariants}
            onViewDetails={onViewDetails}
          />
        ))}
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
            className="px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-500 hover:to-primary-600 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg group flex items-center justify-center gap-2 mx-auto"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </motion.button>
        </Link>
      </motion.div>
    </>
  )
}
