'use client'

import { motion } from 'framer-motion'
import { ReactNode, memo } from 'react'
import { cn } from '@/lib/utils'

export interface GridItemProps {
  children: ReactNode
  className?: string
  span?: 1 | 2 | 3 | 4 | 5 | 6 | 'full'
  order?: number
  animate?: boolean
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
}

const spanClasses = {
  1: 'col-span-1',
  2: 'col-span-2',
  3: 'col-span-3',
  4: 'col-span-4',
  5: 'col-span-5',
  6: 'col-span-6',
  full: 'col-span-full',
}

const getDirectionVariants = (direction: string) => {
  const baseVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  switch (direction) {
    case 'up':
      return {
        ...baseVariants,
        hidden: { ...baseVariants.hidden, y: 30 },
        visible: { ...baseVariants.visible, y: 0 },
      }
    case 'down':
      return {
        ...baseVariants,
        hidden: { ...baseVariants.hidden, y: -30 },
        visible: { ...baseVariants.visible, y: 0 },
      }
    case 'left':
      return {
        ...baseVariants,
        hidden: { ...baseVariants.hidden, x: 30 },
        visible: { ...baseVariants.visible, x: 0 },
      }
    case 'right':
      return {
        ...baseVariants,
        hidden: { ...baseVariants.hidden, x: -30 },
        visible: { ...baseVariants.visible, x: 0 },
      }
    default:
      return baseVariants
  }
}

export const GridItem = memo(({
  children,
  className = '',
  span = 1,
  order,
  animate = false,
  delay = 0,
  direction = 'up',
}: GridItemProps) => {
  const itemClasses = cn(
    'w-full',
    spanClasses[span],
    order && `order-${order}`,
    className
  )

  if (animate) {
    const variants = getDirectionVariants(direction)
    
    return (
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        transition={{ delay, duration: 0.5, ease: "easeOut" }}
        className={itemClasses}
      >
        {children}
      </motion.div>
    )
  }

  return <div className={itemClasses}>{children}</div>
})

GridItem.displayName = 'GridItem'
