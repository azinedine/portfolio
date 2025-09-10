'use client'

import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { navigationItems } from './navigationItems'

type MobileNavProps = {
  isOpen: boolean
  activeItemName: string
  onClose: () => void
}

export function MobileNav({ isOpen, activeItemName, onClose }: MobileNavProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-40 lg:hidden"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-gray-900/60 dark:bg-black/60 backdrop-blur-md"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-20 left-4 right-4 bg-black/90 backdrop-blur-2xl border rounded-3xl shadow-2xl overflow-hidden"
          >
            <div className="p-6 space-y-2">
              {navigationItems.map((item, index) => {
                const isActive = activeItemName === item.name

                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    className="relative"
                  >
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className={cn(
                        'flex items-center gap-4 px-4 py-4 rounded-2xl font-medium transition-all duration-200 group relative overflow-hidden',
                        isActive
                          ? 'bg-gradient-to-r from-primary-500/20 to-purple-500/20 text-white border border-primary-500/30'
                          : 'text-white/80 hover:text-white hover:bg-white/10'
                      )}
                    >
                      <span className="text-lg group-hover:scale-110 transition-transform duration-150">
                        {item.icon}
                      </span>

                      <div className="flex-1">
                        <span className="block font-semibold">{item.name}</span>
                        <span className="text-xs text-white/50 block">
                          {item.name === 'Home' && 'Welcome page'}
                          {item.name === 'About' && 'Learn about me'}
                          {item.name === 'Projects' && 'View my work'}
                          {item.name === 'Experience' && 'My journey'}
                          {item.name === 'Contact' && 'Get in touch'}
                        </span>
                      </div>

                      <ArrowUpRight className="w-4 h-4 opacity:50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-150" />

                      {isActive && (
                        <div className="absolute right-2 top-1/2 -translate-y-1/2 w-2 h-2 bg-primary-400 rounded-full" />
                      )}
                    </Link>

                    {isActive && (
                      <motion.div
                        className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-primary-400 to-purple-500 rounded-full"
                        layoutId="mobileActiveIndicator"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        exit={{ scaleX: 0 }}
                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                      />
                    )}
                  </motion.div>
                )
              })}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navigationItems.length * 0.1 + 0.1 }}
                className="pt-4 border-t border-white/10 mt-4"
              >
                <button
                  onClick={onClose}
                  className="w-full bg-gradient-to-r from-primary-500 to-purple-600 text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-200 hover:from-primary-400 hover:to-purple-500 shadow-lg flex items-center justify-center gap-2"
                >
                  <span>{`Let's Connect`}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}


