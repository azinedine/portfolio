'use client'

import { motion } from 'framer-motion'
import { Play, Code2 } from 'lucide-react'
import { FloatingElement } from '@/components/common/FloatingElements'

const floatingTechs = [
  { name: 'React', color: 'from-blue-400 to-blue-600', position: { top: '15%', right: '10%' } },
  { name: 'Node.js', color: 'from-green-400 to-green-600', position: { top: '50%', right: '5%' } },
  { name: 'TS', color: 'from-blue-500 to-blue-700', position: { bottom: '20%', right: '15%' } },
  { name: 'Vue', color: 'from-green-500 to-emerald-500', position: { top: '40%', left: '8%' } },
  { name: 'Laravel', color: 'from-red-400 to-red-600', position: { bottom: '30%', left: '12%' } },
]

export function HeroProfile() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative flex items-center justify-center"
    >
      {/* Main profile container */}
      <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
        {/* Animated background ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-full"
          style={{
            background: 'conic-gradient(from 0deg, rgba(109, 74, 236, 0.4), rgba(59, 130, 246, 0.2), rgba(16, 185, 129, 0.2), rgba(109, 74, 236, 0.4))',
            padding: '3px',
          }}
        >
          <div className="w-full h-full rounded-full" style={{ background: 'linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 50%, #16213e 100%)' }} />
        </motion.div>

        {/* Inner gradient border */}
        <div className="absolute inset-4 bg-gradient-to-br from-primary-500 via-primary-600 to-blue-600 rounded-full shadow-glow-lg">
          {/* Profile content */}
          <div className="absolute inset-2 rounded-full flex items-center justify-center overflow-hidden" style={{ background: 'linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 50%, #16213e 100%)' }}>
            {/* Profile image placeholder - Fixed background without white shadow */}
            <div className="w-full h-full rounded-full flex flex-col items-center justify-center relative" style={{ 
              background: 'linear-gradient(135deg, rgba(109, 74, 236, 0.15) 0%, rgba(59, 130, 246, 0.10) 50%, rgba(16, 185, 129, 0.10) 100%)'
            }}>
              <motion.div
                animate={{ 
                  scale: [1, 1.02, 1],
                  rotate: [0, 1, 0, -1, 0] 
                }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                className="text-gray-700 dark:text-white/90 mb-2"
              >
                <Code2 className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16" />
              </motion.div>
              <p className="text-gray-800 dark:text-white/80 font-medium text-xs sm:text-sm">A.ZINEDDINE</p>
              <p className="text-gray-600 dark:text-white/60 font-medium text-xs mt-1">Full Stack Developer</p>
              
              {/* Decorative code elements */}
              <div className="absolute top-8 sm:top-10 md:top-12 left-8 sm:left-10 md:left-12 text-green-400/60 font-mono text-xs font-bold">
                &lt;dev/&gt;
              </div>
              <div className="absolute bottom-8 sm:bottom-10 md:bottom-12 right-8 sm:right-10 md:right-12 text-blue-400/60 font-mono text-xs font-bold">
                {'{A.Z}'}
              </div>
              
              {/* Additional decorative elements */}
              <div className="absolute top-12 sm:top-14 md:top-16 right-12 sm:right-14 md:right-16 text-cyan-400/50 font-mono text-xs">
                React
              </div>
              <div className="absolute bottom-12 sm:bottom-14 md:bottom-16 left-12 sm:left-14 md:left-16 text-purple-400/50 font-mono text-xs">
                Next.js
              </div>
            </div>
          </div>
        </div>

        {/* Floating tech badges */}
        {floatingTechs.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
            style={{
              position: 'absolute',
              ...tech.position,
            }}
            whileHover={{ scale: 1.1, rotate: 10 }}
          >
            <FloatingElement
              duration={6 + index}
              delay={index * 0.5}
              yRange={8}
              xRange={3}
              rotateRange={3}
              className={`px-2 sm:px-3 py-1 sm:py-1.5 bg-gradient-to-r ${tech.color} text-white text-xs font-bold rounded-full shadow-glow cursor-pointer`}
            >
              {tech.name}
            </FloatingElement>
          </motion.div>
        ))}

        {/* Thumbs up decorations */}
        <FloatingElement
          duration={5}
          yRange={8}
          rotateRange={8}
          className="absolute -right-3 sm:-right-4 top-12 sm:top-14 md:top-16 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-sm sm:text-base md:text-lg shadow-glow cursor-pointer hover:scale-110 transition-transform"
        >
          👍
        </FloatingElement>

        <FloatingElement
          duration={6}
          delay={1}
          yRange={6}
          rotateRange={6}
          className="absolute -left-3 sm:-left-4 bottom-12 sm:bottom-14 md:bottom-16 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-sm sm:text-base md:text-lg shadow-glow cursor-pointer hover:scale-110 transition-transform"
        >
          👍
        </FloatingElement>

        {/* Play button overlay */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute inset-0 flex items-center justify-center group"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-full flex items-center justify-center group-hover:bg-primary-500/30 group-hover:border-primary-400/50 transition-all duration-300 shadow-glow">
            <Play className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white ml-0.5 group-hover:scale-110 transition-transform" />
          </div>
        </motion.button>

        {/* Small decorative dots */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.6, 0.8, 0.6] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-8 right-8 w-2 h-2 bg-cyan-400/60 rounded-full"
        />
        
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.7, 0.5] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-8 left-8 w-1.5 h-1.5 bg-pink-400/70 rounded-full"
        />
      </div>
    </motion.div>
  )
}