'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { memo } from 'react'

export interface ScrollIndicatorProps {
  onClick?: () => void
  text?: string
  delay?: number
  className?: string
  position?: 'bottom' | 'top' | 'left' | 'right'
  variant?: 'default' | 'minimal' | 'outlined'
}

const ScrollIndicator = memo(({
  onClick,
  text = "Scroll to explore",
  delay = 2,
  className = "",
  position = "bottom",
  variant = "default"
}: ScrollIndicatorProps) => {
  const getPositionClasses = () => {
    switch (position) {
      case 'top':
        return 'absolute top-8 left-1/2 transform -translate-x-1/2'
      case 'left':
        return 'absolute left-8 top-1/2 transform -translate-y-1/2'
      case 'right':
        return 'absolute right-8 top-1/2 transform -translate-y-1/2'
      default:
        return 'absolute bottom-8 left-1/2 transform -translate-x-1/2'
    }
  }

  const getVariantClasses = () => {
    switch (variant) {
      case 'minimal':
        return {
          text: 'text-gray-500 dark:text-white/50',
          border: 'border-gray-200 dark:border-white/20',
          icon: 'text-gray-400 dark:text-white/30'
        }
      case 'outlined':
        return {
          text: 'text-gray-700 dark:text-white/70',
          border: 'border-2 border-gray-400 dark:border-white/40',
          icon: 'text-gray-500 dark:text-white/50'
        }
      default:
        return {
          text: 'text-gray-600 dark:text-white/60',
          border: 'border border-gray-300 dark:border-white/30',
          icon: 'text-gray-400 dark:text-white/40'
        }
    }
  }

  const variantClasses = getVariantClasses()

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      className={`${getPositionClasses()} text-center cursor-pointer ${className}`}
      onClick={onClick}
    >
      {/* Text */}
      <motion.p
        className={`${variantClasses.text} text-sm mb-3 font-medium`}
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        {text}
      </motion.p>

      {/* Scroll indicator container */}
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className={`w-6 h-10 ${variantClasses.border} rounded-full mx-auto relative backdrop-blur-sm`}
      >
        {/* Scroll dot */}
        <motion.div
          animate={{ y: [2, 16, 2] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-1 h-3 bg-primary-500 rounded-full mx-auto mt-2"
        />
      </motion.div>

      {/* Chevron icon */}
      <motion.div
        animate={{ y: [0, 3, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
        className="mt-1"
      >
        <ChevronDown className={`w-4 h-4 ${variantClasses.icon} mx-auto`} />
      </motion.div>
    </motion.div>
  )
})

ScrollIndicator.displayName = 'ScrollIndicator'

export { ScrollIndicator }