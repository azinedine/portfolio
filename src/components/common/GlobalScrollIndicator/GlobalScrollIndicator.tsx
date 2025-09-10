'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

interface GlobalScrollIndicatorProps {
  className?: string
}

const sections = [
  { id: 'hero', nextId: 'why-choose', text: 'Discover more' },
  { id: 'why-choose', nextId: 'services', text: 'View my services' },
  { id: 'services', nextId: 'projects', text: 'See my work' },
  { id: 'projects', nextId: 'contact-cta', text: 'Get in touch' },
  { id: 'contact-cta', nextId: 'hero', text: 'Back to top' }
]

export function GlobalScrollIndicator({ className = "" }: GlobalScrollIndicatorProps) {
  const [currentSection, setCurrentSection] = useState<string>('hero')

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2
      
      // Find which section is currently in view
      for (const section of sections) {
        const element = document.getElementById(section.id)
        if (element) {
          const rect = element.getBoundingClientRect()
          const elementTop = rect.top + window.scrollY
          const elementBottom = elementTop + rect.height
          
          if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
            setCurrentSection(section.id)
            break
          }
        }
      }
    }

    // Initial check
    handleScroll()

    // Listen for scroll events
    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleClick = () => {
    const currentSectionData = sections.find(s => s.id === currentSection)
    if (!currentSectionData) return

    const { nextId } = currentSectionData
    
    if (nextId === 'hero') {
      // Scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      // Scroll to next section
      const nextElement = document.getElementById(nextId)
      if (nextElement) {
        nextElement.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  const currentSectionData = sections.find(s => s.id === currentSection)
  const text = currentSectionData?.text || 'Scroll to explore'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "global-scroll-indicator bottom-4 text-center cursor-pointer sm:bottom-8",
        className
      )}
      onClick={handleClick}
      style={{ 
        pointerEvents: 'auto',
        position: 'fixed',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 9999
      }}
    >
      {/* Text */}
      <motion.p
        className="text-gray-600 dark:text-white/60 text-xs sm:text-sm mb-2 sm:mb-3 font-medium"
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        {text}
      </motion.p>

      {/* Scroll indicator container */}
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="w-6 h-10 border-2 border-gray-300 dark:border-white/30 rounded-full mx-auto relative backdrop-blur-sm bg-white/10 dark:bg-black/10"
      >
        {/* Scroll dot */}
        <motion.div
          animate={{ y: [2, 16, 2] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-1 h-3 bg-primary-500 rounded-full mx-auto mt-2"
        />
      </motion.div>

      {/* Chevron icon */}
      <motion.div
        animate={{ y: [0, 4, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="mt-2"
      >
        <ChevronDown className="w-4 h-4 text-gray-400 dark:text-white/40 mx-auto" />
      </motion.div>
    </motion.div>
  )
}
