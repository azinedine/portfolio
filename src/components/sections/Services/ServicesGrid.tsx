'use client'

import { motion } from 'framer-motion'
import { memo } from 'react'
import { ServiceCard, type Service } from './ServiceCard'

interface ServicesGridProps {
  services: Service[]
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

export const ServicesGrid = memo(({ services }: ServicesGridProps) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
    >
      {services.map((service, index) => (
        <ServiceCard
          key={service.title}
          service={service}
          index={index}
        />
      ))}
    </motion.div>
  )
})

ServicesGrid.displayName = 'ServicesGrid'
