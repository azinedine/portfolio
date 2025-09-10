'use client'

import { motion } from 'framer-motion'

type PortfolioHeaderProps = {
  categories: string[]
  selectedCategory: string
  onCategoryChange: (category: string) => void
}

export function PortfolioHeader({ 
  categories, 
  selectedCategory, 
  onCategoryChange 
}: PortfolioHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center mb-8"
    >
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
        <span className="block text-gray-900 dark:text-white">Featured</span>
        <span className="block gradient-text-primary">Projects</span>
      </h2>

      <p className="text-base text-gray-600 dark:text-white/70 max-w-2xl mx-auto leading-relaxed mb-6">
        Explore my latest work and discover how I bring ideas to life
        through code.
      </p>

      {/* Filter buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        {categories.map((filter) => (
          <motion.button
            key={filter}
            onClick={() => onCategoryChange(filter)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-4 py-2 text-sm rounded-xl transition-all duration-300 font-medium ${
              selectedCategory === filter
                ? 'bg-primary-600 text-white border border-primary-500'
                : 'bg-gray-100/50 dark:bg-white/5 hover:bg-primary-600 border border-gray-300/50 dark:border-white/10 hover:border-primary-500 text-gray-700 dark:text-white'
            }`}
          >
            {filter}
          </motion.button>
        ))}
      </div>
    </motion.div>
  )
}
