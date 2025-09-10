'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'
import { memo } from 'react'

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

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

export const ServiceCard = memo(({ service, index }: ServiceCardProps) => {
  return (
    <motion.article
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        delay: index * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }}
      whileHover={{ 
        y: -5,
        transition: { duration: 0.2, ease: "easeOut" }
      }}
      className="group relative bg-white/80 dark:bg-white/5 backdrop-blur-sm border border-gray-200/50 dark:border-white/10 rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer overflow-hidden"
    >
      {/* Modern background gradient on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${service.bgColor} opacity-0 group-hover:opacity-80 transition-opacity duration-300 rounded-2xl`} />
      
      {/* Content */}
      <div className="relative z-10">
        {/* Service Icon */}
        <motion.div
          className={`w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-3 sm:mb-4 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-200`}
        >
          <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
        </motion.div>

        {/* Service Title */}
        <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-2 sm:mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-300 transition-colors text-center">
          {service.title}
        </h3>

        {/* Service Description */}
        <p className="text-xs sm:text-sm text-gray-600 dark:text-white/70 leading-relaxed text-center">
          {service.description}
        </p>
      </div>

    </motion.article>
  )
})

ServiceCard.displayName = 'ServiceCard'
