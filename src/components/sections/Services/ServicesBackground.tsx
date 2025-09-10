'use client'

import { motion } from 'framer-motion'
import { memo } from 'react'

const backgroundVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

const floatingVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: { scale: 1, opacity: 1 },
}

export const ServicesBackground = memo(() => {
  return (
    <>
      {/* Background elements */}
      <motion.div
        variants={backgroundVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-primary-600/10 to-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-br from-cyan-500/10 to-primary-500/10 rounded-full blur-3xl" />
      </motion.div>

      {/* Decorative floating elements */}
      <motion.div
        variants={floatingVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
        className="absolute top-20 left-10 w-6 h-6 border border-primary-400/30 rounded rotate-45 animate-pulse"
      />
      <motion.div
        variants={floatingVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ delay: 0.7, duration: 0.6, ease: "easeOut" }}
        className="absolute bottom-20 right-10 w-4 h-4 bg-cyan-400/40 rounded-full animate-pulse"
        style={{ animationDelay: "1s" }}
      />
      <motion.div
        variants={floatingVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ delay: 0.9, duration: 0.6, ease: "easeOut" }}
        className="absolute top-1/2 left-0 w-8 h-8 border border-pink-400/30 rounded-full animate-pulse"
        style={{ animationDelay: "2s" }}
      />
      <motion.div
        variants={floatingVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ delay: 1.1, duration: 0.6, ease: "easeOut" }}
        className="absolute top-32 right-32 w-3 h-3 bg-yellow-400/50 rounded-full animate-pulse"
        style={{ animationDelay: "0.5s" }}
      />
    </>
  )
})

ServicesBackground.displayName = 'ServicesBackground'
