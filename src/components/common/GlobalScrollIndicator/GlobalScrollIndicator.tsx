'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

interface GlobalScrollIndicatorProps {
  className?: string
}

const sections = [
  { id: 'hero', nextId: 'why-choose', text: 'Discover more', isFooter: false },
  { id: 'why-choose', nextId: 'services', text: 'View my services', isFooter: false },
  { id: 'services', nextId: 'projects', text: 'See my work', isFooter: false },
  { id: 'projects', nextId: 'contact-cta', text: 'Get in touch', isFooter: false },
  { id: 'contact-cta', nextId: 'footer', text: 'View footer', isFooter: false },
  { id: 'footer', nextId: 'hero', text: 'Back to top', isFooter: true }
]

export function GlobalScrollIndicator({ className = "" }: GlobalScrollIndicatorProps) {
  const [currentSection, setCurrentSection] = useState<string>('hero')

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout

    const handleScroll = () => {
      // Clear previous timeout
      clearTimeout(scrollTimeout)
      
      // Add a small delay to account for scroll snapping animation
      scrollTimeout = setTimeout(() => {
        // Get viewport dimensions and scroll position
        const viewportHeight = window.innerHeight
        const scrollY = window.pageYOffset || document.documentElement.scrollTop
        const documentHeight = document.documentElement.scrollHeight
        
        // Special case: if we're at the very top, show hero
        if (scrollY < 100) {
          setCurrentSection('hero')
          return
        }
        
        // Special case: if we're near the bottom, show footer
        if (scrollY + viewportHeight >= documentHeight - 100) {
          setCurrentSection('footer')
          return
        }
        
        // Find which section is most visible in the viewport
        let bestSection = 'hero'
        let bestVisibleArea = 0
        
        for (const section of sections) {
          const element = document.getElementById(section.id)
          if (element) {
            const rect = element.getBoundingClientRect()
            const elementTop = Math.max(0, rect.top)
            const elementBottom = Math.min(viewportHeight, rect.bottom)
            const visibleHeight = Math.max(0, elementBottom - elementTop)
            const visiblePercentage = visibleHeight / viewportHeight
            
            // Consider this section if it's more than 30% visible
            if (visiblePercentage > 0.3 && visibleHeight > bestVisibleArea) {
              bestVisibleArea = visibleHeight
              bestSection = section.id
            }
          }
        }
        
        setCurrentSection(bestSection)
      }, 50) // Reduced delay for more responsive detection
    }

    // Initial check
    handleScroll()

    // Listen for scroll events on window (since scroll snap is on html/body)
    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      clearTimeout(scrollTimeout)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleClick = () => {
    const currentSectionData = sections.find(s => s.id === currentSection)
    if (!currentSectionData) return

    const { nextId } = currentSectionData
    
    if (nextId === 'hero') {
      // Scroll to top of the page
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      // Scroll to next section using scrollIntoView with snap behavior
      const nextElement = document.getElementById(nextId)
      if (nextElement) {
        nextElement.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start' // Changed from 'center' to 'start' for better snap alignment
        })
      }
    }
  }

  const currentSectionData = sections.find(s => s.id === currentSection)
  const text = currentSectionData?.text || 'Scroll to explore'
  const isFooter = currentSectionData?.isFooter || false

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "global-scroll-indicator bottom-4 text-center cursor-pointer sm:bottom-8 hidden md:block",
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
      {/* Conditional layout based on footer state */}
      {isFooter ? (
        // Footer layout: Icon at top, scroll indicator in middle, text at bottom
        <>
          {/* Chevron icon at top */}
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="mb-2 sm:mb-3"
          >
            <motion.div
              animate={{ rotate: 180 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <ChevronDown className="w-4 h-4 text-gray-400 dark:text-white/40 mx-auto" />
            </motion.div>
          </motion.div>

          {/* Scroll indicator container */}
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-gray-300 dark:border-white/30 rounded-full mx-auto relative backdrop-blur-sm bg-white/10 dark:bg-black/10"
          >
            {/* Scroll dot */}
            <motion.div
              animate={{ y: [16, 2, 16] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-3 bg-primary-500 rounded-full mx-auto mt-2"
            />
          </motion.div>

          {/* Text at bottom */}
          <motion.p
            className="text-gray-600 dark:text-white/60 text-xs sm:text-sm font-medium mt-2 sm:mt-3"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            {text}
          </motion.p>
        </>
      ) : (
        // Normal layout: Text at top, scroll indicator in middle, icon at bottom
        <>
          {/* Text at top */}
          <motion.p
            className="text-gray-600 dark:text-white/60 text-xs sm:text-sm font-medium mb-2 sm:mb-3"
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

          {/* Chevron icon at bottom */}
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="mt-2"
          >
            <motion.div
              animate={{ rotate: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <ChevronDown className="w-4 h-4 text-gray-400 dark:text-white/40 mx-auto" />
            </motion.div>
          </motion.div>
        </>
      )}
    </motion.div>
  )
}
