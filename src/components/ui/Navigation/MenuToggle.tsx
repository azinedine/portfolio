'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

type MenuToggleProps = {
  isOpen: boolean
  onToggle: () => void
}

export function MenuToggle({ isOpen, onToggle }: MenuToggleProps) {
  return (
    <motion.button
      onClick={onToggle}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="lg:hidden p-3 bg-gray-100/80 dark:bg-white/10 backdrop-blur-sm border border-gray-300/50 dark:border-white/20 rounded-2xl text-gray-700 dark:text-white hover:bg-gray-200/80 dark:hover:bg-white/20 transition-all duration-200"
      aria-label="Toggle menu"
    >
      <AnimatePresence mode="wait">
        {isOpen ? (
          <motion.div
            key="close"
            initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 90, opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.15 }}
          >
            <X className="w-5 h-5" />
          </motion.div>
        ) : (
          <motion.div
            key="menu"
            initial={{ rotate: 90, opacity: 0, scale: 0.8 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: -90, opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.15 }}
          >
            <Menu className="w-5 h-5" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  )
}


