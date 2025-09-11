'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'
import { memo, useMemo, ReactNode } from 'react'

export interface AnimatedCardProps {
  index: number
  icon?: LucideIcon
  title: string
  description: string
  children?: ReactNode
  color?: string
  bgColor?: string
  action?: string
  actionLabel?: string
  buttonClass?: string
  className?: string
  onClick?: () => void
  // Animation timing options
  animationSpeed?: 'fast' | 'slow'
  // Design variant
  variant?: 'default' | 'service'
}

export const AnimatedCard = memo(({ 
  index,
  icon: Icon,
  title,
  description,
  children,
  color = "from-blue-500 to-indigo-600",
  bgColor = "from-blue-500/10 to-indigo-600/10",
  action,
  actionLabel,
  buttonClass,
  className = "",
  onClick,
  animationSpeed = 'fast',
  variant = 'default'
}: AnimatedCardProps) => {
  // Consistent animation variants used across all cards
  const cardVariants = useMemo(() => ({
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1
    }
  }), [])

  const cardTransition = useMemo(() => {
    if (animationSpeed === 'slow') {
      return {
        duration: 0.8,
        delay: 0.5 + (index * 0.4),  // Slow timing for CTA cards
        ease: "easeOut" as const
      }
    } else {
      return {
        duration: 0.5,
        delay: index * 0.1,  // Fast timing for Services cards
        ease: "easeOut" as const
      }
    }
  }, [index, animationSpeed])

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
        amount: 0.1
      }}
      transition={cardTransition}
      whileHover={hoverVariants}
      whileTap={{ scale: 0.99 }}
      className={`group relative bg-white/80 dark:bg-white/5 backdrop-blur-sm border border-gray-200/50 dark:border-white/10 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-xl cursor-pointer overflow-hidden will-change-transform ${className}`}
      style={{ 
        transformOrigin: 'center bottom',
        transform: 'translateZ(0)',
        backfaceVisibility: 'hidden'
      }}
      onClick={onClick}
    >
      {/* Background gradient on hover - consistent across all cards */}
      <motion.div 
        className={`absolute inset-0 bg-gradient-to-br ${bgColor} rounded-2xl will-change-opacity`}
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 0.06 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />
      
      {/* Content */}
      <div className={`relative z-10 ${variant === 'service' ? '' : 'text-center'}`}>
        {variant === 'service' ? (
          // Original Service Card Design
          <>
            {/* Service Icon */}
            {Icon && (
              <motion.div
                className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 mx-auto mb-3 sm:mb-4 bg-gradient-to-br ${color} rounded-xl sm:rounded-2xl flex items-center justify-center will-change-transform`}
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <Icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white" />
              </motion.div>
            )}

            {/* Service Title */}
            <motion.h3 
              className="text-sm sm:text-base font-bold text-gray-900 dark:text-white mb-2 text-center leading-tight"
            >
              {title}
            </motion.h3>

            {/* Service Description */}
            <p className="text-xs sm:text-sm text-gray-600 dark:text-white/70 leading-relaxed text-center">
              {description}
            </p>
          </>
        ) : (
          // Default CTA Card Design
          <>
            {/* Icon */}
            {Icon && (
              <motion.div
                className={`w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-4 bg-gradient-to-br ${color} rounded-xl flex items-center justify-center will-change-transform`}
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </motion.div>
            )}

            {/* Title */}
            <motion.h3 
              className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-2 leading-tight"
            >
              {title}
            </motion.h3>

            {/* Description */}
            <p className="text-sm text-gray-600 dark:text-white/70 leading-relaxed mb-4">
              {description}
            </p>

            {/* Custom content or action button */}
            {children ? (
              children
            ) : action ? (
              <motion.a
                href={action}
                className={`${buttonClass} font-bold px-6 py-3 rounded-xl shadow-lg flex items-center justify-center gap-2 focus:ring-2 focus:ring-offset-2 focus:outline-none will-change-transform transition-colors duration-300`}
                aria-label={actionLabel}
                style={{
                  transformOrigin: 'center bottom',
                  transform: 'translateZ(0)',
                  backfaceVisibility: 'hidden'
                }}
              >
                {Icon && <Icon className="w-4 h-4" aria-hidden="true" />}
                {title}
              </motion.a>
            ) : null}
          </>
        )}
      </div>
    </motion.article>
  )
})

AnimatedCard.displayName = 'AnimatedCard'
