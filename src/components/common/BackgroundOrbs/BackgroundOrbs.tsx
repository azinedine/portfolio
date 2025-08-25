'use client'

import { motion } from 'framer-motion'

export function BackgroundOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large gradient orbs */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut" 
        }}
        className="absolute top-20 right-20 w-[400px] h-[400px] bg-gradient-to-br from-primary-500/20 via-blue-500/15 to-cyan-500/10 rounded-full blur-3xl"
      />
      
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-20 left-20 w-[300px] h-[300px] bg-gradient-to-br from-purple-500/15 via-primary-500/20 to-pink-500/10 rounded-full blur-3xl"
      />

      <motion.div
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ 
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-gradient-to-br from-cyan-400/10 to-primary-400/15 rounded-full blur-2xl"
      />
    </div>
  )
}