'use client'

import { memo } from 'react'
import { motion } from 'framer-motion'
import { ServicesHeader } from './ServicesHeader'
import { ServicesGrid } from './ServicesGrid'
import { ServicesBackground } from './ServicesBackground'
import { services } from './servicesData'

export const Services = memo(() => {
  return (
    <section 
      id="services" 
      className="relative min-h-screen py-16 sm:py-20 lg:py-24 flex items-center justify-center snap-start"
      style={{ 
        scrollSnapStop: 'always'
      }}
      aria-label="Services offered by A.ZINEDDINE"
    >
      <ServicesBackground />
      
      <div className="container-responsive relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        <ServicesHeader />
        
        <motion.div 
          className="py-4 sm:py-6 md:py-8 mb-12 sm:mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <ServicesGrid services={services} />
        </motion.div>
      </div>

    </section>
  )
})

Services.displayName = 'Services'
