'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

type CtaButtonProps = {
  label?: string
  onClick?: () => void
  className?: string
}

export function CtaButton({ label = "Let's Connect", onClick, className }: CtaButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ 
        scale: 1.05,
        boxShadow: '0 10px 30px rgba(109, 74, 236, 0.3)'
      }}
      whileTap={{ scale: 0.95 }}
      className={
        'hidden lg:flex items-center gap-2 bg-gradient-to-r from-primary-500 via-primary-600 to-purple-600 hover:from-primary-400 hover:to-purple-500 text-white font-semibold px-6 py-3 rounded-2xl transition-all duration-200 shadow-lg group relative overflow-hidden ' +
        (className ?? '')
      }
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
        initial={{ x: '-100%' }}
        whileHover={{ x: '100%' }}
        transition={{ duration: 0.5 }}
      />
      <span className="relative z-10 text-sm">{label}</span>
      <ArrowUpRight className="w-4 h-4 relative z-10 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-150" />
    </motion.button>
  )
}


