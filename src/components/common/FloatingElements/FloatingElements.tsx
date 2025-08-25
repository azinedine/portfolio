'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface FloatingElementProps {
  children: ReactNode
  className?: string
  duration?: number
  delay?: number
  yRange?: number
  xRange?: number
  rotateRange?: number
}

export function FloatingElement({
  children,
  className = '',
  duration = 6,
  delay = 0,
  yRange = 15,
  xRange = 5,
  rotateRange = 5
}: FloatingElementProps) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [-yRange, yRange, -yRange],
        x: [-xRange, xRange, -xRange],
        rotate: [0, rotateRange, 0, -rotateRange, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay
      }}
    >
      {children}
    </motion.div>
  )
}