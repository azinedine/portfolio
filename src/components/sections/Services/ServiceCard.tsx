'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'
import { memo, useMemo } from 'react'

export interface Service {
  icon: LucideIcon
  title: string
  description: string
  color: string
  bgColor: string
}

interface ServiceCardProps {
  service: Service
  index: number
}

export const ServiceCard = memo(({ service, index }: ServiceCardProps) => {
  // Optimized animation variants to prevent flickering
  const cardVariants = useMemo(() => ({
    hidden: { 
      opacity: 0, 
      y: 15,
      scale: 0.98
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1
    }
  }), [])

  const cardTransition = useMemo(() => ({
    duration: 0.5,
    delay: index * 0.1,
    ease: "easeOut" as const
  }), [index])

  const hoverVariants = useMemo(() => ({
    y: -4,
    scale: 1.02
  }), [])
  return (
    <motion.article
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ 
        once: true, 
        margin: "-50px",
        amount: 0.2
      }}
      transition={cardTransition}
      whileHover={hoverVariants}
      whileTap={{ scale: 0.99 }}
      className="group relative bg-white/80 dark:bg-white/5 backdrop-blur-sm border border-gray-200/50 dark:border-white/10 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-xl cursor-pointer overflow-hidden h-full will-change-transform service-card"
      style={{ 
        transformOrigin: 'center bottom',
        transform: 'translateZ(0)',
        backfaceVisibility: 'hidden'
      }}
    >
      {/* Modern background gradient on hover - Optimized */}
      <motion.div 
        className={`absolute inset-0 bg-gradient-to-br ${service.bgColor} rounded-2xl will-change-opacity`}
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 0.06 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        {/* Service Icon */}
        <motion.div
          className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 mx-auto mb-3 sm:mb-4 bg-gradient-to-br ${service.color} rounded-xl sm:rounded-2xl flex items-center justify-center will-change-transform`}
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          <service.icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white" />
        </motion.div>

        {/* Service Title */}
        <motion.h3 
          className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 dark:text-white mb-2 sm:mb-3 text-center leading-tight"
        >
          {service.title}
        </motion.h3>

        {/* Service Description */}
        <p className="text-xs sm:text-sm lg:text-base text-gray-600 dark:text-white/70 leading-relaxed text-center">
          {service.description}
        </p>
      </div>

    </motion.article>
  )
})

ServiceCard.displayName = 'ServiceCard'
