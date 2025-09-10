'use client'

import { motion } from 'framer-motion'
import { ReactNode, memo } from 'react'
import { cn } from '@/lib/utils'

export interface GridProps {
  children: ReactNode
  className?: string
  cols?: 1 | 2 | 3 | 4 | 5 | 6
  gap?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  align?: 'start' | 'center' | 'end' | 'stretch'
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'
  responsive?: boolean
  animate?: boolean
  stagger?: boolean
  delay?: number
}

const gapClasses = {
  sm: 'gap-4',
  md: 'gap-8',
  lg: 'gap-12',
  xl: 'gap-16',
  '2xl': 'gap-20',
}

const alignClasses = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
  stretch: 'items-stretch',
}

const justifyClasses = {
  start: 'justify-start',
  center: 'justify-center',
  end: 'justify-end',
  between: 'justify-between',
  around: 'justify-around',
  evenly: 'justify-evenly',
}

const getGridCols = (cols: number, responsive: boolean) => {
  if (!responsive) {
    return `grid-cols-${cols}`
  }
  
  const responsiveClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 lg:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
    5: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5',
    6: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6',
  }
  
  return responsiveClasses[cols as keyof typeof responsiveClasses] || responsiveClasses[2]
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export const Grid = memo(({
  children,
  className = '',
  cols = 2,
  gap = 'lg',
  align = 'center',
  justify = 'start',
  responsive = true,
  animate = false,
  stagger = false,
  delay = 0,
}: GridProps) => {
  const gridClasses = cn(
    'grid',
    getGridCols(cols, responsive),
    gapClasses[gap],
    alignClasses[align],
    justifyClasses[justify],
    className
  )

  if (animate) {
    return (
      <motion.div
        variants={stagger ? containerVariants : undefined}
        initial={stagger ? "hidden" : undefined}
        whileInView={stagger ? "visible" : undefined}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ delay }}
        className={gridClasses}
      >
        {stagger ? (
          <>
            {Array.isArray(children) 
              ? children.map((child, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="w-full"
                  >
                    {child}
                  </motion.div>
                ))
              : (
                  <motion.div 
                    variants={itemVariants} 
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="w-full"
                  >
                    {children}
                  </motion.div>
                )
            }
          </>
        ) : (
          children
        )}
      </motion.div>
    )
  }

  return <div className={gridClasses}>{children}</div>
})

Grid.displayName = 'Grid'
