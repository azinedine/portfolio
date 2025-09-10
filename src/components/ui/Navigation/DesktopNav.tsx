'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { navigationItems } from './navigationItems'

type DesktopNavProps = {
  activeItemName: string
  hoveredItem: string | null
  onItemHover: (name: string | null) => void
}

export function DesktopNav({ activeItemName, hoveredItem, onItemHover }: DesktopNavProps) {
  return (
    <div className="hidden lg:flex items-center space-x-1 relative">
      {navigationItems.map((item) => {
        const isActive = activeItemName === item.name

        return (
          <Link
            key={item.name}
            href={item.href}
            onMouseEnter={() => onItemHover(item.name)}
            onMouseLeave={() => onItemHover(null)}
            className="relative px-4 py-3 font-medium transition-all duration-300 flex items-center gap-2 group"
          >
            <motion.span 
              className="text-sm"
              animate={{ 
                scale: isActive ? 1.1 : 1,
              }}
              transition={{ duration: 0.2 }}
            >
              {item.icon}
            </motion.span>

            <span className={cn(
              'text-sm font-medium transition-colors duration-200 relative',
              isActive 
                ? 'text-gray-900 dark:text-white' 
                : 'text-gray-700 dark:text-white/70 group-hover:text-gray-900 dark:group-hover:text-white'
            )}>
              {item.name}

              {isActive && (
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-400 via-primary-500 to-purple-500 rounded-full"
                  layoutId="activeTextIndicator"
                  initial={false}
                  style={{ willChange: 'transform' }}
                  transition={{
                    type: 'spring',
                    stiffness: 500,
                    damping: 30,
                    duration: 0.3
                  }}
                />
              )}

              {hoveredItem === item.name && !isActive && (
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gray-400/60 dark:bg-white/40 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  exit={{ scaleX: 0 }}
                  transition={{ duration: 0.2 }}
                  style={{ transformOrigin: 'center', willChange: 'transform' }}
                />
              )}

              {isActive && (
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-400/60 via-primary-500/60 to-purple-500/60 rounded-full blur-sm"
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 1 }}
                  exit={{ scaleX: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ transformOrigin: 'center', willChange: 'transform, opacity' }}
                />
              )}
            </span>

            {hoveredItem === item.name && !isActive && (
              <motion.div
                className="absolute inset-0 bg-white/5 rounded-xl"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.2 }}
                style={{ willChange: 'transform, opacity' }}
              />
            )}
          </Link>
        )
      })}
    </div>
  )
}


