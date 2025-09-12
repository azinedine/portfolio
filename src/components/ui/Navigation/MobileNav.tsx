'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, X, Sparkles, Calendar } from 'lucide-react'
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
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-40 lg:hidden"
        >
          {/* Enhanced backdrop with gradient */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-gradient-to-br from-gray-900/70 via-purple-900/20 to-blue-900/30 backdrop-blur-xl"
            onClick={onClose}
          />

          {/* Redesigned menu container - Full screen on mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ 
              type: 'spring', 
              damping: 25, 
              stiffness: 300,
              duration: 0.4
            }}
            className="absolute inset-x-4 top-4 bottom-4 bg-white/95 dark:bg-gray-900/95 backdrop-blur-2xl border border-gray-200/50 dark:border-gray-700/50 rounded-3xl shadow-2xl overflow-hidden"
          >
            {/* Header with personal info and close button */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200/30 dark:border-gray-700/30">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="flex items-center gap-4"
              >
                {/* Personal logo/avatar */}
                <div className="relative">
                  <motion.div
                    whileHover={{ 
                      rotate: [0, -5, 5, 0],
                      scale: 1.05,
                    }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    className="w-12 h-12 rounded-2xl flex items-center justify-center p-1 bg-primary-900 dark:bg-transparent shadow-lg"
                  >
                    <Image 
                      src="/logo.png" 
                      alt="A.ZINEDDINE Logo" 
                      width={44} 
                      height={44}
                      className="transition-all duration-300 rounded-xl"
                    />
                  </motion.div>
                </div>
                
                {/* Personal information */}
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-lg text-gray-900 dark:text-white">A.ZINEDDINE</h3>
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">Full Stack Developer</p>
                  <div className="flex items-center gap-1 mt-1">
                    <span className="text-xs text-gray-500 dark:text-gray-400">Available for projects</span>
                  </div>
                </div>
              </motion.div>
              
              <motion.button
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ delay: 0.2 }}
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Navigation items with improved design */}
            <div className="flex-1 overflow-y-auto p-6">
              <div className="space-y-3">
                {navigationItems.map((item, index) => {
                  // Improved active state detection
                  const isActive = typeof window !== 'undefined' 
                    ? (item.href === '/' 
                        ? (activeItemName === 'Home' || window.location.pathname === '/')
                        : (activeItemName === item.name || window.location.pathname === item.href))
                    : activeItemName === item.name

                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -30, scale: 0.95 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      transition={{ 
                        delay: index * 0.08 + 0.1, 
                        duration: 0.4,
                        type: 'spring',
                        damping: 20
                      }}
                      className="relative"
                    >
                      <Link
                        href={item.href}
                        onClick={(e) => {
                          // Ensure navigation works for all links
                          onClose()
                          // Small delay to allow menu close animation
                          setTimeout(() => {
                            if (typeof window !== 'undefined') {
                              window.location.href = item.href
                            }
                          }, 150)
                        }}
                        className={cn(
                          'group relative flex items-center gap-4 p-4 rounded-2xl font-medium transition-all duration-300 overflow-hidden',
                          isActive
                            ? 'bg-gradient-to-r from-primary-500/15 to-purple-500/15 text-gray-900 dark:text-white shadow-lg backdrop-blur-sm'
                            : 'text-gray-700 dark:text-white/80 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800/50 hover:border-gray-200/50 dark:hover:border-gray-700/50'
                        )}
                      >
                        {/* Icon with enhanced styling */}
                        <div className={cn(
                          'flex items-center justify-center w-12 h-12 rounded-xl text-xl transition-all duration-300 relative',
                          isActive 
                            ? 'bg-gradient-to-br from-primary-500 to-purple-600 text-white shadow-lg transform scale-105'
                            : 'bg-gray-100 dark:bg-gray-800 group-hover:bg-gray-200 dark:group-hover:bg-gray-700 group-hover:scale-105'
                        )}>
                          <motion.span
                            className="relative z-10"
                            animate={isActive ? { rotate: [0, 5, -5, 0] } : {}}
                            transition={{ duration: 0.5, repeat: isActive ? Infinity : 0, repeatDelay: 3 }}
                          >
                            {item.icon}
                          </motion.span>
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span className="font-semibold text-base">{item.name}</span>
                            <ArrowUpRight className={cn(
                              'w-4 h-4 transition-all duration-300',
                              isActive 
                                ? 'opacity-100 text-primary-600 dark:text-primary-400' 
                                : 'opacity-60 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1'
                            )} />
                          </div>
                          <span className="text-sm text-gray-500 dark:text-gray-400 block mt-1">
                            {item.name === 'Home' && 'Welcome & overview'}
                            {item.name === 'About' && 'Learn about me'}
                            {item.name === 'Projects' && 'View my work'}
                            {item.name === 'Experience' && 'My journey & skills'}
                            {item.name === 'Contact' && 'Get in touch'}
                          </span>
                        </div>

                        {/* Active indicator */}
                        {isActive && (
                          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/8 to-purple-500/8 rounded-2xl" />
                        )}

                        {/* Hover glow effect */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </Link>
                    </motion.div>
                  )
                })}
              </div>
            </div>

            {/* Enhanced CTA section at bottom */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navigationItems.length * 0.08 + 0.3 }}
              className="p-6 bg-gradient-to-br from-gray-50/80 to-gray-100/50 dark:from-gray-800/50 dark:to-gray-900/30 border-t border-gray-200/30 dark:border-gray-700/30"
            >
              <div className="space-y-4">
                {/* Professional tagline */}
                <div className="text-center">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Ready to Start Your Project?</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{`Let's discuss your ideas and bring them to life`}</p>
                </div>
                
                {/* Contact methods grid */}
                <div className="grid grid-cols-3 gap-2">
                  <motion.a
                    href="mailto:amarichezineddine@gmail.com"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex flex-col items-center justify-center gap-1 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    <span className="text-lg">📧</span>
                    <span className="text-xs font-medium">Email</span>
                  </motion.a>
                  
                  <motion.a
                    href="tel:+213540128550"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex flex-col items-center justify-center gap-1 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    <span className="text-lg">📞</span>
                    <span className="text-xs font-medium">Call</span>
                  </motion.a>
                  
                  <motion.a
                    href="https://calendly.com/azineddine" // Replace with your actual Calendly link
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex flex-col items-center justify-center gap-1 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    <Calendar className="w-4 h-4" />
                    <span className="text-xs font-medium">Meet</span>
                  </motion.a>
                </div>
                
                {/* Main CTA buttons */}
                <div className="grid grid-cols-2 gap-3">
                  <motion.button
                    onClick={() => {
                      onClose()
                      setTimeout(() => {
                        if (typeof window !== 'undefined') {
                          window.location.href = '/projects'
                        }
                      }, 150)
                    }}
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    className="group flex items-center justify-center gap-2 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 font-semibold py-3 px-4 rounded-xl border-2 border-purple-500/30 hover:border-purple-500/60 transition-all duration-300 shadow-md hover:shadow-lg relative overflow-hidden"
                  >
                    <span className="text-lg">💼</span>
                    <span className="text-sm">Portfolio</span>
                  </motion.button>
                  
                  <motion.button
                    onClick={() => {
                      onClose()
                      setTimeout(() => {
                        if (typeof window !== 'undefined') {
                          window.location.href = '/contact'
                        }
                      }, 150)
                    }}
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    className="group flex items-center justify-center gap-2 bg-gradient-to-r from-primary-500 via-primary-600 to-purple-600 hover:from-primary-400 hover:via-primary-500 hover:to-purple-500 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg relative overflow-hidden"
                  >
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                    <span className="text-sm">Contact</span>
                  </motion.button>
                </div>
                
                {/* Footer note */}
                <p className="text-center text-xs text-gray-500 dark:text-gray-400">
                  Book a meeting • Response within 24 hours • Free consultation
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}


